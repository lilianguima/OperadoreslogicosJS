// variavel
const prompt = require('prompt-sync')()

const anosText = prompt('Digite quantos anos você tem: ')
const anos = Number (anosText)

const mesesText = prompt('Digite quantos meses: ')
const meses = Number(mesesText)

const diasText = prompt ('Digite o dias: ')
const dias = Number(diasText)

//processamento 

const totalDias = ( (anos * 365) + (meses *30) + dias )
//saida 
 console.log(`Você já viveu ${totalDias} dias`)