const colors = require("./src/theme");

/** @type {import('tailwindcss').Config} */
const spacing = {
 "x-sm": "16px",
 "x-md": "32px",
 "x-lg": "60px",

 "y-sm": "18px",
 "y-md": "32px",
 "y-lg": "34px"
};
module.exports = {
 darkMode: "class",
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}"
 ],
 theme: {
  fontSize: {
   overline: [
    "10px",
    {
     lineHeight: "12.2px",
     letterSpacing: "1.5px"
    }
   ],
   caption: [
    "13px",
    {
     lineHeight: "15.8px",
     letterSpacing: "0.4px",
     fontWeight: "500"
    }
   ],
   "headline-sm": [
    "32px",
    {
     lineHeight: "42px",
     letterSpacing: "-0.5px"
     // fontWeight: "500" // medium
    }
   ],
   "headline-md": [
    "40px",
    {
     lineHeight: "56px",
     letterSpacing: "-0.5px"
     // fontWeight: "700" // bold
    }
   ],
   "headline-lg": [
    "48px",
    {
     lineHeight: "60px",
     letterSpacing: "-1.5px"
     // fontWeight: "300" // light
    }
   ],
   "title-sm": [
    "20px",
    {
     lineHeight: "24.4px",
     letterSpacing: "0.15px"
    }
   ],
   "title-lg": [
    "20px",
    {
     lineHeight: "24.4px",
     letterSpacing: "0.15px"
    }
   ],
   "body-sm": [
    "14px",
    {
     lineHeight: "24px",
     letterSpacing: "0.25px"
    }
   ],
   "body-lg": [
    "16px",
    {
     lineHeight: "30px",
     letterSpacing: "0.5px"
    }
   ]
  },
  extend: {
   colors,
   fontFamily: {
    sans: ["var(--font-sans)"]
   },
   padding: spacing,
   margin: spacing,
   screens: {
    tablet: "810px",
    // => @media (min-width: 810px) { ... }

    laptop: "1280px"
    // => @media (min-width: 1280px) { ... }
   }
  }
 },
 plugins: []
};
