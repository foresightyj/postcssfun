"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stylelint = require("stylelint");
const path = require("path");
const options = {
    files: path.join(__dirname, "../src/styles/*.css"),
    configFile: path.join(__dirname, "../stylelint.config.js"),
    formatter: "string",
};
stylelint.lint(options)
    .then(function (result) {
    console.log(result.output);
});
//# sourceMappingURL=lintCss.js.map