import tailwindcssForms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssForms({ strategy: 'class' })],
} satisfies Config;
