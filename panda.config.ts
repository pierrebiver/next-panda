import { defineConfig } from "@pandacss/dev";
import {recipes} from "@/themes/recipes";
import {globalCss} from "@/themes/global-css";
import colors from '@/themes/preset/colors';
export default defineConfig({
    // Whether to include css reset styles in the generated css.
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

    // Used to create reusable config presets for your project or team.
    presets: ["@pandacss/dev/presets", colors],

    // Files to exclude
    exclude: [],

    // The framework to use for generating supercharged elements.
    jsxFramework: "react",

    // The output directory.
    outdir: "panda",
    globalCss,

    theme: {
        extend: {
            recipes,
        }
    }
});