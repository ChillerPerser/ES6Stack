/* global process */

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'app/src/scripts/index.js',
    output: {
        file: 'app/dist/index.min.js',
        format: 'iife',
        sourcemap: (process.env.NODE_ENV === 'production') ? false : 'inline'
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        (process.env.NODE_ENV === 'production' && uglify({
            'compress': {
                'drop_console': true
            }
        }))
    ]
};
