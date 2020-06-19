import babel from "rollup-plugin-babel";
import handlebars from "rollup-plugin-handlebars-plus";
import { string } from "rollup-plugin-string";
import replace from "@rollup/plugin-replace";

import svgo from "rollup-plugin-svgo";
const global = {
    "handlebars/runtime": "Handlebars",
    "jszip": "JSZip",
};

let logIfDebugFunction = "common.emptylog";
if (process.env.BUILD == "development") {
    logIfDebugFunction = "console.log";
}

export default {
    input: "src/cimsvg.js",
    external: ["handlebars/runtime", "jszip"],

    output: [
        {
            file: "lib/libcimsvg.umd.js",
            format: "umd",
            name: "libcimsvg.umd"
        },
        {
            file: "lib/libcimsvg.cjs.js",
            format: "cjs",
            name: "libcimsvg.cjs"
        },
        {
            file: "lib/libcimsvg.js",
            format: "iife",
            name: "libcimsvg",
            globals: global,
        },
    ],
    plugins: [
        svgo({
            removingComments: true,
            removeAttrs: "xmlns",
        }),
        string({
            include: [ "css/*.css" ],
        }),
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
            exclude: "node_modules/**"
        }),
        replace({
            exclude: 'node_modules/**',
            "logIfDebug": logIfDebugFunction
        })
    ]
};
