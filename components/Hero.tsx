import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">Sony WH-1000XM4</h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lime-100 mb-8 text-center">Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.</p>
      <a href="/srs-xg500" className="bg-white text-black py-3 px-6 rounded hover:bg-orange-400 hover:text-white transition-all duration-300">See Product</a>
    </div>
  );
};

export default Hero;
