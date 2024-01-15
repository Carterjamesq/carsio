import React, { useEffect, useState } from "react";
import { fetchContent } from "../dataset/carsDB";

const CategorysHome = () => {
  const [content, setContent] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContent();
      setContent(data);

      const categories = [...new Set(data.map((item) => item.fields.category))];
      setUniqueCategories(categories);
    };

    fetchData();
  }, []);

  return (
    <div className="categories-home">
      <h2>Categories</h2>
      <ul className="mansory-grid">
        {uniqueCategories.slice(0, 3).map((category, index) => {
          const itemInCategory = content.find(
            (item) => item.fields.category === category
          );
          return (
            itemInCategory && (
              <li
                key={itemInCategory.sys.id}
                className={`mansory-item ${index === 0 ? "big-item" : ""}`}
              >
                <div className="category-title">
                  {itemInCategory.fields.category}
                </div>
                <img
                  src={itemInCategory.fields.carImage.fields.file.url}
                  alt={itemInCategory.fields.category}
                />
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default CategorysHome;
