import { NextSeoProps } from "next-seo/lib/types";

const keywords =
  "funimation, funimation extended, funimation extension, funex, funimation, anime, auto skip intro, skip intro";

export const SEOConfig: NextSeoProps = {
  defaultTitle: "Funimation Extended",
  description: "Enhance funimation watching experience",
  additionalMetaTags: [
    {
      httpEquiv: "x-ua-compatible",
      content: "IE-Edge",
    },
    {
      name: "viewport",
      content:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover",
    },
    {
      name: "theme-color",
      content: "#E2E8F0",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black",
    },
    {
      name: "apple-mobile-web-app-status-bar",
      content: "#FFF",
    },
    {
      name: "keywords",
      content: keywords,
    },
    {
      name: "HandheldFriendly",
      content: "true",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
  ],

  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "alternate icon",
      href: "/favicon.ico",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "mask-icon",
      href: "/favicon.svg",
      color: "#FFF",
    },
  ],
};
