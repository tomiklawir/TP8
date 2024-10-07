// TIRANDO FRUTA
function tirandoFruta(){
    const frutas = {
        "melon",
        "guayaba",
        "mango",
        "anana",
        "frambuesa",
        "maracuya",
        "sandia",
        "papaya",
        "nispero"
    };


    const frutaUsuario = prompt("Ingrese una fruta").toLowerCase();

    if(frutas.includes(frutaUsuario))
        console.log('Tenemos ${frutausuario}');

    else
        console.log('Tenemos ${frutausuario}');
}

// EJERCICIO CALCULADORA DE EDAD
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())){
        edad--;
    }
    return edad;
}

const nombre = prompt("Ingrese su nombre");
const fechaNacimiento = prompt("Ingrese su fecha de nacimiento (Formato: YYYY-MM-DD)");
const edad = calcularEdad(fechaNacimiento);
console.log(`Hola ${nombre}, tienes ${edad} años!`);

// COMPARANDO DATOS Y TIPOS
let numero
let numero2
numero = (10 =='10') 
numero2 = (10 ==='10') 
console.log("el numero 10.6 es de tipo " + typeof(10.6))
