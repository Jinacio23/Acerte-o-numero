var input = document.getElementById('palp-num')
var round = 1
 var x = Math.floor((Math.random()*100) + 1)

function getValue() {

   var palpite = document.getElementById("palp-num").value

   if(palpite >= 0 && palpite < x) {
    document.getElementById("maior").style.display = "block"
   }else if(palpite > x) {
    document.getElementById("menor").style.display = "block"
   } else {
    document.getElementById("theEndWon").style.display = "block" 
    document.querySelector('.card').style.opacity = '0.5' 
    document.querySelector('body').style.backgroundColor = 'rgb(4, 153, 36)'
   }

   document.getElementById("round-num").innerHTML = round
   if(palpite != x) {round += 1}
   
   if (round > 11 && palpite != x) {
    document.getElementById("theEndLose").style.display = "block" 
    document.querySelector('.card').style.opacity = '0.5' 
    document.querySelector('body').style.backgroundColor = 'rgb(4, 153, 36)'
   }
}

function dica() {
   document.getElementById("maior").style.display = "none"
   document.getElementById("menor").style.display = "none"
}

input.addEventListener('keypress', (e) => {
   if(e.keyCode === 13) {
      dica()
      getValue()
   }
})