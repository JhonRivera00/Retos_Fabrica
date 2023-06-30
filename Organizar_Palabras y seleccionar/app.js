const a = 1
const fin = []

const letras = ["ley","orden","letras","manualidades","sol"]
let n = 3
letras.forEach(e=>{
    const  r = e.split("")
    
    if(r.length===n){
        fin.push(e)
    }
})

document.getElementById("result").innerHTML=fin