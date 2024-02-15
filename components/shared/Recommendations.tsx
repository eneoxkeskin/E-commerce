import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import Link from "next/link";
import { RecommendationType } from "../../types";

interface Props {
  recommendations: RecommendationType[];
}

const Recommendations = ({ recommendations }: Props) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "8rem 0",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontSize: "2rem",
            fontWeight: 500,
            marginBottom: "4rem",
          }}
        >
          You May Also Like
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {recommendations.map((product) => (
            <Box
              key={product.slug}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <Image
                src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                alt="Sony WH-1000XM4"
                width={350}
                height={350}
              />
              <Typography
                variant="h3"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "2rem",
                  fontWeight: 500,
                  margin: "1rem 0",
                }}
              >
                Sony WH-1000XM4
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: "#d87d4a" }}>
                <Link href={`/${product.slug}`} sx={{ color: "#fff" }}>
                  See Product
                </Link>
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Recommendations;
