        
const productos = [
    {
        articulo:"Manzana",
        estado:false
    },
    {
        articulo:"Peras",
        estado:true
    },
    {
        articulo:"Platanos",
        estado:false
    },
    {
        articulo:"Naranjas",
        estado:true
    }
]

const pago = productos.filter((item)=>item.estado===true)
const pendiente = productos.filter((item)=>item.estado===false)
document.getElementById("result").innerHTML=JSON.stringify(pago)
document.getElementById("result1").innerHTML=JSON.stringify(pendiente)

const ol = document.createElement("ol")


const body = document.getElementById("div")


pago.map((data)=>{
const li = document.createElement("li")
const li1 = document.createElement("li")
    
    li.textContent=(data.articulo)
    li1.textContent=(data.estado)
    ol.append(li)
    ol.append(li1)
})

body.append(ol)


