let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    const nombre = tarjeta.querySelector('h2').textContent.trim();
    const precioTexto = tarjeta.querySelector('strong').textContent.replace('Q', '').trim();
    const precio = parseFloat(precioTexto);
    const boton = tarjeta.querySelector('.carrito-btn');
    const cantidadInput = tarjeta.querySelector('input[type="number"]');

    boton.addEventListener('click', () => {
        const cantidad = parseInt(cantidadInput.value);

        // Verificar si ya existe en el carrito
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