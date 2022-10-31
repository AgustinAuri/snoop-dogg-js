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
            <p>${producto.precio}</p>
        `;
        listado.append(li);

        let comprar = document.createElement("button")
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        li.append(comprar);

        comprar.addEventListener("click", () => {
            carrito.push({
                id : producto.id,
                img : producto.thumbnailUrl,
                nombre : producto.nombre,
                precio : producto.precio,
            });
            window.localStorage.setItem(
                "carrito", JSON.stringify(carrito)
            );
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

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    shop.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}</p>
        `;

        modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalbuying = document.createElement("div");
    totalbuying.className = "total-content"
    totalbuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalbuying) 
}); 


