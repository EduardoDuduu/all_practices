function loadPage() {
  var setaMostra1 = window.document.getElementById('mostrarContent1').style.display = 'none'
  var setaEsconder1 = window.document.getElementById('esconderContent1').style.display = 'inline'
  var subTitle1 = window.document.getElementById('subTitulo1').style.display = 'none'
  var contLink1 = window.document.getElementById('conteudoLink1').style.display = 'none'
  
  var setaMostra2 = window.document.getElementById('mostrarContent2').style.display = 'none'
  var setaEsconder2 = window.document.getElementById('esconderContent2').style.display = 'inline'
  var subTitle2 = window.document.getElementById('subTitulo2').style.display = 'none'
  var contLink2 = window.document.getElementById('conteudoLink2').style.display = 'none'
};

function clicouDesafio() {
    if (window.document.getElementById('conteudoLink1').style.display == 'none') {
        var setaMostra1 = window.document.getElementById('mostrarContent1').style.display = 'inline'
        var setaEsconder1 = window.document.getElementById('esconderContent1').style.display = 'none'
        var subTitle1 = window.document.getElementById('subTitulo1').style.display = 'block'
        var contLink1 = window.document.getElementById('conteudoLink1').style.display = 'flex'
    } else if (window.document.getElementById('conteudoLink1').style.display == 'flex') {
        var setaMostra1 = window.document.getElementById('mostrarContent1').style.display = 'none'
        var setaEsconder1 = window.document.getElementById('esconderContent1').style.display = 'inline'
        var subTitle1 = window.document.getElementById('subTitulo1').style.display = 'none'
        var contLink1 = window.document.getElementById('conteudoLink1').style.display = 'none'
    } else {
        var setaMostra1 = window.document.getElementById('mostrarContent1').style.display = 'none'
        var setaEsconder1 = window.document.getElementById('esconderContent1').style.display = 'none'
        var subTitle1 = window.document.getElementById('subTitulo1').style.display = 'none'
        var contLink1 = window.document.getElementById('conteudoLink1').style.display = 'none'
    }
}

function clicouExercicio() {
    if (window.document.getElementById('conteudoLink2').style.display == 'none') {
        var setaMostra2 = window.document.getElementById('mostrarContent2').style.display = 'inline'
        var setaEsconder2 = window.document.getElementById('esconderContent2').style.display = 'none'
        var subTitle2 = window.document.getElementById('subTitulo2').style.display = 'block'
        var contLink2 = window.document.getElementById('conteudoLink2').style.display = 'flex'
    } else if (window.document.getElementById('conteudoLink2').style.display == 'flex') {
        var setaMostra2 = window.document.getElementById('mostrarContent2').style.display = 'none'
        var setaEsconder2 = window.document.getElementById('esconderContent2').style.display = 'inline'
        var subTitle2 = window.document.getElementById('subTitulo2').style.display = 'none'
        var contLink2 = window.document.getElementById('conteudoLink2').style.display = 'none'
    } else {
        var setaMostra2 = window.document.getElementById('mostrarContent2').style.display = 'none'
        var setaEsconder2 = window.document.getElementById('esconderContent2').style.display = 'none'
        var subTitle2 = window.document.getElementById('subTitulo2').style.display = 'none'
        var contLink2 = window.document.getElementById('conteudoLink2').style.display = 'none'
    }
}