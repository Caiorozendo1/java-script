function clicar(){
    var resp = window.document.getElementById('resp')
    var num1 = window.document.getElementById('inum1')
    var num2 = window.document.getElementById('inum2')
    var inc = window.document.getElementById('inc')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    if(n1 < n2){
    while(n1 <= n2){
        resp.innerHTML += `${n1} <br/>`
        n1 = n1 + Number(inc.value)
    }
    }else{
        while(n1 > n2){
            resp.innerHTML += `${n1} <br/>`
            n1 = n1 - Number(inc.value)
        }
    }
    resp.innerHTML +='acabou!'
}