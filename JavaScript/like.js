const boton = document.getElementById('third')
const botonRes = document.getElementById ('btn-reset')
const contad= document.getElementById('contador')

let unClick= 0;

boton.addEventListener("click",() => { 
    unClick++ ;
    contad.innerText=unClick
})

botonRes.addEventListener("click",() =>{
    unClick= 0;
    contad.innerText=unClick;         //esto es para que el contador vuelva a cero, si no lo pongo va a retomar desde el ultimo click 


})