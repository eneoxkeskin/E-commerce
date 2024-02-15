import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "./Button";
import { useAppSelector } from "../store/hooks";
import Image from "next/image";

const Summary = () => {
  const { cart } = useAppSelector((state) => state.cart);

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.count, 0).toFixed(2);
  };

  // Calculate shipping cost (replace this with your actual shipping cost)
  const calculateShipping = () => {
    return "5.00"; // Example shipping cost
  };

  // Calculate tax amount (replace this with your actual tax rate)
  const calculateTax = () => {
    const taxRate = 0.1; // 10% tax for example
    return (calculateTotalPrice() * taxRate).toFixed(2);
  };

  // Calculate grand total by adding total, shipping, and tax
  const calculateGrandTotal = () => {
    const total = parseFloat(calculateTotalPrice());
    const shipping = parseFloat(calculateShipping());
    const tax = parseFloat(calculateTax());

    return (total + shipping + tax).toFixed(2);
  };

  return (
    <Box className="p-8 m-16 ml-8 w-1/4 h-3/10">
      <Typography variant="h1" className="text-2xl uppercase font-extrabold tracking-wider mb-8">
        Summary
      </Typography>

      {cart.map((product) => (
        <Box key={product.id} className="flex my-4 justify-between">
          <Box className="flex">
            <Image
              src={product.image.mobile.replace(".", "")}
              width={50}
              height={50}
              alt={product.name}
            />
            <Box className="flex flex-col ml-4">
              <Typography variant="body1">{product.name}</Typography>
              <Typography variant="body2" className="text-gray-500">
                ${product.price.toFixed(2)} x {product.count}
              </Typography>
            </Box>
          </Box>
          <Box className="flex flex-col items-end">
            <Typography className="text-xs">Count</Typography>
            <Typography variant="body1" className="font-extrabold">
              {product.count}
            </Typography>
          </Box>
        </Box>
      ))}

      <Box className="mb-8">
        <Box className="flex justify-between">
          <Typography variant="body1" className="text-gray-600 uppercase font-semibold">
            Total
          </Typography>
          <Typography variant="body1">${calculateTotalPrice()}</Typography>
        </Box>
        <Box className="flex justify-between">
          <Typography variant="body1" className="text-gray-600 uppercase font-semibold">
            Shipping
          </Typography>
          <Typography variant="body1">${calculateShipping()}</Typography>
        </Box>
        <Box className="flex justify-between">
          <Typography variant="body1" className="text-gray-600 uppercase font-semibold">
            Tax
          </Typography>
          <Typography variant="body1">${calculateTax()}</Typography>
        </Box>
      </Box>

      <Box className="flex justify-between">
        <Typography variant="body1" className="text-gray-600 uppercase font-semibold">
          Grand Total
        </Typography>
        <Typography variant="body1">${calculateGrandTotal()}</Typography>
      </Box>

      <Button variant="contained" color="#d87d4a" className="mt-4 w-full">
        Continue & Pay
      </Button>
    </Box>
  );
};

export default Summary;
