/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         screens: {
            xs: "480px",
         },

         fontFamily: {
            inter: ["inter", "sans-serif"],
            popping: ["Poppins", "sans-serif"],
         },

         colors: {
            primary: "#FF5331",
            dark: "#191720",
            cardBg: "#FAFAFA",
            footerPrimary: "#B5B2B2",
            footerSecondary: "#AAA7B1",
         },
      },
   },
   plugins: [],
};
