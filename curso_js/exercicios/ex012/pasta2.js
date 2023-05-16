var horaSistema = new Date()
var hora = horaSistema.getHours()
if (hora >= 0 && hora <= 5) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa madrugada!')
} else if (hora >= 6 && hora <= 12) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Bom dia!')
} else if (hora >= 13 && hora <= 16) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa tarde!')
} else if (hora >= 17 && hora <= 23) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa noite!')
} else {
    console.log('Esse não é um horário válido!')
}