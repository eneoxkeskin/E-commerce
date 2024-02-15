import { Box, Container, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import { Button } from "../Button";

const YX1Earphones = () => {
  return (
    <Container>
      <Box className="flex mt-24">
        <Box className="w-1/2 pr-8">
          <Typography className="text-4xl mb-4" variant="h4" style={{ color: "#000" }}>
          SRS-XG500 EARPHONES
          </Typography>
          <Typography variant="body1" className="text-lg mb-8" style={{ color: "#000" }}>
          Sony brings you closer to the music and the artists you love. Watch exclusive videos and enter to win prizes only available for Sony fans.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            style={{ 
              backgroundColor: "#FFD700", 
              color: "#000000",
              transition: "background-color 0.3s",
            }}
          >
            <Link href="/yx1-earphones" style={{ textDecoration: "none", color: "#FFFFFF" }}>
              DISCOVER MORE
            </Link>
          </Button>
        </Box>

        <Box className="w-1/2">
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="yx1-earphones"
            width={800}
            height={300}
            className="rounded-xl"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default YX1Earphones;
