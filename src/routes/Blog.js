import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blog.json")
      .then((res) => res.json())
      .then((blog) => setBlog(blog));
  }, []);

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
