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

let encontrarMayor = function(num1, num2) {
    return (num1 > num2) ? num1 : num2; // If con operador ternario→ condición ? valor_si_verdadero : valor_si_falso
};
console.log(encontrarMayor(3, 8)); // Prueba de la función