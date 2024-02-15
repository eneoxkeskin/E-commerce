import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";

interface Props {
  isNew: boolean;
  name: string;
  description: string;
  slug: string;
}

const CategoryItemDescription = ({ isNew, name, description, slug }: Props) => {
  return (
    <Box className="flex flex-col items-center text-center p-4">
      {isNew && (
        <Typography variant="h6" className="text-orange-500 mb-2">
          New Product
        </Typography>
      )}
      <Typography variant="h4" className="font-semibold mb-4">
        {name}
      </Typography>
      <Typography variant="body1" className="text-base mb-4">
        {description}
      </Typography>
      <Link href={`/${slug}`} passHref>
        <Button 
          variant="contained" 
          color="primary" 
          className="bg-orange-500 text-white py-2 px-4 rounded-md"
        >
          See Product
        </Button>
      </Link>
    </Box>
  );
};

export default CategoryItemDescription;
  