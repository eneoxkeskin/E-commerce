import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

import { Button } from "../Button";
import Link from "next/link";

const ZX9Speaker = () => {
  return (
    <Container>
    <div className="bg-gradient-to-r from-purple-700 to-indigo-900 bg-no-repeat bg-pattern-dots flex items-center text-white mb-20 p-8 rounded-xl shadow-2xl">
      <div className="relative mr-20">
        <Image
          src="/assets/home/desktop/image-speaker-zx9.png"
          alt="zx9-speaker"
          width={400}
          height={500}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center">
        <Typography variant="h2" className="text-5xl md:text-6xl mb-8 uppercase font-extrabold text-purple-300">
        Logitech Z906
        </Typography>
        <Typography variant="body1" className="text-lg md:text-xl mb-12 text-purple-200">
          Immerse yourself in the ultimate audio experience with our top-of-the-line speakers.
        </Typography>
        <Button color="white" variant="outlined" className="border-2 border-white bg-transparent">
          <Link className='text-black' href="/zx9-speaker">DISCOVER MORE</Link>
        </Button>
      </div>
    </div>
  </Container>
  );
};

export default ZX9Speaker;
