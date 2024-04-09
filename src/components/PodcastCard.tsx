import type { PodcastListItem } from '../models';

export const PodcastCard = ({ podcast }: { podcast: PodcastListItem }) => {
  const { name, author, image } = podcast;

  return (
    <div className='card-container'>
      <img src={image} alt={image}/>
      <div className='content-container'>
        <div className='line-clamp'>{name.toUpperCase()}</div>
        <div className='subtext'>Author: {author}</div>
      </div>
    </div>
  );
};