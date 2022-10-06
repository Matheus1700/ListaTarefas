let input_name = document.getElementById("sign-name")
let input_email = document.getElementById("sign-email")
let input_pass = document.getElementById("sign-pass")
let input_pass2 = document.getElementById("sign-pass2")


// método para sinalizar campos de input mal preenchidos
document.getElementById("sign-button").addEventListener('click', event => {
    if (input_name.value == "" || input_email.value == "" || input_pass.value == "" || input_pass2.value == ""){
        alert('Valores não informados corretamente!')

        if (input_name.value == ""){
            input_name.style.cssText = 
                'border-color: rgb(212, 57, 45); transition: 0.2s; animation: shake 300ms;'
        }
        if (input_email.value == ""){
            input_email.style.cssText = 
                'border-color: rgb(212, 57, 45); transition: 0.2s; animation: shake 300ms;'
        }
        if (input_pass.value == ""){
            input_pass.style.cssText = 
                'border-color: rgb(212, 57, 45); transition: 0.2s; animation: shake 300ms;'
        }
        if (input_pass2.value == ""){
            input_pass2.style.cssText = 
                'border-color: rgb(212, 57, 45); transition: 0.2s; animation: shake 300ms;'
        }
    } else {
        location.href = "/"
    }
    
    event.preventDefault()
})