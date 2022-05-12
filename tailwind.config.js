module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        15: "0.9375rem",
      },
      colors: {
        softCyan: "hsl(174, 77%, 80%)",
        strongCyan: "hsl(174, 86%, 45%)",
        ltGrayishRed: "hsl(14, 92%, 95%)",
        ltRed: "hsl(15, 100%, 70%)",
        paleBlue: "hsl(226, 100%, 87%)",

        veryPaleBlue: "hsl(230, 100%, 99%)",
        ltGrayishBlue1: "hsl(224, 65%, 95%)",
        ltGrayishBlue2: "hsl(223, 50%, 87%)",
        grayishBlue: "hsl(225, 20%, 60%)",
        dkDesaturatedBlue: "hsl(227, 35%, 25%)",
      },
    },
  },
  plugins: [],
};
