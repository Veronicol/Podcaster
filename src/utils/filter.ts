import type { PodcastListItem } from '../models';

export const getMatchingElements = (
  podcasts: PodcastListItem[],
  value: string
): PodcastListItem[] => {
  const formattedValue = value.toUpperCase();
  const filteredValues = podcasts.filter((podcast) => {
    const { name, author } = podcast;
    return (
      name.toUpperCase().includes(formattedValue) ||
      author.toUpperCase().includes(formattedValue)
    );
  });
  return filteredValues;
};
