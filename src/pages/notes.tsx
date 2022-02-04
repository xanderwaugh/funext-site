import React from "react";
import { Heading, VStack, Code } from "@chakra-ui/react";

const NotesPage: React.FC = () => {
  return (
    <VStack minH="90vh">
      <Heading mb="2rem" textDecor={"underline"}>
        Patch Notes
      </Heading>
      <VStack spacing="2rem">
        {/* 1.0.0 */}
        <PatchNote
          version="1.0.0"
          date="Jan 15, 2022"
          info="Official Release"
        />
        {/* 2.0.0 */}
        <PatchNote
          version="2.0.0"
          date="Jan 20, 2022"
          info="Added Outro / Skip to Next Episode"
        />
        {/* 2.1.0 */}
        <PatchNote version="2.1.0" date="Jan 25, 2022" info="Bug Fixes" />
        {/* 2.2.0 */}
        <PatchNote
          version="2.2.0"
          date="Feb 1, 2022"
          info="Switched Bundling Packager - Minor Bug Fixes"
        />
        {/* 2.5.6 */}
        <PatchNote
          version="2.5.6"
          date="Feb 3, 2022"
          info="Fixed Popup Styling, Fixed Outro Timer Logic"
        />
      </VStack>
    </VStack>
  );
};

export default NotesPage;

interface PNProps {
  version: string;
  date: string;
  info: string;
}
const PatchNote: React.FC<PNProps> = ({ info, date, version }) => (
  <VStack>
    <Heading fontSize={"xl"}>
      {version} -- {date}
    </Heading>
    <Code fontSize={"md"} colorScheme={"facebook"}>
      {info}
    </Code>
  </VStack>
);
