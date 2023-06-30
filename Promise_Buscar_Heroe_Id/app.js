const heroes = {
  capi: {
    nombre: "Capitan America",
    poder: "Aguatar inyecciones",
  },
  iron: {
    nombre: "Iron Man",
    poder: "Volar y disparar",
  },
  spider: {
    nombre: "spiderMan",
    poder: "Lanzar telaraña",
  },
};


const respuesta = (id)=>{
  return new Promise((resolve,reject)=>{
    const heroe = heroes[id]
    if(heroe){
      resolve(heroe)
    }else{
      reject("Heroe no existe")
    }
  })
}

Promise.all([respuesta("iron"),respuesta("spider")]).then(([re1, re2])=>{
console.log(re1,re2);
}

)

