const read = require('readline-sync')

var multi = function(a,b){
    return a*b
}

console.log(multi(parseInt(read.question("a ")),parseInt(read.question("b "))))
module.exports = multi
