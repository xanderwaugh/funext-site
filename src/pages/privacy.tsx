import React from "react";
import { Heading, VStack, Text, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const PrivacyPage: React.FC = () => {
  const router = useRouter();
  return (
    <VStack minH="90vh" px="1rem">
      <Heading>Privacy Policy</Heading>
      <Text>This extension collects zero data from its users.</Text>
      <Box h="18" />
      <Button
        size="lg"
        colorScheme={"facebook"}
        onClick={() => {
          router.push("/");
        }}
      >
        Return Home
      </Button>
    </VStack>
  );
};

export default PrivacyPage;
