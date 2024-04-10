export type Episode = {
  id: string;
  title: string;
  date: string;
  duration: string;
};

export type PodcastDetail = {
  episodesCount: number;
  episodes: Episode[];
};
