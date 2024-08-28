/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        resumeImg1: "url(/src/assets/templateImages/template1.png)",
        resumeImg2: "url(/src/assets/templateImages/template2.png)",
        customGradient:
          "linear-gradient(127.21deg, #e3dfd6 -30%, #8d77ab 156.41%)",
      },

      backgroundColor: {
        backgroundColor1: "#3936f2",
        backgroundColor2: "#ffffff",
        clearanceGrey: "#8d77ab",
        clearanceDarkBlue: "#e3dfd6",
      },
      textColor: {
        textColor1: "#3936f2",
        textColor2: "#ffffff",
        clearanceGrey: "#8d77ab",
        clearanceDarkBlue: "#e3dfd6",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
};
