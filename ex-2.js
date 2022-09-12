const prompt = require('prompt-sync') ()
const totalDiasText = prompt ('Quantos dias você tem de vida?')
const totalDias = Number (totalDiasText)

const anos = Math.floor (totalDias / 365) 
const meses = Math.floor ((totalDias % 365)/ 30 )
const dias = Math.floor ((totalDias %365) % 30 )

console.log (`Sua idade em anos: ${anos}`)
console.log(`Sua idade em meses: ${meses} `)
console.log(`Sua idade em dias: ${dias}`)
