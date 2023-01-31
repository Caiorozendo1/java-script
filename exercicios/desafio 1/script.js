function carregar(){
    //var hora = new Date()
    var agora = 22
    var resp = window.document.getElementById('resp')
    var img = window.document.getElementById('img')
    resp.innerHTML = `Agora são ${agora} Horas`
    if(agora >= 0 && agora < 12) {
       img.src = 'fotomanha.png'
    } else if(agora >= 12 && agora < 18){
        img.src = 'fototarde.png'
    } else{
        img.src = 'fotonoite.png'
    }
}