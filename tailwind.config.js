/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        gray2: "#050505",
        umbra: "#1F1F1F",
        "carbon-fiber": "#2D2D2D",
        "dead-pixel": "#3A3A3A",
        "bank-vault": "#757575",
        plaster: "#E9E9E9",
        lighthouse: "#F4F4F4",
        "project-purple": "#A445ED",
        "project-red": "#FF5252",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
        inconsolata: ["var(--font-inconsolata)"],
      },
    },
  },
  plugins: [],
};
