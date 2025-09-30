let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = 0;
const tbody = document.querySelector("#tabla-carrito tbody");
const facturaElem = document.getElementById("factura");

carrito.forEach(item => {
    let subtotal = item.precio * item.cantidad;
    total += subtotal;

    let fila = `<tr>
        <td>${item.nombre}</td>
        <td>Q.${item.precio.toFixed(2)}</td>
        <td>${item.cantidad}</td>
        <td>Q.${subtotal.toFixed(2)}</td>
    </tr>`;
    tbody.innerHTML += fila;
});

document.getElementById("total").textContent = total.toFixed(2);

// Generar factura en texto
let facturaTexto = "FACTURA\n-----------------------\n";
carrito.forEach(item => {
    facturaTexto += `${item.cantidad} x ${item.nombre} - Q.${(item.precio * item.cantidad).toFixed(2)}\n`;
});
facturaTexto += "-----------------------\nTOTAL: Q." + total.toFixed(2);
facturaElem.textContent = facturaTexto;

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    alert("Carrito vacío.");
    location.reload();
}