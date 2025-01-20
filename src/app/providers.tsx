// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const colors = {
  black: "#0c1015",
  gray: {
    "50": "#f9fafa",
    "100": "#f1f1f2",
    "200": "#e6e7e9",
    "300": "#d2d4d7",
    "400": "#a9adb2",
    "500": "#797f88",
    "600": "#4d5560",
    "700": "#2e3744",
    "800": "#19202b",
    "900": "#141a23",
  },
  pink: {
    "50": "#fff5fa",
    "100": "#ffd6ec",
    "200": "#ffb3dc",
    "300": "#fe7ec5",
    "400": "#fe4faf",
    "500": "#df2e8f",
    "600": "#bf277b",
    "700": "#9c2064",
    "800": "#7a194f",
    "900": "#5b133a",
  },
  orange: {
    "50": "#fffaf5",
    "100": "#ffe9d8",
    "200": "#ffd0a9",
    "300": "#fea862",
    "400": "#f08731",
    "500": "#cf742a",
    "600": "#af6224",
    "700": "#8b4e1c",
    "800": "#6e3e16",
    "900": "#5a3312",
  },
  green: {
    "50": "#effff6",
    "100": "#9effc9",
    "200": "#32f389",
    "300": "#2cd97a",
    "400": "#27be6b",
    "500": "#21a35c",
    "600": "#1c874c",
    "700": "#16693b",
    "800": "#125630",
    "900": "#0e4728",
  },
  teal: {
    "50": "#e5fffe",
    "100": "#68fef7",
    "200": "#30ece3",
    "300": "#2bd3cb",
    "400": "#25b3ac",
    "500": "#1f9892",
    "600": "#197c77",
    "700": "#14605c",
    "800": "#10504d",
    "900": "#0e423f",
  },
  cyan: {
    "50": "#f2fbff",
    "100": "#c8efff",
    "200": "#afe8ff",
    "300": "#90dffe",
    "400": "#33c2fa",
    "500": "#2fb2e5",
    "600": "#2aa0cf",
    "700": "#2384ab",
    "800": "#1d6d8c",
    "900": "#16546d",
  },
  blue: {
    "50": "#eef7ff",
    "100": "#bfe2ff",
    "200": "#8eccfe",
    "300": "#55b2fe",
    "400": "#3198ed",
    "500": "#2a83cc",
    "600": "#236eab",
    "700": "#1b5483",
    "800": "#16456b",
    "900": "#123857",
  },
  primary: {
    "50": "#e2fcff",
    "100": "#73f2ff",
    "200": "#00daef",
    "300": "#00b7c9",
    "400": "#00a4b4",
    "500": "#008a98",
    "600": "#007580",
    "700": "#005e67",
    "800": "#004f57",
    "900": "#003a3f",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light", // Default color mode
  useSystemColorMode: false, // Disable system preference color mode
};

const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: "Merriweather, serif",
    body: "Merriweather, serif",
  },
});

const GlobalStyles = () => (
  <Global
    styles={`
      html {
        scroll-behavior: smooth;
      }
    `}
  />
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <GlobalStyles />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
