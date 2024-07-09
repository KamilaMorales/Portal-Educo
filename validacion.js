function validarFormulario() {
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    
    errorMessage.textContent = '';

    
    if (username === '') {
        errorMessage.textContent = 'Por favor, ingrese su nombre de usuario.';
        return false;
    }
    
    if (password === '') {
        errorMessage.textContent = 'Por favor, ingrese su contraseña.';
        return false;
    }

   
    window.location.href = 'index2.html'; 
    return false;
}
