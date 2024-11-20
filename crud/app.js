// app.js

document.getElementById('abmForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;

    const nuevoElemento = { nombre, edad, email };

    // Simulando llamada a API para alta
    crearElemento(nuevoElemento);
});

function crearElemento(elemento) {
    // Simulación de API (puedes reemplazar con fetch/axios para llamada real)
    agregarFila(elemento);
}

async function agregarFila(elemento) {

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;

    try {
 
        const response = await fetch('http://localhost/dwa/api/create.php', { 
            method: 'POST',
            /*headers: {
                'Content-Type': 'application/json'
            },*/
            body: JSON.stringify({
                nombre: nombre,
                edad: edad,
                email: email,
            })
        });

        const data = await response.json();
 
        if (response.ok) {
            const tabla = document.getElementById('dataTable').querySelector('tbody');
            const fila = document.createElement('tr');
        
            fila.innerHTML = `
                <td data-label="Nombre">${elemento.nombre}</td>
                <td data-label="Edad">${elemento.edad}</td>
                <td data-label="Email">${elemento.email}</td>
                <td data-label="Acciones">
                    <button onclick="editarElemento(this)">Editar</button>
                    <button onclick="eliminarElemento(this)">Eliminar</button>
                </td>
            `;
            
            tabla.appendChild(fila);

        } else {

            document.getElementById('message').textContent = data.message || 'Error al iniciar sesión';
            document.getElementById('message').style.color = 'red';

        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = "Amigo hay un error disculpame";
        document.getElementById('message').style.color = 'red';
    }


}

function editarElemento(boton) {
    const fila = boton.parentElement.parentElement;
    const nombre = prompt("Nuevo nombre:", fila.cells[0].innerText);
    const edad = prompt("Nueva edad:", fila.cells[1].innerText);
    const email = prompt("Nuevo email:", fila.cells[2].innerText);

    if (nombre && edad && email) {
        fila.cells[0].innerText = nombre;
        fila.cells[1].innerText = edad;
        fila.cells[2].innerText = email;
        
        // Simulando llamada a API para modificación
        console.log('Elemento modificado:', { nombre, edad, email });
    }
}

function eliminarElemento(boton) {
    const fila = boton.parentElement.parentElement;
    fila.remove();

    // Simulando llamada a API para baja
    console.log('Elemento eliminado');
}