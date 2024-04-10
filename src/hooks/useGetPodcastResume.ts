import { useGetPodcastList } from './useGetPodcastList';

export const useGetPodcastResume = (podcastId: string) => {
  const { data: resPodcastList } = useGetPodcastList();
  const podcastList = resPodcastList || [];
  return podcastList.find((podcast) => podcast.id === podcastId);
};
