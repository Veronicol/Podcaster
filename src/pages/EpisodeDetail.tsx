import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { PodcastResumeCard } from '../components';
import { useGetEpisodeDetail } from '../hooks';

export const EpisodeDetail = () => {
  const { podcastId, episodeId } = useParams();

  const { episodeDetail, isLoading } = useGetEpisodeDetail(
    podcastId || '',
    episodeId || ''
  );

  const parsedDescription = parse(
    episodeDetail?.description || 'No description available'
  );

  return (
    <>
      {!isLoading && (
        <div className="detail-container">
          {episodeDetail ? (
            <>
              <PodcastResumeCard />
              <div className="episode-container box">
                <div className="title">{episodeDetail.title}</div>
                <div className="description">{parsedDescription}</div>
                {episodeDetail.episodeUrl ? (
                  <audio controls src={episodeDetail.episodeUrl}></audio>
                ) : (
                  <div>Ooops... audio not available</div>
                )}
              </div>
            </>
          ) : (
            <div>Ooops... episode not available</div>
          )}
        </div>
      )}
    </>
  );
};
