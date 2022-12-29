function loadPage() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imgArquivo')
    var horaExata = new Date()
    var hora = horaExata.getHours()
    //var hora = 
    var minuto = horaExata.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora}:${minuto}`
    if (hora >= 6 && hora <= 12) {
        //bom dia
        img.src = 'imagens/img-manha.png'
        document.body.style.background = '#f2903b'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/img-tarde.png'
        document.body.style.background = '#7ea4b3'
    } else {
        //boa noite
        img.src = 'imagens/img-noite.png'
        document.body.style.background = '#2f2f42'
    }
}