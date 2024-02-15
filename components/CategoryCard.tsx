import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: string;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link href={`/${category}`} className="text-orange-500">
    <div className="flex items-center min-w-[20rem] p-4 bg-white rounded-lg shadow-md">
        
      <div className="w-44 h-44 flex items-center justify-center">
        <Image
          src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
          width={250}
          height={225}
          alt={category}
          className="rounded-lg"
        />
      </div>
   
      <div className="ml-4">
        
          <h4 className="text-lg font-bold">{category}</h4>
      
      </div>
  
    </div>
    </Link>
  );
};

export default CategoryCard;
