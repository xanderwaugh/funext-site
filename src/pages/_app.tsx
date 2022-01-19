import * as React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { SEOConfig } from "../utils/next-seo.config";
import { Wrapper } from "../components/Wrapper";
import { theme } from "../components/theme";
import "../styles/global.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <DefaultSeo {...SEOConfig} />
            <Wrapper>
                <Component {...pageProps} />
            </Wrapper>
        </ChakraProvider>
    );
};

export default MyApp;
