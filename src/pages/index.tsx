import React from "react";
import { Box } from "@chakra-ui/react";
import { Showcase } from "../components/Showcase";
import { Features } from "../components/Features";

const IndexPage: React.FC = () => {
  return (
    <Box>
      <Showcase />
      {/* Image Carousel */}
      {/* <AltShowcase /> */}
      <Features />
      {/* Show Open Source Code */}
      {/*  */}
    </Box>
  );
};

export default IndexPage;
