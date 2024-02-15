import React, { useState } from 'react';
import { Container, Box, Typography, Button as MUIButton } from '@mui/material';
import Image from 'next/image';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';
import { Button } from './Button';
import { APIProduct } from '../types';

interface Props {
  product: APIProduct;
}

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2 mr-8">
        <Image
          src={product.image?.desktop.replace('.', '') || ''}
          width={500}
          height={500}
          alt="headphones"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <Typography variant="h3" className="text-[1.5rem] uppercase tracking-[0.5rem] text-[#d97d45] mb-1">
          New Product
        </Typography>
        <Typography variant="h1" className="font-semibold mb-2 text-4.5xl uppercase" style={{ color: '#d97d45' }}>
          {product.name}
        </Typography>
        <Typography variant="body1" className="text-[1.25rem] text-[#727272] mb-3">
          {product.description}
        </Typography>
        <Typography variant="h5" className="mb-2 font-bold">
          ${product.price}
        </Typography>
        <div className="flex items-center mb-2">
          <div className="bg-[#f1f1f1] p-3 mr-2">
            <MUIButton onClick={() => { setCount(count - 1); }}>-</MUIButton>
            {count}
            <MUIButton onClick={() => { setCount(count + 1); }}>+</MUIButton>
          </div>
          <Button variant="contained" color="#d97d45" onClick={() => { dispatch(addToCart({ ...product, count })); }}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
