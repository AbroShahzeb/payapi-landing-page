/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      "public-sans": "Public Sans",
      "dm-serif": "DM Serif Display",
    },
    colors: {
      primary: {
        pink: "hsl(337, 48%, 49%)",
        "water-white": "hsl(220, 60%, 99%)",
      },
      secondary: {
        "san-juan-blue": "hsl(207, 33%, 32%)",
        "mirage-blue": "hsl(207, 27%, 15%)",
        "charm-pink": "hsl(337, 60%, 64%)",
        "light-san-juan-blue": "hsl(207, 16%, 50%)",
      },
    },

    extend: {
      fontSize: {
        "h1-lg": ["72px", { lineHeight: "72px" }],
        "h1-sm": ["56px", { lineHeight: "56px" }],
        h2: ["48px", { lineHeight: "56px" }],
        "h3-lg": ["32px", { lineHeight: "40px" }],
        "h3-sm": ["18px", { lineHeight: "25px" }],
        h4: ["24px", { lineHeight: "32px" }],
        "body-copy-1": ["15px", { lineHeight: "28px" }],
      },
    },
  },
  plugins: [],
};
