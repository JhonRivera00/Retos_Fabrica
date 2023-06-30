const parrafo = document.getElementById("result")
const btn = document.getElementById("btn")
// let count=0
// btn.addEventListener("click",()=>{
//     do{
//         setInterval(()=>{
//             parrafo.innerHTML=count;
//             console.log(count)
//             if(count=50){
//                 localStorage.setItem("Termino","Termino")
//             }
//         },2000)
//         count++
//        }while(count>50)


//    }

// )

let array = [1,4,6,3,4,2,6,9]

let resu= Math.max(...array)

parrafo.innerHTML=resu

