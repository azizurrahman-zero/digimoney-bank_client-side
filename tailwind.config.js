/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(7,58,66)",
          secondary: "#F8BF88",
          accent: "#010C27",
           neutral: "#F8BF8A",       //bottom banner
          "base-100": "#ffffff",   //website background color 
          "base-300": "#010C28",   //heading color 
           "base-content":"#294b50"                       //backroung c
        },
        dark: {
          primary: "#1E2B47", 
          secondary: "#e55353",
          accent: "#A5C9CA",
          neutral: "#19223C",     //bottom banner 
          "base-100": "#090A27", //website background color 
          "base-200": "white", //mission card color 
          "base-300": "white",//heading color 
          "base-content":"#1E2B48"     
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
