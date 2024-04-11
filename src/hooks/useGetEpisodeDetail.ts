import { useGetPodcastDetail } from './useGetPodcastDetail';

export const useGetEpisodeDetail = (podcastId: string, episodeId: string) => {
  const { data: podcastDetail } = useGetPodcastDetail(podcastId || '');

  return podcastDetail?.episodes.find((episode) => episode.id === episodeId);
};
