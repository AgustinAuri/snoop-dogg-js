
const listado = document.getElementById("listado")

fetch("../json/productos.json")
.then(Response => Response.json())
.then(data => {
    data.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>${producto.id}</p>
            <hr/>
        `;

        listado.append(li);
    });
})