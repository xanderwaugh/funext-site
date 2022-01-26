import React from "react";
import {
  Box,
  Text,
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  Stack,
  useColorMode,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { github_url } from "../utils/utilities";

const SimpleFooter: React.FC = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}>
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between">
          {/* <Logo /> */}
          <LogoWithText />
          <SocialMediaLinks />
        </Stack>
        <Copyright copyrightText={"Funimation Extended."} />
      </Stack>
    </Box>
  );
};

export { SimpleFooter };

const Copyright = ({ copyrightText }: { copyrightText: string }) => (
  <Text fontSize="sm" alignSelf={{ base: "center", sm: "start" }}>
    &copy; {new Date().getFullYear()} {copyrightText}
    {" All rights reserved."}
  </Text>
);

const LogoWithText = () => {
  return (
    <HStack>
      <Link href={github_url} isExternal>
        <FaGithub size="24px" />
      </Link>
      <Heading>Funex.</Heading>
    </HStack>
  );
};

const SocialMediaLinks = (props: ButtonGroupProps) => {
  const { colorMode } = useColorMode();

  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href="#"
        aria-label="GitHub"
        color={colorMode === "light" ? "gray.600" : "white"}
        icon={<FaGithub fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="Twitter"
        color={colorMode === "light" ? "gray.600" : "white"}
        icon={<FaTwitter fontSize="20px" />}
      />
    </ButtonGroup>
  );
};
