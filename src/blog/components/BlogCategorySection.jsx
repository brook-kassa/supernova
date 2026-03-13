import BlogCard from "./BlogCard.jsx";

export default function BlogCategorySection({ category, posts }) {
  return (
    <section className="snblog-section" aria-labelledby={`section-${category.slug}`}>
      <div className="snblog-section__head">
        <h2 id={`section-${category.slug}`}>{category.label}</h2>
        <p>{category.description}</p>
      </div>

      {posts.length > 0 ? (
        <div className="snblog-grid">
          {posts.map((post) => (
            <BlogCard key={`${post.category}-${post.slug}`} post={post} />
          ))}
        </div>
      ) : (
        <p className="snblog-empty">No posts in this category yet.</p>
      )}
    </section>
  );
}
