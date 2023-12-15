import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        praimary: "#FFE757",
        gray: {
          "200": "#FEFCFB",
          "300": "#e6e6e6",
          "400": "#ccc",
          "500": "#333",
          "600": "#999",
        },
        orenge: {"300": "#ff7545"},
        slate: {"200": "#FFFCF2"},
        blue: {"400": "#8d7dff"},
        fuchsia: {"300": "#ff94ff"},
        yellow: {"300": "#ffe757"},
        accent: {"400": "#BFF746"},
      },
    },
    fontSize: {
      xs: ["10px", {lineHeight: "1em"}],
      sm: ["15px", {lineHeight: "30px"}],
      md: ["16px", {lineHeight: "50px"}],
      base: ["18px", {lineHeight: "30px"}],
      lg: ["21px", {lineHeight: "30px"}],
      xl: ["24px", {lineHeight: "28px"}],
      "2xl": ["48px", {lineHeight: "1.2em"}],
      "3xl": ["70px", {lineHeight: "1em"}],
      "4xl": ["80px", {lineHeight: "1.0em"}],
      "5xl": ["85px", {lineHeight: "1.07em", letterSpacing: "-.7px"}],
      "6xl": ["104px", {lineHeight: "1em"}],
      "7xl": ["110px", {lineHeight: "1em"}],
      "8xl": ["124px", {lineHeight: "1em"}],
      "9xl": ["84px", {lineHeight: "1em", letterSpacing: "-1px"}],
      "10xl": ["35px", {lineHeight: "1.4em"}],
    },
    boxShadow: {
      sm: "-2px 2px 70px -25px rgb(0 0 0 / 30%)",
      md: "4px 4px 0px 0px #000",
      lg: "0px 2px 0px 0px #fff",
    },
    fontFamily: {
      Familjen: ["Familjen Grotesk", ...fontFamily.sans],
      inter: ["'Inter'", ...fontFamily.sans],
    },
    backgroundImage: {},
    container: {
      center: true,
      padding: {
        DEFAULT: ".75rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
      "2xl": "1296px",
    },
  },
  plugins: [],
};
export default config;
