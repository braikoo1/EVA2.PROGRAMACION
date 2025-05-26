//validar nombre, debe contener solo letras y no ser vacio
let personas=[]
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value
    let eErrorEdad = document.getElementById("errorEdad")
    if (vNombre == ""){
        console.log("El nombre no puede estar vacio") 
        alert("El nombre no puede estar vacio")  
    }
    if (vEdad <18){
        console.log("Debes ser mayor de 18 años")
        alert("Debes ser mayor de 18 años")
    }
    if (vEdad <100){
        console.log("Debes poner una edad valida (menor que 100)")
        alert("Debes poner una edad valida (menor que 100)")
    }
}


//validar edad: Debe ser mayor o igual a 18 y menor a 100
    

function cargarDatos(){

}
function actualizarDatos(){


}


