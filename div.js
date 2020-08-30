const read = require('readline-sync')

var div = function(a,b){
    return a/b
}

console.log(div(parseInt(read.question("a ")),parseInt(read.question("b "))))
module.exports.div