import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { PodcastResumeCard } from '../components';
import { useGetEpisodeDetail } from '../hooks';

export const EpisodeDetail = () => {
  const { podcastId, episodeId } = useParams();

  const episodeDetail = useGetEpisodeDetail(podcastId || '', episodeId || '');

  const parsedDescription = parse(
    episodeDetail?.description || 'No description available'
  );

  return (
    <>
      {episodeDetail && (
        <div className="detail-container">
          <PodcastResumeCard />
          <div className="episode-container box">
            <div className="title">{episodeDetail.title}</div>
            <div className="description">{parsedDescription}</div>
            {episodeDetail.episodeUrl ? (
              <audio controls src={episodeDetail.episodeUrl}></audio>
            ) : (
              <div>Ooops... No audio available</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
