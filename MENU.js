let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.querySelectorAll('.producto').forEach(producto => {
    const nombre = producto.querySelector('h3').textContent;
    const precioTexto = producto.querySelector('p').textContent;
    const precio = parseFloat(precioTexto.replace('Q.', ''));
    const boton = producto.querySelector('.carrito-btn');
    const cantidadInput = producto.querySelector('input[type="number"]');

    boton.addEventListener('click', () => {
        const cantidad = parseInt(cantidadInput.value);

        // Verificar si ya está en el carrito
        const itemExistente = carrito.find(item => item.nombre === nombre);
        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            carrito.push({ nombre, precio, cantidad });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));

        alert(`${cantidad} x ${nombre} agregado(s) al carrito.`);
            });
});