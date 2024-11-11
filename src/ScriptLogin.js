
const Users = [
    { "usuario": "iLiquez", "contraseña": "password0" },
    { "usuario": "oCastro", "contraseña": "password1" },
    { "usuario": "eMejia", "contraseña": "password2" }
];


const form = document.getElementById('LoginSmart');
const errorMessage = document.getElementById('error-message');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;


    const validacion = Users.find(u => u.usuario === user && u.contraseña === password);

    if (validacion) {
        //ruta de acceso products
        window.location.href = "Productos.html"
    } else {
        errorMessage.style.display = 'block';
    }
});