const lista = document.querySelector("#listado")

fetch ("./data.json")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((producto) => {
        const li = document.createElement("li")
        li.innerHTML = `
        <h2>${producto.pelicula}</h2>
        <img src="${producto.img}"></img>
        <h3>${producto.descripcion}</h3>
        `
        lista.append(li)
    });
})