(async()=>{
try {
    const data = await getProductos()
    crearTabla(data)
} catch (error) {
    console.log(error)
}
})()

const crearTabla=(data)=>{
const body = document.body
    const table= `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Categoria</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Imagen</th>
      </tr>
    </thead>
    <tbody id="lista">
      
     
    </tbody>
    </table>`

    body.innerHTML=table

    crearLista(data)
}

const crearLista = (data)=>{
    const lista = document.getElementById("lista")
data.forEach((element,index) => {
    const tr = `<tr>
    <td>${index}</td>
    <td class="fw-bold">${element.category}</td>
    <td>${element.description}</td>
    <td><img  class="w-25" src=${element.image} alt=""></td>
  </tr>`
lista.innerHTML+=tr

});
}
