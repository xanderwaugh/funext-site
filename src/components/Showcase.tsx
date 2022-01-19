import React from "react";
import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorMode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { webstore_url } from "../utils/utilities";

const Showcase: React.FC = () => {
    const { colorMode } = useColorMode();
    const isLight = colorMode === "light";
    const cardOverlayColor = "blue.50";
    const primary = "blue.500";
    const secondary = "blue.300";
    const alternate = "gray.700";

    const imgUrl = isLight
        ? "/images/dslayerlight.png"
        : "/images/dslayerdark.png";

    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{ base: "0", lg: "12" }}
            py={{ base: "0", lg: "12" }}
        >
            <Stack
                direction={{ base: "column-reverse", lg: "row" }}
                spacing={{ base: "0", lg: "20" }}
            >
                <Box
                    width={{ lg: "sm" }}
                    transform={{ base: "translateY(-50%)", lg: "none" }}
                    bg={{
                        base: isLight ? cardOverlayColor : alternate,
                        lg: "transparent",
                    }}
                    mx={{ base: "6", md: "8", lg: "0" }}
                    px={{ base: "6", md: "8", lg: "0" }}
                    py={{ base: "6", md: "8", lg: "12" }}
                >
                    <Stack spacing={{ base: "8", lg: "10" }}>
                        <Stack spacing={{ base: "2", lg: "4" }}>
                            <Heading
                                size="xl"
                                color={isLight ? primary : secondary}
                            >
                                Enhance Funimation
                            </Heading>
                            <Heading size="xl" fontWeight="normal">
                                With all new features.
                            </Heading>
                        </Stack>
                        <HStack spacing="3">
                            <Link
                                href={webstore_url}
                                color={isLight ? primary : secondary}
                                fontWeight="bold"
                                fontSize="lg"
                                isExternal
                            >
                                Install now
                            </Link>
                            <Icon
                                color={isLight ? primary : secondary}
                                as={FaArrowRight}
                            />
                        </HStack>
                    </Stack>
                </Box>
                <Flex flex="1" overflow="hidden">
                    <Image
                        src={imgUrl}
                        alt="Extension Image"
                        fallback={<Skeleton />}
                        maxH="450px"
                        minW="300px"
                        objectFit="contain"
                        flex="1"
                    />
                </Flex>
            </Stack>
        </Box>
    );
};

export { Showcase };
