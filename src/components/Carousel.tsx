import React from "react";
import { Box, Heading, useColorMode, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Carousel: React.FC = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const images = ["", "", ""];

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "0", lg: "12" }}>
      <Heading></Heading>
      <Text></Text>
    </Box>
  );
};

export { Carousel };
