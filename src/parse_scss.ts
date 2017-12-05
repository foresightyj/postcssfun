import * as postcss from 'postcss'
import * as fs from 'fs'

const syntax = require('postcss-scss')
const cssstats = require('postcss-cssstats');


fs.readFile('src/styles/site.scss', (err, scss) => {
    postcss().use(cssstats()).process(scss, { syntax: syntax }).then(function (result) {
        const nodes = result.root!.nodes!
        for(const node of nodes){
            if(node.type === "decl"){
                // console.log(node.prop + " = " + node.value)
            }
            else if(node.type === "rule"){
                for(const n of node.nodes!){
                    if(n.type === 'decl'){
                        console.log(n.prop + " = " + n.value)
                    }
                }
            }
        }
    });
})


