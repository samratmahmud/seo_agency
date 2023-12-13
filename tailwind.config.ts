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
          "200": "#FDFDE1",
          "300": "#e6e6e6",
          "400": "#ccc",
          "500": "#333",
          "600": "#999",
        },
        slate: {"200": "#FFFCF2"},
      },
    },
    fontSize: {
      xs: ["10px", {lineHeight: "1em"}],
      sm: ["15px", {lineHeight: "30px"}],
      md: ["16px", {lineHeight: "50px"}],
      base: ["18px", {lineHeight: "30px"}],
      lg: ["21px", {lineHeight: "30px"}],
      xl: ["24px", {lineHeight: "28px"}],
      "2xl": ["28px", {lineHeight: "1.2em"}],
      "3xl": ["30px", {lineHeight: "1.4em"}],
      "4xl": ["70px", {lineHeight: "1.07em", letterSpacing: "-.7px"}],
      "5xl": ["85px", {lineHeight: "1.07em", letterSpacing: "-.7px"}],
      "6xl": ["104px", {lineHeight: "1em"}],
      "7xl": ["110px", {lineHeight: "1em"}],
      "8xl": ["104px", {lineHeight: "1em"}],
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
      lg: "1024px",
      xl: "1288px",
      "2xl": "1920px",
    },
  },
  plugins: [],
};
export default config;
