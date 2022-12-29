function loadPage() {
    let img = window.document.getElementById('imgArquivo')
    let data = new Date()
    let hor = data.getHours()
    
    if (hor >= 6 && hor <= 12) {
        //bom dia
        img.src = 'imagens/img-manha.png'
        document.body.style.background = '#f2903b'
    } else if (hor >= 12 && hor <= 18) {
        //boa tarde
        img.src = 'imagens/img-tarde.png'
        document.body.style.background = '#7ea4b3'
    } else {
        //boa noite
        img.src = 'imagens/img-noite.png'
        document.body.style.background = '#2f2f42'
    }
}

function relogio() {
    let data = new Date()
    let hor = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    
    if (hor < 10) {
        hor = "0" + hor
    }

    if (min < 10) {
        min = "0" + min
    }

    if (seg < 10) {
        seg = "0" + seg
    }
    
    let horas = hor + ":" + min + ":" + seg
    
    document.getElementById("msg").innerHTML =  `São exatamente ${horas}`
}

var timer = setInterval(relogio, 1000)