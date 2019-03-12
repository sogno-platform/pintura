import babel from 'rollup-plugin-babel';
import handlebars from 'rollup-plugin-handlebars-plus';
import { string } from 'rollup-plugin-string';
import svgo from 'rollup-plugin-svgo';

const config = {
    input: 'src/cimsvg.js',
    external: [],
    output: {
        format: 'cjs',
        name: 'libcimsvg',
        globals: {
        }
    },
    plugins: [
        svgo({
            removingComments: true,
            removeAttrs: 'xmlns',
        }),
        string({
            include: [ 'css/*.css' ], 
        }),
        handlebars({
            templateExtension: [ '.handlebars' ], 
            id: 'handlebars/runtime',
            options: {
                jquery: false,
            }
        }),
        babel({
            exclude: "node_modules/**"
        })
    ]
}
export default config
