const shopContet = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


fetch("../json/productos.json")
.then(Response => Response.json())
.then(productos => {
    console.log(productos)
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.imagen}">
        <h3>${product.nombre}</h3>
        <p class="price">$ ${product.precio} </p>
    `;

    shopContet.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if (repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else {
        carrito.push({
            id : product.id,
            imagen : product.imagen,
            nombre : product.nombre,
            precio : product.precio,
            cantidad : product.cantidad,
        });
    }
        console.log(carrito);
        console.log(carrito.length);
        carritoConter();
        saveLocal();
    });
    
    comprar.addEventListener("click", () => {
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
});

const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};
