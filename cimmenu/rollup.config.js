import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import handlebars from "rollup-plugin-handlebars-plus";

const global = {
    "handlebars/runtime": "Handlebars"
};

export default {
    input: "src/cimmenu.js",
    external: [ "handlebars/runtime.js" ],

    output: [
        {
            file: "lib/libcimmenu.umd.js",
            format: "umd",
            globals: global,
            name: "libcimmenu.umd"
        },
        {
            file: "lib/libcimmenu.cjs.js",
            format: "cjs",
            globals: global,
            name: "libcimmenu.cjs",
        },
        {
            file: "lib/libcimmenu.js",
            format: "iife",
            globals: global,
            name: "libcimmenu"
        }
    ],
    plugins: [
        handlebars({
            handlebars: {},
            helpers: [ "./helpers.js" ],
            id: "handlebars/runtime",
            options: {
                jquery: false,
            },
            templateExtension: [ ".handlebars" ]
        }),
        babel({
            exclude: "node_modules/**",
            presets: ['@babel/env', '@babel/preset-react']
        }),
        json()
    ]
};
