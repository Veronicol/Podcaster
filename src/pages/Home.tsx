import { PodcastCard } from '../components/PodcastCard';
import { useGetPodcastList } from '../hooks';

export const Home = () => {

  const {data: resPodcastList } = useGetPodcastList();
  const podcastList = resPodcastList || [];
  

  return (
    <div className='home-container'>
      {podcastList.map(currentPodcast => {
        return <PodcastCard key={currentPodcast.id} podcast={currentPodcast} />;
      })}
    </div>
  );
};

