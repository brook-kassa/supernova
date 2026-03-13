import { Link } from "react-router-dom";

export default function BlogCard({ post, featured = false }) {
  return (
    <article className={`snblog-card ${featured ? "snblog-card--featured" : ""}`}>
      <div className="snblog-card__meta">
        <span className="snblog-tag">{post.categoryLabel}</span>
        <time dateTime={post.dateISO}>{post.dateDisplay}</time>
      </div>

      <h3 className="snblog-card__title">
        <Link to={`/blog/${post.category}/${post.slug}`}>{post.title}</Link>
      </h3>

      <p className="snblog-card__description">{post.description}</p>

      <div className="snblog-card__footer">
        <span>By {post.author}</span>
        <Link to={`/blog/${post.category}/${post.slug}`} className="snblog-card__cta">
          Read article
        </Link>
      </div>
    </article>
  );
}
