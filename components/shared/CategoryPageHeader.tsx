import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  category: string;
}

const CategoryPageHeader = ({ category }: Props) => {
  return (
    <div className="bg-gray-900 text-white h-24 flex items-center">
      <h1 className="text-3xl uppercase font-bold mx-auto">
        {category}
      </h1>
    </div>
  );
};

export default CategoryPageHeader;
