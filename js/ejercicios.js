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

// TIRANDO FRUTA
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


// COMPARANDO DATOS Y TIPOS
let numero
let numero2
numero = (10 =='10') 
numero2 = (10 ==='10') 
console.log("el numero 10.6 es de tipo " + typeof(10.6))

// YO OBJETO
const ciudad = {
    nombre: "Nueva York",
    fechaFundacion: "23 de Mayo de 1624",
    poblacion: 8336000,
    extension: "783.8 km²"
};

for (const clave in ciudad) {
    if (ciudad.hasOwnProperty(clave)) {
        console.log(`Clave: ${clave}, Valor: ${ciudad[clave]}`);
    }
}

// DOBLE ELEMENTOS
function duplicarNumeros(array) {
    return array.map(function(num) {
        return num * 2;
    });
}

const numeros = [1, 2, 3, 4, 5];
const multiplos = duplicarNumeros(numeros);
console.log(multiplos);

//TRIANGULOS DE ASTERISCOS
for (let x = 1; x <= 5; x++) {
    console.log('*'.repeat(i));
}

let n = 5; 
for (let y = 1; y <= n; y++) {
    let spaces = '-'.repeat(n - y); 
    let stars = '*'.repeat(2 * i - 1); 
    console.log(spaces + stars + spaces); 
}

// NOMBRES QUE CONTIENEN A
function filtrarNombres() {
    let nombres = document.getElementById("nombres").value;
    let listaNombres = nombres.split(',').map(nombre => nombre.trim());
    let nombresConA = listaNombres.filter(nombre => nombre.charAt(0).toLowerCase() === 'a');
    document.getElementById("resultado").innerHTML = nombresConA.length > 0 ? nombresConA.join(', ') : 'No hay nombres que comiencen con "A"';
}

// REEMPLAZAR PALABRAS
function reemplazarPalabra() {
   
    let string= document.getElementById("string").value;
    let palabra = document.getElementById("palabra").value;
    let cambio = document.getElementById("cambio").value;

   
    let stringCambiado= string.replaceAll(palabra, cambio);

   
    document.getElementById("resultado").innerHTML = StringCambiado;
}

// CORTAR TEXTO
function obtenerPrimerosCaracteres() {
   
    let string = document.getElementById("string").value;
    let numero = parseInt(document.getElementById("numero").value);
    if (numero > cadena.length)
     {
        numero = cadena.length;
    }
    let stringCortado = string.substring(0, numero);
    document.getElementById("resultado").innerHTML = stringCortado;
}
