/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // books: "url('/images/booksBackground.JPG')",
        p6Pattern: "url('/images/p6Pattern.webp')",
      },
    },
  },
  plugins: [],
};
