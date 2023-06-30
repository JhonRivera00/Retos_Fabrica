const input = document.createElement("input")

input.id="text"

const body = document.getElementById("result")
const button = document.createElement("button")

const text = button.textContent="Enviar"


body.append(input)
body.append(button)

button.addEventListener("click",()=>{
const data = document.getElementById("text").value
alert(`Hola ${data}`)

})


input.addEventListener("change",()=>{
    const data = document.getElementById("text").value
    imprimir(data)
    
    })


const imprimir = (nombre)=>{
    alert(`Hola ${nombre}`)
}