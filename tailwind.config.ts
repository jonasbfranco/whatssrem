import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'green-50': '#EBFFE5',
        'green-100': '#D0FFC7',
        'green-400': '#3DF328',
        'green-500': '#1BD909',
        'green-600': '#0EAE02',
        'green-700': '#0D8407',
        'green-800': '#10680C',
        'green-900': '#10580F',
        'green-950': '#023102',
      },
    },
  },
  plugins: [],
};
export default config;
