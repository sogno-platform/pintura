/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *  SPDX-License-Identifier: MPL-2.0
 */

// check that test directory is checked out
const fs = require('fs')
const Jasmine = require('jasmine');
const jasmine = new Jasmine();

fs.access("test/grid-data/Components", fs.F_OK, function(err) {
    if (!err) {
        // setup Jasmine
        jasmine.loadConfig({
            spec_dir: 'test',
            spec_files: ['test*.js'],
            helpers: ['helpers/**/*.js'],
            random: false,
            seed: null,
            stopSpecOnExpectationFailure: false
        });
        jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1500;

        // setup console reporter
        const JasmineConsoleReporter = require('jasmine-console-reporter');
        const reporter = new JasmineConsoleReporter({
            colors: 1,           // (0|false)|(1|true)|2
            cleanStack: 1,       // (0|false)|(1|true)|2|3
            verbosity: 4,        // (0|false)|1|2|(3|true)|4|Object
            listStyle: 'indent', // "flat"|"indent"
            timeUnit: 'ms',      // "ms"|"ns"|"s"
            timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, // Object|Number
            activity: true,
            emoji: true,         // boolean or emoji-map object
            beep: true
        });

        // initialize and execute
        jasmine.env.clearReporters();
        jasmine.addReporter(reporter);
        jasmine.execute();
    } else {
        console.error("The test submodule has not been checked out.\nIn order to run the tests, execute:\ngit submodule update --init\n");
        process.exit(1);
    }
});


