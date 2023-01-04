function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                // Criança
                genero = 'criança'
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                genero = 'jovem'
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                genero = 'adulto'
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                // Idoso
                genero = 'idoso'
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 10) {
                // Criança
                genero = 'criança'
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                genero = 'jovem'
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                genero = 'adulto'
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                // Idoso
                genero = 'idoso'
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}