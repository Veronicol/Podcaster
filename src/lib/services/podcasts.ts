import type { PodcastDetailResponse } from '../models';
import type { PodcastListResponse } from '../models/podcast-list.types';

export const getPodcastList = async (): Promise<PodcastListResponse> => {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => JSON.parse(data.contents));
};

export const getPodcastDetail = async (
  podcastId: string
): Promise<PodcastDetailResponse> => {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast &entity=podcastEpisode&limit=20`)}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => JSON.parse(data.contents));
};
