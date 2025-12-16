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

let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
    let saludoLocal = "Hola desde el scope local";
    console.log(saludoGlobal);
    console.log(saludoLocal);
}
mostrarMensaje(); // Prueba de la función. Se van a ver los dos msjes porque la func puede hacer uso de una variable global y una local.