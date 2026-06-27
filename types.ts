export interface Film {
  id: string;
  title: string;
  year: string;
  theme: string;
  description: string;
  recognition: string;
  youtubeUrl: string;
  embedId: string;
  duration?: string;
  language?: string;
  credits?: {
    director: string;
    screenplay: string;
    camera?: string;
    music?: string;
    editor?: string;
    cast?: string[];
  };
}

export interface MediaLink {
  id: string;
  source: string;
  title: string;
  url: string;
  type: 'video' | 'article' | 'social';
  description: string;
  thumbnailSeed: string;
  date?: string;
}

export interface PressCutting {
  id: string;
  headlineMalayalam: string;
  headlineEnglish: string;
  publication: string;
  dateEnglish?: string;
  mainImageDescription: string;
  contentMalayalamExcerpt: string;
  contentEnglishTranslation: string;
  highlightQuoteEnglish?: string;
  theme: 'Vyavastha' | 'Veyilmanam' | 'You Think' | 'General';
  readingTime?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  category: string;
}
