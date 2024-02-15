import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryCardContainer = () => {
  return (
    <div className="my-16">
      <div className="flex justify-between">
        <CategoryCard category="Headphones" />
        <CategoryCard category="Speakers" />
        <CategoryCard category="Earphones" />
      </div>
    </div>
  );
};

export default CategoryCardContainer;
