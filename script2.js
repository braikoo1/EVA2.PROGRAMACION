//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100
let personas=[]
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value.trim()
    let eErrorNombre = document.getElementById("errorNombre")
    let eEdad = document.getElementById("edad")
    let vEdad = parseInt(eEdad.value)
    let eErrorEdad = document.getElementById("errorEdad")

    let nombreValidado = validarNombre(eNombre, vNombre, eErrorNombre)
    let edadValidada = validarEdad(eEdad, vEdad, eErrorEdad)

    if (nombreValidado === "exito" && edadValidada === "exito") {
        let persona = {
            nombre: vNombre,
            edad: vEdad
        }
        personas.push(persona)
        eNombre.value = ""
        eEdad.value = ""
        cargarDatos()
    }
}

function validarNombre(elemento, valor, eError) {
    if (valor === "") {
        alert("El nombre no puede estar vacío")
        eError.innerText = "El nombre no puede estar vacío"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }
    let regex = /^[a-zA-Z\s]+$/

    if (!regex.test(valor)) {
        alert("El nombre solo puede contener letras")
        eError.innerText = "El nombre solo puede contener letras"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }

    eError.innerText = ""
    elemento.style.backgroundColor = "green"
    elemento.style.color = "black"
    return "exito"
}

function validarEdad(elemento,valor,eError) {
    if (isNaN(valor) || valor < 18 || valor >= 100) {
        alert("La edad no es valida (Debes tener entre 18 y 99 años")
        eError.innerText = "La edad no es valida"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }
    else {
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "black"
        return "exito"
    }

}

function cargarDatos(){
    let tabla = document.getElementById("tablaPersonas")
    let filas = personas.map((p,index) => {
        return `
        <tr>
            <td>${p.nombre}</td>
            <td>${p.edad}</td>
            <td>
                <button onclick="eliminar(${index})">Eliminar</button>
                <button onclick="cargarFormulario(${index})">Editar</button>
            </td>
        </tr>`
    })
    tabla.innerHTML = filas.join("")
}   
function eliminar(indice) {
    personas.splice(indice, 1)
    cargarDatos()
}
function cargarFormulario(indice) {
    let persona = personas[indice]
    document.getElementById("nombre").value = persona.nombre
    document.getElementById("edad").value = persona.edad
    document.getElementById("btnActualizar").value = indice
    document.getElementById("btnActualizar").style.display = "inline"
    document.getElementById("btnAgregar").style.display = "none"
}
function actualizarDatos(){
    let indice = parseInt(document.getElementById("btnActualizar").value)
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value.trim()
    let eEdad = document.getElementById("edad")
    let vEdad = parseInt(eEdad.value)

    let eErrorNombre = document.getElementById("errorNombre")
    let eErrorEdad = document.getElementById("errorEdad")

    let nombreValido = validarNombre(eNombre, vNombre, eErrorNombre)
    let edadValida = validarEdad(eEdad, vEdad, eErrorEdad)

    if (nombreValido === "exito" && edadValida === "exito") {
        personas[indice] = {
            nombre: vNombre,
            edad: vEdad
        }
        eNombre.value = ""
        eEdad.value = ""
        document.getElementById("btnActualizar").style.display = "none"
        document.getElementById("btnAgregar").style.display = "inline"
        cargarDatos()
    }
}



