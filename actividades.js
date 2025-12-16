/*** Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo.
AREA=(base * altura) / 2 ***/
/*
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
};
console.log(calcularAreaTriangulo(8, 10)); // Prueba de la función
*/
/*** Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor. ***/
/*
let encontrarMayor = function(num1, num2) {
    return (num1 > num2) ? num1 : num2; // If con operador ternario→ condición ? valor_si_verdadero : valor_si_falso
};
console.log(encontrarMayor(3, 8)); // Prueba de la función
*/
/*** Ejercicio 3: Mensaje global y local
Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope global". Luego, crea una función llamada mostrarMensaje que declare una variable local llamada saludoLocal con el valor "Hola desde el scope local" y que imprima ambos mensajes.***/
/*
let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
    let saludoLocal = "Hola desde el scope local";
    console.log(saludoGlobal);
    console.log(saludoLocal);
}
mostrarMensaje(); // Prueba de la función. Se van a ver los dos msjes porque la func puede hacer uso de una variable global y una local.
*/
/*** Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado.
***/
/*
function esPar(numero) {
    let resultado; // Variable local para guardar el resultado
    if (numero % 2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es impar";
    }   
    return resultado;
};
console.log(esPar(258)) // Prueba de la función
*/
/*** Ejercicio 5: Concatenar nombres (función expresada)
Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.
***/
/*
let concatenarNombres = function(nombre,apellido) {
    return nombre + " " + apellido;
};
console.log(concatenarNombres("Susana","Giménez"));
*/
/*** Ejercicio 6: Convertir a minutos
Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos.
***/
/*
function convertirHorasAMinutos(numero) {
    return numero*60;
};
console.log(convertirHorasAMinutos(8));
*/
/*** Ejercicio 7: Mensaje según la hora
Declara una variable global llamada horaActual (puedes asignarle un valor fijo). Crea una función declarada llamada mostrarSaludo que imprima "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso.***/
/*
let horaActual = 19;
function mostrarSaludo() {
    if (horaActual < 12) {
        console.log("Buenos días");
    } else if (horaActual < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
};
mostrarSaludo();
*/
/*** Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.***/
/*
let convertirCelsiusAFahrenheit = function(temperatura) {
    return (temperatura * 9/5) + 32;
};
console.log(convertirCelsiusAFahrenheit(30));
*/
/*** Ejercicio 9: Contar hasta un número
Crea una función declarada llamada contarHasta que reciba un número y use un bucle para imprimir todos los números desde 1 hasta ese número.***/
/*
function contarHasta(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
};
contarHasta(8);
*/
/*** Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.***/
//voy a probar con el 6: la cuenta debe ser 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.

let calcularFactorial = function(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
};

console.log(calcularFactorial(6));