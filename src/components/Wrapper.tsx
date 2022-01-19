import React, { ReactNode } from "react";
import { Box, Divider, StackDivider, VStack } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { SimpleFooter } from "./SimpleFooter";

interface WrapperProps {
    children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <Box minH="100vh">
            <Navbar />
            <VStack spacing={10} divider={<StackDivider />} pt="1rem">
                {children}
            </VStack>
            <Divider borderColor={"gray"} w="95vw" mx="auto" />
            <SimpleFooter />
        </Box>
    );
};

export { Wrapper };
