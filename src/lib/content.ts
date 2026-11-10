import { getCollection, type CollectionEntry } from 'astro:content';

// Single source for how posts and projects are ordered and addressed across the site.

// Posts live at the site root (/<slug>/) so URLs from the old Jekyll site keep working.
// Must match the route in src/pages/[slug].astro.
export function postUrl(post: CollectionEntry<'posts'>) {
  return `/${post.id}/`;
}

export async function getPostsNewestFirst() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getProjectsInOrder() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

const dateFormat = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(date: Date) {
  return dateFormat.format(date);
}
