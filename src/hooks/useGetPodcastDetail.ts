import { useQuery } from '@tanstack/react-query';

import type { PodcastDetailResponse } from '../lib/models';
import { getPodcastDetail, podcastDetailKey } from '../lib/services';
import type { Episode, PodcastDetail } from '../models';
import { convertMillisecsToDateTime, oneDayInMilisecs } from '../utils';

export const useGetPodcastDetail = (podcastId: string) => {
  const mapPodcastDetailResponse = (
    podcastDetailResponse: PodcastDetailResponse
  ): PodcastDetail | undefined => {
    const { resultCount, results } = podcastDetailResponse;

    if (resultCount > 0) {
      const mappedResults = results.map((result): Episode => {
        const {
          trackId,
          trackName,
          releaseDate,
          trackTimeMillis,
          description,
          episodeUrl
        } = result;

        return {
          id: trackId.toString(),
          title: trackName,
          description: description || '',
          episodeUrl: episodeUrl || '',
          date: new Date(releaseDate).toLocaleDateString('en-GB'),
          duration: trackTimeMillis
            ? convertMillisecsToDateTime(trackTimeMillis)
            : '- -'
        };
      });

      return {
        episodesCount: resultCount,
        episodes: mappedResults
      };
    }
  };

  return useQuery({
    queryKey: [podcastDetailKey, podcastId],
    queryFn: () => getPodcastDetail(podcastId),
    select: (data) => mapPodcastDetailResponse(data),
    enabled: !!podcastId,
    staleTime: oneDayInMilisecs,
    refetchInterval: oneDayInMilisecs
  });
};
