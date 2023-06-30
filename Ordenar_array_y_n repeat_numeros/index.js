const array = [1,2,-3,-1,-6,2,4,4,1,45,-1,9]


const orden = array.sort((a,b)=>a-b) 

const filtro = [...new Set(orden)]


document.getElementById("result").innerHTML=filtro

const arre=  array.filter(e=>e%2==0)


