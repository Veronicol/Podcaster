import { useParams } from 'react-router-dom';

import { useGetPodcastDetail } from '../hooks';

export const PodcastDetail = () => {
  const { podcastId } = useParams();

  const { data: podcastDetail } = useGetPodcastDetail(podcastId || '');

  return (
    <>
      {podcastDetail && (
        <>
          <h1>PODCAST DETAIL</h1>
          <div>INFO:</div>
          <div>Episodes: {podcastDetail.episodesCount}</div>
          {podcastDetail.episodes.map((episode) => {
            const { id, title, date, duration } = episode;
            return (
              <div key={id}>
                {title} - {date} - {duration}
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
