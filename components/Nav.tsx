import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { useAppSelector } from "../store/hooks";
import { MdOutlineShoppingCart } from "react-icons/md";


const Nav = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <div className="py-8" style={{ backgroundColor: "#df6c20", color: "white" }}>
      <Container className="flex justify-between items-center">
        <Link href="/">
          <span className="inline-block w-150 h-30 text-white flex items-center justify-center text-3xl font-extrabold p-2">
            Enes Keskin
          </span>
        </Link>
        <ul className="flex uppercase">
          <Link href="/" className="mr-8 font-bold">
            Home
          </Link>
          <Link href="/headphones" className="mr-8 font-bold">
            Headphones
          </Link>
          <Link href="/speakers" className="mr-8 font-bold">
            Speakers
          </Link>
          <Link href="/earphones" className="mr-8 font-bold">
            Earphones
          </Link>
        </ul>
        <Button onClick={() => setShowCart(!showCart)}>
          <MdOutlineShoppingCart className="text-white h-8 w-8" />
          <Typography className="ml-2 text-white">
            {cart.length !== 0 ? `${cart.length}` : "Sepet Boş"}
          </Typography>
        </Button>
      </Container>
      {showCart && <Cart />}
    </div>
  );
};

export default Nav;
