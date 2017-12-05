"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postcss = require("postcss");
const fs = require("fs");
const syntax = require('postcss-scss');
fs.readFile('src/styles/site.scss', (err, scss) => {
    postcss().process(scss, { syntax: syntax }).then(function (result) {
        const nodes = result.root.nodes;
        for (const node of nodes) {
            if (node.type === "decl") {
                // console.log(node.prop + " = " + node.value)
            }
            else if (node.type === "rule") {
                for (const n of node.nodes) {
                    if (n.type === 'decl') {
                        console.log(n.prop + " = " + n.value);
                    }
                }
            }
        }
    });
});
//# sourceMappingURL=parse_scss.js.map