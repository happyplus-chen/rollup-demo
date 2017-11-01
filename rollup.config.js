import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/main.js',
    output: {
        file: 'bundle.js',
        format: 'umd'
    },
    plugins: [resolve(), commonjs(), uglify({
        compress: {
            global_defs: {
                __DEV__: true
            }
        }
    })]
};