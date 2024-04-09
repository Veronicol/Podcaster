import { useEffect, useState } from 'react';

import type { PodcastListResponse } from '../lib/services/podcasts.types';

export const Home = () => {
  const [podcastList, setPodcastList] = useState<PodcastListResponse>(); 

  useEffect(() => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`).then(response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    })
    .then(data => JSON.parse(data.contents)).then((contents) => setPodcastList(contents));

  }, []);



  return (
    <div>Home:
      <ul>
      {podcastList && podcastList.feed?.entry.map(currentPodcast => {
        const { id, 'im:name': name, 'im:artist': author, 'im:image': image } = currentPodcast;

        return <li key={id.label}>
          <img src={image[0].label} alt={image[0].label}/>
          {name.label}
          <div>Author: {author.label}</div>
          </li>;
      })}

      </ul>
    </div>
  );
};

