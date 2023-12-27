import React, { useEffect, useState } from "react";

import { FaRegEye } from "react-icons/fa";
import { LiaCommentDots } from "react-icons/lia";

const News = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/news.json")
      .then((res) => res.json())
      .then((article) => setArticle(article));
  }, []);

  function truncateHeadline(headline, words) {
    const wordsArray = headline.split(" ");
    const truncatedWords = wordsArray.slice(0, words);
    return truncatedWords.join(" ");
  }
  function truncateContent(content, words) {
    const wordsArray = content.split(" ");
    const truncatedWords = wordsArray.slice(0, words);
    return truncatedWords.join(" ");
  }

  return (
    <div>
      <div className="news">
        {article &&
          article.map((article) => (
            <div key={article.id} className="card-news">
              <div className="card-header">
                <img src={article.image_url} />
                <div className="views-comments">
                  <p>
                    <FaRegEye /> {article.views}
                  </p>
                  <p>
                    <LiaCommentDots /> {article.comments}
                  </p>
                </div>
                <div>
                  <h3>{truncateHeadline(article.headline, 4)}</h3>
                  <p>{truncateContent(article.content, 30)}</p>
                </div>
                <button className="btn-primary">Read Details</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default News;
