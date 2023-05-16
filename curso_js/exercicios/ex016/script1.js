function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ínpar!'
    }
}

let res = parimpar(535) //valor do parametro da função

console.log(`A função parimpar retornou ${res}`)