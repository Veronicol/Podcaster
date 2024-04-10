import { useQuery } from '@tanstack/react-query';

import type { PodcastListResponse } from '../lib/models/podcast-list.types';
import { getPodcastList, podcastListKey } from '../lib/services';
import type { PodcastListItem } from '../models';

const oneDayInMilisecs = 24 * 60 * 60 * 1000;

export const useGetPodcastList = () => {
  const mapPodcastListResponse = (
    response: PodcastListResponse
  ): PodcastListItem[] => {
    const podcastListResponse = response?.feed.entry || [];
    return podcastListResponse.map((item) => {
      const {
        id,
        'im:name': name,
        'im:artist': author,
        'im:image': image
      } = item;
      return {
        id: id.label,
        name: name.label,
        author: author.label,
        image: image[0].label
      };
    });
  };

  return useQuery({
    queryKey: [podcastListKey],
    queryFn: getPodcastList,
    select: (data) => mapPodcastListResponse(data),
    staleTime: oneDayInMilisecs,
    refetchInterval: oneDayInMilisecs
  });
};
