let num = [5, 8, 2, 9, 3]
let pos = num.indexOf(5) //procura o valor solicitado, dentro da array, caso não exista, retornará -1!

if (pos == -1) {
    console.log('[ERRO] O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}