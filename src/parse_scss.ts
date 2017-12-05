import * as postcss from 'postcss'
import * as fs from 'fs'

const syntax = require('postcss-scss')


fs.readFile('src/styles/site.scss', (err, scss) => {
    postcss().process(scss, { syntax: syntax }).then(function (result) {
        result.root!.walkDecls(n=>{
            console.log(n.prop + "="+n.value);
        });
    });
})


