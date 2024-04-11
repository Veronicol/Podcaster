export type Episode = {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  episodeUrl: string;
};

export type PodcastDetail = {
  episodesCount: number;
  episodes: Episode[];
};
