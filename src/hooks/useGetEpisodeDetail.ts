import { useGetPodcastDetail } from './useGetPodcastDetail';

export const useGetEpisodeDetail = (podcastId: string, episodeId: string) => {
  const { data: podcastDetail, isLoading } = useGetPodcastDetail(
    podcastId || ''
  );

  const episodeDetail = podcastDetail?.episodes.find(
    (episode) => episode.id === episodeId
  );

  return { episodeDetail, isLoading };
};
