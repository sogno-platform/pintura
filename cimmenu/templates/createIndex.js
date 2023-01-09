import fg from "fast-glob";
import path from "path";
const stream = fg.stream(["**/*.handlebars"]);
const entries = [];

stream.on("data", (entry) => {
    let name = path.join(path.parse(entry).dir, path.parse(entry).name).replace(/\//gi, "_").replace(/-/gi, "_");
    entries.push({ name: name, file: "./" + entry });
});

stream.once("error", console.log);

stream.once("end", () => {
    entries.forEach((entry) => {
        console.log("import " + entry.name + " from \"" + entry.file + "\";");
    });
    console.log("export default {");
    entries.forEach((entry) => {
        console.log("   ", entry.name, ",");
    });
    console.log("};");
});
