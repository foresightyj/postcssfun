import * as stylelint from 'stylelint'
import * as path from 'path'


const options: stylelint.LinterOptions = {
    files: path.join(__dirname, "../src/styles/*.css"),
    configFile: path.join(__dirname, "../stylelint.config.js"),
    formatter: "string",
}

stylelint.lint(options)
    .then(function (result) {
        console.log(result.output)
    });
