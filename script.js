function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] verifique o ano e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancah.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemh.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoh.jpeg')
            } else {
                img.setAttribute('src', 'idosoh.jpg')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancam.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultom.jpeg')
            } else {
                img.setAttribute('src', 'idosom.jpeg')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}