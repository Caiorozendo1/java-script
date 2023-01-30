var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora}Hrs`)
if(hora < 12) {
    console.log('bom dia')
} else if (hora >=12 && hora < 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}