import {optimizeImports} from "carbon-preprocess-svelte";
import {sveltePreprocess} from "svelte-preprocess/dist/autoProcess.js";
import {resolve} from "path";

const _cwd = './src';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        optimizeImports(),
        sveltePreprocess({
            scss: {
                // "@use" should appear before "@import"
                prependData: `@import "@carbon/layout";`,
                // can include multiple directories, including node modules
                includePaths: [resolve(_cwd, 'scss')],
                renderSync: true,
            },
        })],
    kit: {
        target: "#svelte",
    }
};

export default config;
