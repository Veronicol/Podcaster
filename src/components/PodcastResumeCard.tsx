import { useNavigate, useParams } from 'react-router-dom';

import { useGetPodcastResume } from '../hooks';

export const PodcastResumeCard = () => {
  const { podcastId, episodeId } = useParams();
  const navigate = useNavigate();
  const hasInfoAsLink = !!episodeId;

  const podcastResume = useGetPodcastResume(podcastId || '');

  const navigateToDetail = () => {
    hasInfoAsLink && navigate(`/podcast/${podcastId}`);
  };

  return (
    <>
      {podcastResume && (
        <div className="card-resume-container box">
          <img
            className={`${hasInfoAsLink ? 'clickable' : ''}`}
            src={podcastResume.image}
            alt={podcastResume.image}
            onClick={navigateToDetail}
          />
          <div className="main-info-container" onClick={navigateToDetail}>
            <div className={`main-info ${hasInfoAsLink ? 'clickable' : ''}`}>
              {podcastResume.name}
            </div>
            <div
              className={`secondary-info ${hasInfoAsLink ? 'clickable' : ''}`}
            >
              by {podcastResume.author}
            </div>
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
