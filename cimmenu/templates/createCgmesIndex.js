const fg = require('fast-glob');
const path = require('path');
const stream = fg.stream([ './generated/attributes/**/*.js' ]);
const entries = [];

stream.on('data', (entry) => {
   let entryPath = path.parse(entry);
   if (entryPath.base !== 'helpers.js') {
      let name = path.join(entryPath.dir, entryPath.name, "js").replace(/\//gi, '_').replace(/-/gi, '_');
      entries.push({ name: name, file: './' + entry });
   }
});

stream.once('error', console.log);

stream.once('end', () => {
   entries.forEach((entry) => {
      console.log("import " + entry.name + " from '" + entry.file + "';");
   });
   console.log("export default {");
   entries.forEach((entry) => {
      console.log("   ", entry.name, ",");
   });
   console.log("}");
});
