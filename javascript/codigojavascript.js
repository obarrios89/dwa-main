

document.getElementById('formLogin').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {

        const response = await fetch('http://localhost/dwa/api/login.php', { 
            method: 'POST',
            /*headers: {
                'Content-Type': 'application/json'
            },*/
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            //document.getElementById('parrafo').textContent ="login"
            //localStorage.setItem('token', data.token); // Guardar el token en localStorage
            alert("Inicio de sesión exitoso")
          
        } else {

            document.getElementById('message').textContent = data.message || 'Error al iniciar sesión';
            document.getElementById('message').style.color = 'red';

        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = "Amigo hay un error disculpame";
        document.getElementById('message').style.color = 'red';
    }
});
