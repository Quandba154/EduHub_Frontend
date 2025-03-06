/** @type {import('tailwindcss').Config} */
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        green: "#2CFFBA",
        "button-hover": "#00a06b",
        "dark-green": "#151924",
        white: "#F9F9F9",
        "light-blue": "#6EB9E3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      borderRadius: {
        "rounded-md": "8px",
        rounded: "14px",
      },
      fontSize: {
        sm: "0.75rem",
        smd: "1rem",
        md: "1.15rem",
        lg: "1.25rem",
        xlg: "2.15rem",
        xxlg: "3.5rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      // animation: {
      //   "header-nav": "slidedown 2s cubic-bezier(.19,1,.22,1) forwards",
      // },
      keyframes: {
        rotateFull: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-full": "rotateFull 20s infinite linear", // Xoay tròn trong 3 giây
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
