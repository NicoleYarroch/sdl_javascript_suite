import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'lib/js/app.js',
    output: [
        {
            file: 'lib/js/dist/SDL.js',
            format: 'umd',
            sourcemap: 'inline',
            name: 'SDL',
        },
    ],
    plugins: [
        resolve({
            preferBuiltins: false,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**', // only transpile our source code
        }),
        uglify(),
    ],
};