const shopContet = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const listado = document.getElementById("listado");
const carritoLocal = [];
const shop = JSON.parse(window.localStorage.getItem("carrito")); 
let carrito = [];

fetch("../json/productos.json")
.then(Response => Response.json())
.then(data => {
    data.forEach(producto => {
        const li = document.createElement("div");
        li.className = "card";
        li.innerHTML = `
            <img class="img-fluid ocultar" src= ${producto.thumbnailUrl}>
            <h3>${producto.nombre}</h3>
            <p>$ ${producto.precio}</p>
        `;
        listado.append(li);

        let comprar = document.createElement("button")
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        li.append(comprar);

        comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id);

        if(repeat){
            carrito.map((prod) => {
                if(prod.id === producto.id){
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id : producto.id,
                img : producto.thumbnailUrl,
                nombre : producto.nombre,
                precio : producto.precio,
                cantidad : producto.cantidad
            });
        }
            console.log(carrito);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Has añadido el producto al carrito',
                showConfirmButton: false,
                timer: 1300,
                background: '#000', 
            });
        });
    });
})


