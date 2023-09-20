import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#05AFCD",
      secondary: "#40FF80",
      offset: "#004040",
      dark: "#1F1F1F",
      darker: "#000000",
    },
  },
  plugins: [],
};
export default config;
