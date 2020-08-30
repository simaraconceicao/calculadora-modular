const read = require('readline-sync')

var soma = function(a,b){
    return a+b
}

console.log(soma(parseInt(read.question("a ")),parseInt(read.question("b "))))
module.exports.soma