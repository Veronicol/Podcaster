import { useParams } from 'react-router-dom';

import { useGetPodcastResume } from '../hooks';

export const PodcastResumeCard = () => {
  const { podcastId, episodeId } = useParams();
  const hasInfoAsLink = !episodeId;

  const podcastResume = useGetPodcastResume(podcastId || '');

  return (
    <>
      {podcastResume && (
        <div className="card-resume-container box">
          <img src={podcastResume.image} alt={podcastResume.image} />
          <div className="main-info-container">
            <div className="main-info">{podcastResume.name}</div>
            <div className="secondary-info">by {podcastResume.author}</div>
          </div>
          <div className="content-info-container">
            <div className="title">Description:</div>
            <div className="info">{podcastResume.description}</div>
          </div>
        </div>
      )}
    </>
  );
};
