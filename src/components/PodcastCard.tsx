import type { PodcastListItem } from '../models';

export const PodcastCard = ({
  podcast,
  onPodcastSelect
}: {
  podcast: PodcastListItem;
  onPodcastSelect?: (id: string) => void;
}) => {
  const { id, name, author, image } = podcast;

  return (
    <div
      className="card"
      onClick={() => onPodcastSelect && onPodcastSelect(id)}
      role="button"
    >
      <img src={image} alt={image} />
      <div className="card-content box">
        <div className="line-clamp">{name.toUpperCase()}</div>
        <div className="subtext">Author: {author}</div>
      </div>
    </div>
  );
};
