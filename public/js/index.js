let input_email = document.getElementById('login-email')
let input_pass = document.getElementById('login-pass')


document.getElementById("login-button").addEventListener('click', event => {
    if (input_email.value == "" || input_pass.value == ""){
        alert('Valores não informados corretamente!')
        
        if (input_email.value == ""){
            input_email.style.cssText = 
                'border-color: rgb(212, 57, 45); transition: 0.2s; animation: shake 300ms;'
        }
    
        if (input_pass.value == ""){
            input_pass.style.cssText = 
                'border-color: rgb(212, 57, 45); transition: 0.2s; animation: shake 300ms;'
        }
    } else {
        location.href = "main.html"
    }

    event.preventDefault()
})
 
/* Redireciona a pessoa para a página principal
document.getElementById("login-button").addEventListener('click', event => {
    location.href = "main.html"
    event.preventDefault() 
})
*/