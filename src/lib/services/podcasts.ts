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
