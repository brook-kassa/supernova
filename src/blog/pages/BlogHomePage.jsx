import { useMemo, useState } from "react";
import BlogLayout from "../components/BlogLayout.jsx";
import BlogCard from "../components/BlogCard.jsx";
import BlogCategorySection from "../components/BlogCategorySection.jsx";
import { BLOG_CATEGORIES } from "../lib/categories.js";
import {
  getAllPosts,
  getFeaturedPost,
  getFilterOptions,
  getLatestPosts,
} from "../lib/posts.js";
import "../styles/blog.css";

export default function BlogHomePage() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const latestPosts = getLatestPosts(3);
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleCategories =
    activeFilter === "all"
      ? BLOG_CATEGORIES
      : BLOG_CATEGORIES.filter((category) => category.slug === activeFilter);

  const postsByCategory = useMemo(() => {
    return visibleCategories.map((category) => ({
      category,
      posts: allPosts.filter((post) => post.category === category.slug),
    }));
  }, [allPosts, visibleCategories]);

  return (
    <BlogLayout
      title="Supernova Systems Blog | IT Tips, Cloud Success Stories, Future of IT"
      description="A practical knowledge hub from Supernova Systems covering cloud infrastructure, cybersecurity, and managed IT strategy."
      canonicalPath="/blog"
    >
      <section className="section">
        <div className="section__head section__head--center snblog-hero">
          <p className="snblog-kicker">Knowledge Hub</p>
          <h1 className="section__title">Insights for Better IT Decisions</h1>
          <p className="section__sub">
            Explore practical guidance, cloud wins, and forward-looking IT analysis
            designed for growing businesses.
          </p>
        </div>

        <div className="about-content snblog-content">
          {featuredPost && (
            <section className="snblog-section" aria-labelledby="featured-post">
              <div className="snblog-section__head">
                <h2 id="featured-post">Featured Post</h2>
                <p>Highlighted article selected for strategic relevance this week.</p>
              </div>
              <BlogCard post={featuredPost} featured />
            </section>
          )}

          <section className="snblog-section" aria-labelledby="latest-posts">
            <div className="snblog-section__head">
              <h2 id="latest-posts">Latest Posts</h2>
              <p>Fresh perspectives from across Practical IT, Cloud, and the Future of IT.</p>
            </div>
            <div className="snblog-grid">
              {latestPosts.map((post) => (
                <BlogCard key={`latest-${post.category}-${post.slug}`} post={post} />
              ))}
            </div>
          </section>

          <section className="snblog-section" aria-labelledby="browse-category">
            <div className="snblog-section__head">
              <h2 id="browse-category">Browse by Category</h2>
              <p>Filter by one focus area or view all three content tracks.</p>
            </div>

            <div className="snblog-filters" role="toolbar" aria-label="Category filters">
              {getFilterOptions().map((option) => (
                <button
                  key={option.slug}
                  type="button"
                  className={`snblog-filter ${
                    activeFilter === option.slug ? "is-active" : ""
                  }`}
                  onClick={() => setActiveFilter(option.slug)}
                  aria-pressed={activeFilter === option.slug}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>

          {postsByCategory.map(({ category, posts }) => (
            <BlogCategorySection
              key={category.slug}
              category={category}
              posts={posts}
            />
          ))}
        </div>
      </section>
    </BlogLayout>
  );
}
