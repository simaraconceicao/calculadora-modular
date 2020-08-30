const read = require('readline-sync')

const operacao = read.question("O que deseja fazer? somar/subtrair/multiplicar/dividir ")


switch (operacao) {
    case 'somar':
        var funcSoma = require('./soma')
    break
    case 'subtrair':
        var funcSub = require('./sub')
    break
    case 'multiplicar':
        var funcMulti = require('./multi')
    break
    case 'dividir':
        var funcDiv = require('./div')
    break
    default:
        console.log(`Escolha uma opção válida.`)
}






