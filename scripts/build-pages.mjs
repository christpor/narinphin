import fs from "node:fs";
import path from "node:path";

const outputDirectory = path.resolve("dist/public");
const indexFile = path.join(outputDirectory, "index.html");
const notFoundFile = path.join(outputDirectory, "404.html");

fs.copyFileSync(indexFile, notFoundFile);
