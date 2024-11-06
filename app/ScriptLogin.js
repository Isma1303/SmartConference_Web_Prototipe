const usuariosLogin = [
    { "usuario": "iLiquez", "contraseña": "password0" },
    { "usuario": "oCastro", "contraseña": "password1" },
    { "usuario": "wMejia", "contraseña": "password2" }
]

const form = document.getElementById('LoginSmart')
const error = document.getElementById('error-message')

//funcion de validacion

form.addEventListener('submit', function(event){
    event.preventDefault()
    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    const validacion = usuarriosLogin.find(user.usuariosLogin.find(user => user.usuario === user && user.contraseña === password ))

    if (validacion){
        alert("Sesion Iniciada")

    }
    else {
        errorMessage.style.display = 'block'
    }
})