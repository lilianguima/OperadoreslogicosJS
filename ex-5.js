const prompt = require ('prompt-sync')()

const n1Text = prompt ('Digite o valor da Primeira Nota: ')
const n1 = Number(n1Text)

const n2Text = prompt ('Digite o valor da segunda nota: ')
const n2 = Number(n2Text)

const n3Text = prompt ('Digite o valor da terceira nota: ')
const n3 = Number (n3Text)


const mediaFinal = ((n1*2) +(n2*3) +(n3*5)) / 10
        //n1=2/ n2=2/n3=2  4 + 6 + 10 / 10

console.log(`Media Final é: ${mediaFinal}`)