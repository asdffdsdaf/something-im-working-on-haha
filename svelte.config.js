import { optimizeImports } from "carbon-preprocess-svelte";
import { sveltePreprocess } from "svelte-preprocess/dist/autoProcess.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [optimizeImports(), sveltePreprocess()],
  kit: {
    target: "#svelte",
  },
  css: css => {
    css.write('public/bundle.css')
  },
};

export default config;
