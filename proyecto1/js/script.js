let usuarioCorrecto="admin";
let contraseñaCorrecta="admin2024"

function login(){
    //captura datos por medio de funciones DOOM
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let resultado = document.getElementById("resultado")
    

    if(usuario == usuarioCorrecto && contraseña == contraseñaCorrecta){

        resultado.style.color= "green";
        resultado.innerHTML= "acceso correcto";
    }else
    resultado.style.color= "red";
    resultado.innerHTML="acceso incorrecto";


}