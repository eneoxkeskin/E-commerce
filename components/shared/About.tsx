import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", margin: "10rem 0" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginRight: "10rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginBottom: "1.5rem", fontSize: "3rem" }}
          >
            
DELIVERING UNPARALLELED <span style={{ color: "#d87d4a" }}>AUDIO </span>{" "}
EXCELLENCE
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#8d8d8d", fontSize: "1rem", marginBottom: "3rem" }}
          >
           Immersing you in the epitome of audio excellence, nestled in the vibrant pulse of Istanbul, Enes Keskin stands as the ultimate haven for top-tier headphones, earphones, speakers, and audio accessories. Our expansive showroom beckons with opulence, adorned with luxurious demonstration rooms crafted to envelop you in the sonic splendor of our diverse product range. Embark on a sensory journey as you explore the myriad offerings at Audiophile, where audio enthusiasts and experts converge to curate an unparalleled selection. Elevate your auditory experience by visiting our store, where a community of passionate individuals awaits to guide you through the pinnacle of portable audio gear.
          </Typography>
        </Box>
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="about-image"
          height={500}
          width={450}
        />
      </Box>
    </Container>
  );
};

export default About;
