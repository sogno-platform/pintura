/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  A copy of the GNU General Public License is in the LICENSE file
 *  in the top level directory of this source tree.
 */

// check that test directory is checked out
const fs = require('fs')
const Jasmine = require('jasmine');
const jasmine = new Jasmine();

fs.access("test/grid-data", fs.F_OK, function(err) {
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
        console.error("The test submodule has not been checked out.\nIn order to run the tests, execute:\ngit submodule init\ngit submodule update\n");
    }
});


