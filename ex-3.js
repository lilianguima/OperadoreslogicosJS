const prompt = require  ('prompt-sync') ()

const totalsegundosText = prompt ('Total de Duração do Evento: ')
const totalsegundos = Number(totalsegundosText)

const horas =  (totalsegundos / 3600)
const minutos = (totalsegundos % 3600) / 30
const segundos =(totalsegundos % 3600) % 30 

console.log(`Total de Duração em horas: ${horas}`)
console.log(`Total de duração em minutos: ${minutos}`)
console.log(`Total de duração em segundos: ${segundos}`)