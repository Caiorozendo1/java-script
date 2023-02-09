function clicar(){
  var res = window.document.getElementById('res')
  var ini = window.document.getElementById('txtin')
  var fim = window.document.getElementById('txtf')
  var inicio = Number(ini.value)
  var final = Number(fim.value)
  var pas = window.document.getElementById('txtpas')
  var passo = Number(pas.value)
  if(passo <= 0){
    window.alert('passo inválido! considerando passo 1')
    passo = 1
  }
  if(ini.value.length == 0| fim.value.length == 0 | pas.value.length == 0){
    res.innerHTML = 'impossivel contar!'
    window.alert('[ERRO] faltam dados!')
   
  } else{
  if(inicio < final) {
  while(inicio <= final) {
    res.innerHTML += `${inicio} \u{1F449}`
    inicio = inicio + passo
  }
  }else{
    while(inicio >= final){
        res.innerHTML += `${inicio} \u{1F449}`
        inicio = inicio - passo
    }
  }
  res.innerHTML += `acabou! \u{1F3C1}`
}
}