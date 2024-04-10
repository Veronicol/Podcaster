export type Episode = {
  id: string;
  title: string;
  date: string;
  duration: string;
};

export type PodcastDetail = {
  id: string;
  name: string;
  author: string;
  image: string;
  description: string;
  episodesCount: number;
  episodes: Episode[];
};
