import React from "react";
import { NextRouter, useRouter } from "next/router";
import NextLink from "next/link";
import {
    Box,
    Collapse,
    Flex,
    IconButton,
    Link,
    Stack,
    useBreakpointValue,
    useDisclosure,
    Text,
    Icon,
    Popover,
    PopoverContent,
    PopoverTrigger,
    useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { webstore_url } from "../utils/utilities";

const Navbar: React.FC = () => {
    const router = useRouter();
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode } = useColorMode();

    return (
        <Box w="99%">
            <Flex
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "gray.600" : "white"}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={colorMode === "light" ? "gray.200" : "gray.900"}
                align={"center"}
            >
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        aria-label={"Toggle Navigation"}
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon
                                    w={3}
                                    h={3}
                                    color={
                                        colorMode === "light"
                                            ? "gray.500"
                                            : "white"
                                    }
                                />
                            ) : (
                                <HamburgerIcon
                                    w={5}
                                    h={5}
                                    color={
                                        colorMode === "light"
                                            ? "gray.500"
                                            : "white"
                                    }
                                />
                            )
                        }
                        variant={"outline"}
                        _hover={{
                            color: "gray.800",
                            shadow: "lg",
                        }}
                    />
                </Flex>
                {/* Page Header */}
                <Flex
                    w="100vw"
                    justify={{
                        base: "center",
                        md: "start",
                    }}
                >
                    <NextLink href={"/"} passHref>
                        <Link
                            textAlign={useBreakpointValue({
                                base: "center",
                                md: "left",
                            })}
                            fontWeight={"bold"}
                            fontSize={{ base: "24px", md: "18px" }}
                            fontFamily={"heading"}
                            color={colorMode === "light" ? "gray.800" : "white"}
                            as={Link}
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            Funimaton Extended
                        </Link>
                    </NextLink>

                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav router={router} colorMode={colorMode} />
                    </Flex>
                </Flex>
                <ColorModeSwitch />
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav router={router} colorMode={colorMode} />
            </Collapse>
        </Box>
    );
};

interface DesktopNavProps {
    router: NextRouter;
    colorMode: "light" | "dark";
}
const DesktopNav: React.FC<DesktopNavProps> = ({ router, colorMode }) => {
    const linkColor = colorMode === "light" ? "gray.600" : "gray.200";
    const linkHoverColor = colorMode === "light" ? "gray.800" : "white";
    const popoverContentBgColor = colorMode === "light" ? "white" : "gray.800";

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <NextLink href={navItem.href ?? "#"} passHref>
                                <Link
                                    p={2}
                                    // href={navItem.href ?? "#"}
                                    fontSize={"sm"}
                                    fontWeight={500}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: "none",
                                        color: linkHoverColor,
                                    }}
                                    onClick={() => {
                                        router.push(navItem.href ?? "#");
                                    }}
                                >
                                    {navItem.label}
                                </Link>
                            </NextLink>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            router={router}
                                            colorMode={colorMode}
                                            ItemNav={child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

interface DesktopSubNavProps {
    router: NextRouter;
    colorMode: "light" | "dark";
    ItemNav: NavItem;
}

const DesktopSubNav: React.FC<DesktopSubNavProps> = ({
    router,
    colorMode,
    ItemNav: { label, subLabel, href },
}) => {
    return (
        <NextLink href={href ?? "#"} passHref>
            <Link
                role={"group"}
                display={"block"}
                p={2}
                rounded={"md"}
                _hover={{ bg: colorMode === "light" ? "pink.50" : "gray.900" }}
                onClick={() => {
                    router.push(href ?? "#");
                }}
            >
                <Stack direction={"row"} align={"center"}>
                    <Box>
                        <Text
                            transition={"all .3s ease"}
                            _groupHover={{ color: "pink.400" }}
                            fontWeight={500}
                        >
                            {label}
                        </Text>
                        <Text fontSize={"sm"}>{subLabel}</Text>
                    </Box>
                    <Flex
                        transition={"all .3s ease"}
                        transform={"translateX(-10px)"}
                        opacity={0}
                        _groupHover={{
                            opacity: "100%",
                            transform: "translateX(0)",
                        }}
                        justify={"flex-end"}
                        align={"center"}
                        flex={1}
                    >
                        <Icon
                            color={"pink.400"}
                            w={5}
                            h={5}
                            as={ChevronRightIcon}
                        />
                    </Flex>
                </Stack>
            </Link>
        </NextLink>
    );
};

interface MobileNavProps {
    router: NextRouter;
    colorMode: "light" | "dark";
}

const MobileNav: React.FC<MobileNavProps> = ({ router, colorMode }) => {
    return (
        <Stack
            bg={colorMode === "light" ? "white" : "gray.800"}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem
                    key={navItem.label}
                    router={router}
                    colorMode={colorMode}
                    {...navItem}
                />
            ))}
        </Stack>
    );
};

interface MobileNavItemProps extends NavItem {
    router: NextRouter;
    colorMode: "light" | "dark";
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
    label,
    children,
    href,
    router,
    colorMode,
    isExternal,
}: MobileNavItemProps) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <NextLink href={href ?? "#"} passHref>
                <Link
                    isExternal={isExternal}
                    fontWeight={600}
                    color={colorMode === "light" ? "gray.600" : "gray.200"}
                    onClick={() => {
                        if (!isExternal) router.push(href ?? "#");
                        else return;
                    }}
                >
                    {label}
                </Link>
            </NextLink>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    // borderColor={useColorModeValue("gray.200", "gray.700")}
                    borderColor={
                        colorMode === "light" ? "gray.200" : "gray.700"
                    }
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <NextLink
                                key={child.label}
                                href={child.href ?? "#"}
                                passHref
                            >
                                <Link
                                    py={2}
                                    onClick={() => {
                                        router.push(child.href ?? "#");
                                    }}
                                >
                                    {child.label}
                                </Link>
                            </NextLink>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    isExternal?: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Download",
        href: webstore_url,
        isExternal: true,
    },
    {
        label: "Patch Notes",
        href: "/notes",
    },
];

export { Navbar };
