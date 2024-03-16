import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';

export default {
  css: {
    postcss: {
      plugins: [
        postcssNesting(),
        tailwindcss(),
        // other plugins...
      ],
    },
  },
  plugins: [react()],
};
