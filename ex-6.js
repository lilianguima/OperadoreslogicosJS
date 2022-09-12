const prompt= require('prompt-sync')()

//dois pontos p
// d= (x2,x1)2 + (y2,y1)2

const x1Text = prompt ('Digite o valor de x1: ')
const x1 = Number(x1Text)

const x2Text = prompt('Digite o valor de x2: ')
const x2 = Number(x2Text)

const y1Text = prompt('Digite o valor de y1: ')
const y1 = Number(y1Text)

const y2Text = prompt('Digite o valor de y2: ')
const y2 = Number(y2Text)

const distancia = Math.sqrt (Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
                // raiz quadrada
console.log(`A Distancia entre os pontos p1(${x1},${y1}) e p2(${x2},${y2}), é de: ${distancia}`)