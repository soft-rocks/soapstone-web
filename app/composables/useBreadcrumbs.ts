import dragon from '~/content/dragon-english-basic-100/index.json';
import notes from '~/content/english-grammar-profile/index.json';

export interface Crumb {
  label: string;
  to?: string;
}

/**
 * The trail from the home page to the page on screen, for the layout. The home page
 * itself has none. The last crumb is the current page and is not a link.
 */
export function useBreadcrumbs() {
  const route = useRoute();
  const trailOf = useBreadcrumbTrail();
  return computed(() => trailOf(String(route.name ?? ''), String(route.params.id ?? '')));
}

/** The trail of any route, by its name and id param. The practices page uses it per row. */
export function useBreadcrumbTrail() {
  const { t } = useI18n();

  return (name: string, id: string): Crumb[] => {
    const home: Crumb = { label: t('breadcrumb.home'), to: '/' };

    const grammar: Crumb = { label: t('home.grammar'), to: '/english-grammar-profile' };
    const note: Crumb = {
      label: notes.find((entry) => entry.id === id)?.title ?? id,
      to: `/english-grammar-profile/${id}`,
    };
    const book: Crumb = { label: t('home.dragonEnglish'), to: '/dragon-english-basic-100' };
    const sentence: Crumb = {
      label: dragon.find((entry) => entry.id === id)?.sentence ?? id,
      to: `/dragon-english-basic-100/${id}`,
    };
    const practice: Crumb = { label: t('breadcrumb.practice') };

    const trails: Record<string, Crumb[]> = {
      'english-grammar-profile': [home, grammar],
      'english-grammar-profile-sentences': [home, grammar, practice],
      'english-grammar-profile-id': [home, grammar, note],
      'english-grammar-profile-id-sentences': [home, grammar, note, practice],
      'dragon-english-basic-100': [home, book],
      'dragon-english-basic-100-sentences': [home, book, practice],
      'dragon-english-basic-100-id': [home, book, sentence],
      'dragon-english-basic-100-id-sentences': [home, book, sentence, practice],
      practices: [home, { label: t('nav.practices') }],
      settings: [home, { label: t('nav.settings') }],
    };

    const trail = trails[name] ?? [];
    // The current page is the last crumb, so it never links to itself
    return trail.map((crumb, index) =>
      index === trail.length - 1 ? { label: crumb.label } : crumb,
    );
  };
}
