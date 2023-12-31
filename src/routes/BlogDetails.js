import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../dataset/blog";

const BlogDetails = () => {
  // Use useParams hook to get the dynamic parameter from the URL
  const { title } = useParams();

  // Decode the URL parameter to get the original title
  const decodedTitle = decodeURIComponent(title);

  // Find the blog data based on the title
  const selectedBlog = blogData.find(
    (blog) => blog.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  // If the blog with the specified title is not found, display an error message
  if (!selectedBlog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="single-blog">
      <img src={selectedBlog.featured_image} alt={selectedBlog.author} />
      <h1>{selectedBlog.title}</h1>
      <p>Author: {selectedBlog.author}</p>
      <p>Publish Date: {selectedBlog.publish_date}</p>
      <p>{selectedBlog.content}</p>
      <p>Tags: {selectedBlog.tags}</p>
      <p>Views: {selectedBlog.views}</p>
      <p>Comments: {selectedBlog.comments}</p>
    </div>
  );
};

export default BlogDetails;
