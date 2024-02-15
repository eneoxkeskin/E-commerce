import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";

const ZX7Speaker = () => {
  return (
    <Container>
      <Box className="relative h-80 bg-cover bg-no-repeat flex flex-col justify-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <Box className="ml-16 bg-black bg-opacity-75 p-8">
          <Typography className="text-4xl mb-4 text-white" variant="h4" style={{ color: "#fff" }}>
          Logitech Z906
          </Typography>
          <Typography variant="body1" className="text-lg mb-8 text-white" style={{ color: "#FFFFFF" }}>
            Experience the power of sound with our Logitech Z906. Immerse yourself in high-fidelity audio.
          </Typography>
          <Button variant="contained" color="primary" className="bg-black" style={{ color: "#FFFFFF" }}>
            <Link className='text-black' href="/zx7-speaker">EXPLORE NOW</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ZX7Speaker;
