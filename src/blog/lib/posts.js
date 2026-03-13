import postsData from "../posts/posts.json";
import { BLOG_CATEGORIES, getCategoryBySlug } from "./categories.js";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function normalizePost(post) {
  const category = getCategoryBySlug(post.category);
  const date = new Date(`${post.date}T00:00:00`);

  return {
    ...post,
    dateISO: post.date,
    dateDisplay: dateFormatter.format(date),
    categoryLabel: category ? category.label : post.category,
  };
}

function sortByDateDesc(a, b) {
  return new Date(`${b.date}T00:00:00`) - new Date(`${a.date}T00:00:00`);
}

export function getAllPosts() {
  return postsData.map(normalizePost).sort(sortByDateDesc);
}

export function getFeaturedPost() {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.featured) || allPosts[0] || null;
}

export function getLatestPosts(limit = 3) {
  return getAllPosts().slice(0, limit);
}

export function getPostsByCategory(categorySlug) {
  return getAllPosts().filter((post) => post.category === categorySlug);
}

export function findPost(categorySlug, slug) {
  return (
    getAllPosts().find(
      (post) => post.category === categorySlug && post.slug === slug
    ) || null
  );
}

export function getRelatedPosts(currentPost, limit = 3) {
  if (!currentPost) {
    return [];
  }

  return getAllPosts()
    .filter(
      (post) =>
        post.slug !== currentPost.slug && post.category === currentPost.category
    )
    .slice(0, limit);
}

export function getFilterOptions() {
  return [
    { slug: "all", label: "All Categories" },
    ...BLOG_CATEGORIES.map((category) => ({
      slug: category.slug,
      label: category.label,
    })),
  ];
}
