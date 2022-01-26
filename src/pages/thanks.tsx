import React from "react";
import {
  Box,
  Heading,
  useColorModeValue,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";

const ThanksPage: React.FC = () => {
  return (
    <VStack minH="90vh" px="1rem">
      <Box px={8} py={6} mx="auto">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={"center"}
        >
          <Heading
            mb={6}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color={useColorModeValue("gray.900", "gray.100")}
          >
            <Text
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              Thank you for{" "}
            </Text>
            installing!
          </Heading>
        </Box>
        <Box
          w={{ base: "full", md: 10 / 12 }}
          mx="auto"
          mt={20}
          textAlign="center"
        >
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src="/images/hxh.jpg"
            alt="Funext Screenshot"
          />
        </Box>
      </Box>
    </VStack>
  );
};

export default ThanksPage;
