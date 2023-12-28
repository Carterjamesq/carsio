import React from "react";

import blog from "../dataset/blog";

const Blog = () => {
  return (
    <div>
      <article className="blog">
        {blog &&
          blog.map((item) => (
            <div className="blog-card" key={item.blog_id}>
              <img src={item.featured_image} alt={item.author} />
              <h2>
                {item.title.split(" ").slice(0, 4).join("")}
                <span>...</span>
              </h2>
              <button className="btn-primary">Read more</button>
            </div>
          ))}
      </article>
    </div>
  );
};

export default Blog;
