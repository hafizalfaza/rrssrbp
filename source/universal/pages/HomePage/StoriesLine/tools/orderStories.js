export const orderStories = (recentStories) => {
  const readStories = recentStories.filter((story) => {
    return story.viewed_stories;
  })

  const unreadStories = recentStories.filter((story) => {
    return !story.viewed_stories;
  })

  return [...unreadStories, ...readStories];

} 