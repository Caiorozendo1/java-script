function clicar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtnum')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] verifique os dados novamente')
   } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            var genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
            var genero = 'Mulher'
            if(idade <= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
   }
}