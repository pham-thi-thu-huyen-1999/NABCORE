import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss'

const dev = !process.env.NODE_ENV

export default {
    input: "src/main.js",
    output: {
        file: "dist/bundle.js",
        format: "iife",
        sourcemap: dev,
    },
    plugins: [
        image(),
        nodeResolve({
            extensions: [".js"],
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || 'development' )
        }),
        babel({
            presets: ["@babel/preset-react"],
            plugins: ["babel-plugin-macros"]
        }),
        postcss({
            minimize: false,
            modules: false,
            use: {
               sass: true,
            },
            extract: true,
            config: {
               path: './postcss.config.js',
               ctx: null
            }
         }),
        commonjs(),
        terser({
            compress:{
                defaults: !dev
            }
        })
    ]
};
