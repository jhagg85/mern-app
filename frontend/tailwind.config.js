import path from 'node:path';
import { fileURLToPath } from 'node:url';
import daisyui from 'daisyui';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  // Paths relative to this config file so Tailwind always scans `frontend/src`
  // even if the dev server is started from another working directory.
  content: [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'forest', 'coffee'],
  },
};
