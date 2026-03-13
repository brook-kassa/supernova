import { Link, useParams } from "react-router-dom";
import BlogLayout from "../components/BlogLayout.jsx";
import { getCategoryBySlug } from "../lib/categories.js";
import { findPost, getRelatedPosts } from "../lib/posts.js";
import "../styles/blog.css";

export default function BlogPostPage() {
  const { category: categorySlug, slug } = useParams();
  const category = getCategoryBySlug(categorySlug);
  const post = findPost(categorySlug, slug);

  if (!category || !post) {
    return (
      <BlogLayout
        title="Article Not Found | Supernova Systems Blog"
        description="The requested blog article could not be found."
        canonicalPath="/blog"
      >
        <section className="section">
          <div className="about-content snblog-content snblog-section--narrow">
            <section className="snblog-section">
              <h1>Article not found</h1>
              <p>
                This article may have moved or the URL is incorrect. Visit the blog
                homepage to browse the latest posts.
              </p>
              <Link to="/blog" className="snblog-back">
                Back to blog
              </Link>
            </section>
          </div>
        </section>
      </BlogLayout>
    );
  }

  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <BlogLayout
      title={`${post.title} | Supernova Systems Blog`}
      description={post.description}
      canonicalPath={`/blog/${post.category}/${post.slug}`}
    >
      <section className="section">
        <div className="about-content snblog-content">
          <article className="snblog-article" itemScope itemType="https://schema.org/BlogPosting">
            <header className="snblog-article__header">
              <p className="snblog-kicker">{category.label}</p>
              <h1 itemProp="headline">{post.title}</h1>
              <p className="snblog-article__description" itemProp="description">
                {post.description}
              </p>

              <div className="snblog-article__meta">
                <span itemProp="author">By {post.author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={post.dateISO} itemProp="datePublished">
                  {post.dateDisplay}
                </time>
              </div>

              <ul className="snblog-tags" aria-label="Tags">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </header>

            <div className="snblog-article__content" itemProp="articleBody">
              {post.content.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </article>

          {relatedPosts.length > 0 && (
            <section className="snblog-section" aria-labelledby="related-posts">
              <div className="snblog-section__head">
                <h2 id="related-posts">More in {category.label}</h2>
                <p>Continue exploring articles in this category.</p>
              </div>

              <div className="snblog-grid">
                {relatedPosts.map((relatedPost) => (
                  <article className="snblog-card" key={`related-${relatedPost.slug}`}>
                    <div className="snblog-card__meta">
                      <span className="snblog-tag">{relatedPost.categoryLabel}</span>
                      <time dateTime={relatedPost.dateISO}>{relatedPost.dateDisplay}</time>
                    </div>
                    <h3 className="snblog-card__title">
                      <Link to={`/blog/${relatedPost.category}/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="snblog-card__description">{relatedPost.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="snblog-section snblog-section--narrow">
            <Link to="/blog" className="snblog-back">
              Back to blog homepage
            </Link>
          </section>
        </div>
      </section>
    </BlogLayout>
  );
}
