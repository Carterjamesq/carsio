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
      <h2>Categroies</h2>
      <ul>
        {uniqueCategories.slice(0, 4).map((category) => {
          const itemInCategory = content.find(
            (item) => item.fields.category === category
          );
          return (
            itemInCategory && (
              <li key={itemInCategory.sys.id}>
                {itemInCategory.fields.category}
                <img src={itemInCategory.fields.carImage.fields.file.url} />
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default CategorysHome;
