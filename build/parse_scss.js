"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postcss = require("postcss");
const fs = require("fs");
const syntax = require('postcss-scss');
fs.readFile('src/styles/site.scss', (err, scss) => {
    postcss().process(scss, { syntax: syntax }).then(function (result) {
        result.root.walkDecls(n => {
            console.log(n.prop + "=" + n.value);
        });
    });
});
//# sourceMappingURL=parse_scss.js.map