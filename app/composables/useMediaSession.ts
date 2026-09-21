import { onBeforeUnmount } from 'vue';

export interface Track {
  title: string;
  artist?: string;
  album?: string;
}

type Handlers = Partial<Record<MediaSessionAction, () => void>>;

const ARTWORK: MediaImage[] = [{ src: '/icon.svg', sizes: '512x512', type: 'image/svg+xml' }];

/**
 * Lock screen, Control Center and headphone controls for audio played through a
 * detached Audio element. Metadata names the track; the queue itself stays in the
 * caller, which wires nexttrack/previoustrack to its own list.
 */
export function useMediaSession() {
  const session = () =>
    import.meta.client && 'mediaSession' in navigator ? navigator.mediaSession : null;

  let claimed: Handlers = {};

  const setTrack = (track: Track | null) => {
    const media = session();
    if (!media) return;

    media.metadata = track
      ? new MediaMetadata({
          title: track.title,
          artist: track.artist ?? 'English Notes',
          album: track.album,
          artwork: ARTWORK,
        })
      : null;
  };

  const setState = (state: MediaSessionPlaybackState) => {
    const media = session();
    if (media) media.playbackState = state;
  };

  const setHandlers = (handlers: Handlers) => {
    const media = session();
    if (!media) return;

    for (const action of Object.keys(claimed) as MediaSessionAction[]) {
      if (!(action in handlers)) trySetHandler(media, action, null);
    }

    for (const [action, handler] of Object.entries(handlers) as [
      MediaSessionAction,
      () => void,
    ][]) {
      trySetHandler(media, action, handler);
    }

    claimed = handlers;
  };

  const clear = () => {
    setTrack(null);
    setState('none');
    setHandlers({});
  };

  onBeforeUnmount(clear);

  return { setTrack, setState, setHandlers, clear };
}

/** Browsers reject actions they do not implement, which must not break the rest. */
function trySetHandler(
  media: MediaSession,
  action: MediaSessionAction,
  handler: (() => void) | null,
) {
  try {
    media.setActionHandler(action, handler);
  } catch {
    // Unsupported action on this browser
  }
}
