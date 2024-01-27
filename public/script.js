let usName = document.getElementById('usName');
let usPassword = document.getElementById('usPassword');
let usEmail = document.getElementById('usEmail');

function getVal(){
    fetch("/addName",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },     
        body:JSON.stringify({ name: usName.value, password: usPassword.value, email: usEmail.value})
    })
}