import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#145fa8"
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }: PluginAPI) => {
      addUtilities({
        ".no-overflow-anchoring": {
          overflowAnchor: "none",
        },
      });
    }),
  ],
} satisfies Config;
