let cont = 0
const sumar=()=>{
  document.getElementById("result").innerHTML=cont
if(cont>=50){

  localStorage.setItem("Terminado","Terminado")
  clearInterval(inteval)
}
cont+=2
}

const inteval = setInterval(sumar,200)