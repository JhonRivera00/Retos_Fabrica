let N = 5;
let array = [];


// for (let i = 1; i <= N; i++) {
//   let stars = "* ".repeat(i);
//   array.push(stars);
// }

// result.innerHTML = array.join("<br>");


let matriz = ([
    ["*","*","*"],
    ["","*",""],
    ["*","*","*"],
])
let cont = 0
matriz.forEach((e) => {
    e.forEach((i)=>{
        if(i.includes("*")){
            cont++
        }
    })
});
 document.getElementById("result").innerHTML= cont