import babel from 'rollup-plugin-babel';
import handlebars from 'rollup-plugin-handlebars-plus';
import svgo from 'rollup-plugin-svgo';

const config = {
    input: 'src/cimmenu.js',
    external: [],
    output: {
        format: 'umd',
        name: 'libcimmenu',
        globals: {
        }
    },
    plugins: [
        svgo({
            removingComments: true,
            removeAttrs: 'xmlns',
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
