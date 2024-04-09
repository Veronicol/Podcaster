import { useGetPodcastList } from '../hooks';

export const Home = () => {

  const {data: resPodcastList } = useGetPodcastList();
  const podcastList = resPodcastList || [];
  

  return (
    <div>Home:
      <ul>
      {podcastList.map(currentPodcast => {
        const { id, name, author, image } = currentPodcast;

        return <li key={id}>
          <img src={image} alt={image}/>
          {name}
          <div>Author: {author}</div>
          </li>;
      })}

      </ul>
    </div>
  );
};

