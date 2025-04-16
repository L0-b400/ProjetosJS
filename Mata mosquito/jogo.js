var alt = 0
var lar = 0

function ajustaJogo() {
    alt = window.innerHeight
    lar = window.innerWidth
    console.log(lar, alt)
}
    
ajustaJogo()

function posRandom() {

var posx = Math.floor(Math.random() * alt)
var posy = Math.floor(Math.random() * lar)

console.log(posx, posy)

var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png' 
mosca.className = 'mosca'
mosca.style.left = posx + 'px'
mosca.style.top = posy + 'px'
mosca.style.position = 'absolute'
document.body.appendChild(mosca)

}