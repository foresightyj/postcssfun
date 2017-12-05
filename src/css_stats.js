var fs = require('fs')
var cssstats = require('cssstats')

var css = fs.readFileSync('./src/styles/all.css', 'utf8')
var stats = cssstats(css)
console.log(stats)