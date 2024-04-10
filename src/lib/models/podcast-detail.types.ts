export type PodcastDetailResponse = {
  resultCount: number;
  results: Result[];
};

interface Result {
  wrapperType: WrapperType;
  kind: Kind;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: Name;
  trackName: string;
  collectionCensoredName?: Name;
  trackCensoredName?: Name;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: Date;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis?: number;
  country: Country;
  currency?: string;
  primaryGenreName?: PrimaryGenreNameEnum;
  contentAdvisoryRating: ContentAdvisoryRating;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  closedCaptioning?: ClosedCaptioning;
  previewUrl?: string;
  description?: string;
  episodeUrl?: string;
  artistIds?: any[];
  shortDescription?: string;
  artworkUrl160?: string;
  episodeFileExtension?: EpisodeFileExtension;
  episodeContentType?: EpisodeContentType;
  episodeGuid?: string;
}

enum ClosedCaptioning {
  None = 'none'
}

enum Name {
  NewRoryMAL = 'New Rory & MAL'
}

enum ContentAdvisoryRating {
  Explicit = 'Explicit'
}

enum Country {
  Usa = 'USA'
}

enum EpisodeContentType {
  Audio = 'audio'
}

enum EpisodeFileExtension {
  Mp3 = 'mp3'
}

interface GenreClass {
  name: PrimaryGenreNameEnum;
  id: string;
}

enum PrimaryGenreNameEnum {
  Music = 'Music'
}

enum Kind {
  Podcast = 'podcast',
  PodcastEpisode = 'podcast-episode'
}

enum WrapperType {
  PodcastEpisode = 'podcastEpisode',
  Track = 'track'
}
