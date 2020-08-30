const read = require('readline-sync')

var sub = function(a,b){
    return a-b
}

console.log(sub(parseInt(read.question("a ")),parseInt(read.question("b "))))
module.exports = sub