const prompt = require('prompt-sync')()

const aText = prompt ('Digite o valor de a: ')
const bText = prompt ('Digite o valor de b: ')
const cText = prompt ('Digite o valor de c: ')
const dText = prompt ('Digite o valor de d: ')
const eText = prompt ('Digite o valor de e: ')
const fText = prompt ('Digite o valor de f: ')

const a = Number(aText)
const b = Number(bText)
const c = Number(cText)
const d = Number(dText)
const e = Number(eText)
const f = Number(fText)

const x = (c*e) - (b*f) / (a*e) - (b*d)
const y = (a*f) - (c*d) / (a*e) - (b*d) 

console.log (`O valor de x é: ${x}`)
console.log(`O valor de y é: ${y}`)


