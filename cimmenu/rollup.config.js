import babel from 'rollup-plugin-babel';
import handlebars from 'rollup-plugin-handlebars-plus';

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
        handlebars({
            id: 'handlebars/runtime',
            helpers: [ './helpers.js' ],
            options: {
                jquery: false,
            },
            templateExtension: [ '.handlebars' ]
        }),
        babel({
            exclude: "node_modules/**"
        })
    ]
}
export default config
