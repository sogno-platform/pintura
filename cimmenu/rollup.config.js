import babel from 'rollup-plugin-babel';
import handlebars from 'rollup-plugin-handlebars-plus';
const global = {
    'handlebars/runtime': 'Handlebars'
}

export default {
    input: 'src/cimmenu.js',
    external: ['handlebars/runtime'],

    output: [
        {
            file: 'lib/libcimmenu.umd.js',
            format: 'umd',
            name: 'libcimmenu.umd'
        },
        {
            file: 'lib/libcimmenu.cjs.js',
            format: 'cjs',
            name: 'libcimmenu.cjs'
        },
        {
            file: 'lib/libcimmenu.js',
            format: 'iife',
            name: 'libcimmenu',
            globals: global,
        }
    ],
    plugins: [
        handlebars({
            handlebars: {},
            helpers: [ './helpers.js' ],
            id: 'handlebars/runtime',
            options: {
                jquery: false,
            },
            templateExtension: [ '.handlebars' ]
        }),
        babel({
            exclude: "node_modules/**"
        })
    ]
};
