// Array -------------

let val = [8,1,7,4,2,9]
val.sort() //organiza os valores dentro dos elementos

//console.log(val)

/*
Forma burra

console.log(val[0])
console.log(val[1])
console.log(val[2])
console.log(val[3])
console.log(val[4])
console.log(val[5])

for (let pos = 0; pos < val.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}
*/

for (let pos in val) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}