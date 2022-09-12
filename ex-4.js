const prompt = require('prompt-sync')()

const Atext = prompt ('Digite o valor de A: ')
const A= Number (Atext)

const Btext = prompt ('Digite o valor de B: ')
const B = Number(Btext)

const Ctext = prompt ('Digite o valor de C: ')
const C = Number(Btext)

const R = Math.pow(A+B, 2)
const S = Math.pow(B+C, 2)
const D = (R+S) / 2
//saida

console.log(`Valor total de D é: ${D}`)
