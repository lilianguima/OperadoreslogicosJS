const prompt = require ('prompt-sync') ()

const custofabricacao = prompt ('Digite o custo de fabricação: ')
const CF = Number (custofabricacao)

const porcetagemDistribuidor = (CF * 0.28)
const Imposto = (CF * 0.45)
const custoConsumidor = (CF + porcetagemDistribuidor + Imposto)

//saida 
console.log(`Custo do carro para o consumidor: ${custoConsumidor}`)