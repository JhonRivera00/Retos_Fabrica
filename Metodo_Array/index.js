
 const numeros = [1,2,3,4,5,10,8];
const letras = ["e","a","c","u","y"]
const num = Math.max(...numeros)
const num1 = numeros.sort(()=> Math.random() - 0.5)

const list1 = ["Pedro","Luisa","Julian","Ana"]
const list2=["Marina", "Jose","Alba","Felipe"]

let arr1 = list1.pop()
let arr2 = list1.shift()

let list10 = list1.push(arr2)
let list20 = list1.unshift(arr1)



let arr3 = list2.pop()
let arr4 = list2.shift()

let list30 = list2.push(arr4)
let list40 = list2.unshift(arr3)


let fin = list1.shift()
let fin1 = list1.pop()

let fin2 = list2.shift()
let fin3 = list2.pop()

list1.push(fin2)
list1.unshift(fin3)

list2.push(fin)
list2.unshift(fin1)

document.getElementById("result").innerHTML=list1
document.getElementById("result1").innerHTML=list2