import React from "react";
import { Box, Typography, Button as MUIButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearCart, updateProductCount } from "../store/cartSlice";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.count;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <Box
      className="fixed h-screen w-screen bg-black bg-opacity-50 top-20 flex justify-center items-center"
    >
      <Box
        className="min-h-[20vh] w-[40vw] bg-white text-black p-6 uppercase flex flex-col items-center"
      >
        <Typography variant="h4">Cart</Typography>
        <MUIButton
          onClick={() => dispatch(clearCart())}
          color="primary"
          variant="contained"
          className={`w-full mt-4 ${
            cart.length === 0 ? "hidden" : "bg-[#FFA500] hover:bg-black"
          }`}
        >
          Remove All
        </MUIButton>

        {cart.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          <>
            {cart.map((product) => (
              <Box
                key={product.id}
                className="flex flex-col items-center mb-4"
              >
                <Image
                  src={product.image.mobile.replace(".", "")}
                  width={100}
                  height={100}
                  alt={product.name}
                />
                <Typography variant="body1">{product.name}</Typography>
                <Typography variant="body2" className="text-[#6f7275]">
                  ${product.price} x{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() =>
                      product.count > 1 &&
                      dispatch(
                        updateProductCount({
                          productId: product.id,
                          count: product.count - 1,
                        })
                      )
                    }
                  >
                    <IoIosRemoveCircle fontSize="large" />
                  </span>{" "}
                  {product.count}{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() =>
                      dispatch(
                        updateProductCount({
                          productId: product.id,
                          count: product.count + 1,
                        })
                      )
                    }
                  >
                    <IoIosAddCircle fontSize="large" />
                  </span>
                </Typography>
              </Box>
            ))}
            <Box className="flex justify-between w-full mt-4">
              <Typography variant="h6">
                Total: ${calculateTotalPrice()}
              </Typography>
              <Link href="/checkout" passHref>
                <MUIButton
                  color="primary"
                  variant="contained"
                  className="w-full mt-4 bg-orange-500"
                  component="a"
                >
                  Checkout
                </MUIButton>
              </Link>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
