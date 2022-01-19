import "@fontsource/nunito-sans";
import "@fontsource/bodoni-moda";
import {
    extendTheme,
    ThemeConfig,
    withDefaultColorScheme,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { nonce } from "../utils/utilities";

const myConfig: ThemeConfig = {
    cssVarPrefix: nonce(),
    initialColorMode: "light",
    useSystemColorMode: false,
};

const fontConfig = {
    mono: "Nunito Sans",
    heading: "Bodoni Moda",
};

const breakpoints = createBreakpoints({
    // ! 52em === 832px
    // ? 64em === 1024px
    sm: "52em",
    md: "52em",
    lg: "64em",
    xl: "64em",
});

const theme = extendTheme(
    {
        colors: {
            brand: {
                50: "#F7FAFC",
            },
            prim: "#F7FAFC",
            black: "#16161D",
        },
        fonts: fontConfig,
        breakpoints: breakpoints,
        config: myConfig,
    },
    withDefaultColorScheme({ colorScheme: "blackAlpha" })
);

export { theme };
