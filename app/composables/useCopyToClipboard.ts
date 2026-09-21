import { onBeforeUnmount, ref } from 'vue';

/**
 * Copy text, with a `copied` flag that falls back to false on its own.
 *
 * The async Clipboard API needs a secure context, which rules out a phone browsing
 * a plain-http dev server on the LAN, so a selection-based fallback stays in place.
 * Both paths start inside the click handler, which is what iOS Safari requires.
 */
export function useCopyToClipboard(resetAfter = 1600) {
  const copied = ref(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  const copy = async (text: string) => {
    const ok = await writeText(text);
    if (!ok) return false;

    copied.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => (copied.value = false), resetAfter);
    return true;
  };

  onBeforeUnmount(() => clearTimeout(timer));

  return { copy, copied };
}

async function writeText(text: string): Promise<boolean> {
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Permission denied or no user gesture: fall through to the selection path
    }
  }

  return copyBySelection(text);
}

function copyBySelection(text: string): boolean {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.top = '0';
  field.style.opacity = '0';
  document.body.appendChild(field);

  const selection = document.getSelection();
  const previousRange = selection?.rangeCount ? selection.getRangeAt(0) : null;

  // iOS ignores select() on a readonly field and wants a real range instead
  if (/iP(hone|ad|od)/.test(navigator.userAgent)) {
    field.contentEditable = 'true';
    field.readOnly = false;
    const range = document.createRange();
    range.selectNodeContents(field);
    selection?.removeAllRanges();
    selection?.addRange(range);
    field.setSelectionRange(0, text.length);
  } else {
    field.select();
  }

  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    // execCommand is gone or blocked: report the failure to the caller
  }

  field.remove();

  if (previousRange && selection) {
    selection.removeAllRanges();
    selection.addRange(previousRange);
  }

  return ok;
}
