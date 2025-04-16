var alt = 0
var lar = 0

function ajustaJogo() {
    alt = window.innerHeight
    lar = window.innerWidth
    console.log(lar, alt)
}
    
ajustaJogo()

function posRandom() {

var posx = Math.floor(Math.random() * alt) - 90
var posy = Math.floor(Math.random() * lar) - 90

posx = posx < 0 ? 0 : posx
posy = posy < 0 ? 0 : posy

console.log(posx, posy)

var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png' 
mosca.className = tmnMosca()
mosca.style.left = posx + 'px'
mosca.style.top = posy + 'px'
mosca.style.position = 'absolute'
document.body.appendChild(mosca)

}

function tmnMosca() {
    var classe = Math.floor(Math.random() * 3)

    switch  (classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3' 
    }
}