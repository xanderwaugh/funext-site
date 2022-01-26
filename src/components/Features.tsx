import React from "react";
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { FcPrivacy } from "react-icons/fc";
import { BsFileCode } from "react-icons/bs";
import { FiChrome } from "react-icons/fi";
import { IoBugSharp } from "react-icons/io5";
import { github_url } from "../utils/utilities";

const Features: React.FC = () => {
  return (
    <Box
      as="section"
      maxW="5xl"
      mx="auto"
      py="12"
      px={{ base: "6", md: "8" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX="10"
        spacingY={{ base: "8", md: "14" }}>
        <Feature title="Open Source" icon={<BsFileCode />}>
          The source code for this project is available on{" "}
          <Link href={github_url} color="blue.600" isExternal>
            Github.
          </Link>
        </Feature>
        <Feature title="User can Report Bugs " icon={<IoBugSharp />}>
          {"Report bugs in the menu, or click "}
          <Link href={"/bug"} color="blue.600">
            here.
          </Link>
        </Feature>
        <Feature
          title="Developer doesn't care or want your data"
          icon={<FcPrivacy />}>
          {"This extension was made to increase the useability of "}
          {"funimations video player, that's it."}
        </Feature>
        <Feature
          title="Support for multiple browsers"
          icon={<FiChrome />}>
          {"This is actually cap, but support "}
          {"for firefox is coming soon."}
        </Feature>
      </SimpleGrid>
    </Box>
  );
};

export { Features };

interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}

const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}>
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={useColorModeValue("gray.600", "gray.400")}>
          {children}
        </Box>
      </Stack>
    </Stack>
  );
};
