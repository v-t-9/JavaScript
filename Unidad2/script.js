// 1. Realizar una función, a la que se le pase como parámetro un número N,
//     y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
// curso Full Stack”
// function bienvenida() {
//     for (let i = 1; i <= N; i++){
//         console.log("Bienvenidos al cuurso Full Stack");
//     }
// }
// N = prompt("Ingrese un numero", "");
// bienvenida(N)
// 2. Diseñar una función que tenga como parámetros dos números, y que
// calcule el máximo.
// function maximo(a,b) {
//     if (Number(a) > Number(b)) {
//         return console.log(a);
//     }
//     else if (Number(a) < Number(b)) {
//         return console.log(b);
//     }
// }
// n1 = prompt("Ingrese un numero: ");
// n2 = prompt("Ingrese otro numero: ");
// maximo(n1, n2)
// 3. Crear una función que se llame promedio3, que reciba como
// parámetro tres valores y devuelva el promedio de los mismos.
// let promedio3 = (a, b, c) => (a + b + c) / 3;
// console.log(promedio3(2, 6, 8));
// 4. Crear una función que lea notas hasta que ingrese - 1 y devuelve el
// promedio de las notas leídas. (aunque no se suele leer valores en una
// función)
// function notas() {
//     n = 0;
//     count = 0;
//     acum = 0;
//     while (Number(n) != -1) {
//         n = prompt("Ingrese una nota: ", "");
//         if (isNaN(n) || Number(n) == "") {
//             alert("Intente de nuevo");
//         }
//         if (Number(n) != -1 && !isNaN(n) && Number(n) != "") {
//             count++;
//             acum = acum + Number(n);
//             alert(acum);
//         }
//     }
//     prom = acum / count;
//     return document.write(`El promedio es: ${prom} `);
// }
// notas();
// Una función que se llame siguiente, que reciba como
// parámetro un valor entero, y devuelva el siguiente del número
// ingresado como parámetro
// let siguiente = (n) => Number(n) + 1;
// console.log(siguiente(45));
// 5. Una función que se llame doble, que reciba como parámetro un valor, y
// devuelva el doble del número ingresado como parámetro.
// a = prompt("Ingrese un numero", "");
// let doble = (n) => Number(n) * 2;
// console.log(doble(a));
// 6. Una función que se llame cuadrado, que reciba como parámetro un
// valor, y devuelva el valor del numero ingresado como parámetro
// elevado al cuadrado.
// let cuadrado = (n) => Number(n) ** 2;
// a = prompt("Ingrese un numero", "");
// alert(cuadrado(a));
// 7. Una función que se denomine imprimirValores que dado un número
// por parámetro, imprima cual es el valor siguiente, el doble y el
// cuadrado.Usando las funciones definidas en los puntos 5) , 6) y 7) :
// siguiente, el doble y el cuadrado.
// a = prompt("Ingrese un numero", "");
// function imprimirValores(n) {
//     document.write(`El siguiente es: ${siguiente(n)} <br>`);
//     document.write(`El doble es: ${doble(n)}<br>`);
//     document.write(`El cuadrado es: ${cuadrado(n)}<br>`);
// }
// imprimirValores(a);
// 8. Una función que se denomine imprimirElDobleDelSiguiente que dado
// un número por parámetro, imprima cual es el valor siguiente al el doble.
// Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
// doble.
// a = prompt("Ingrese un numero", "");
// function imprimirElDobleDelSiguiente(n) {
//     document.write(`El siguiente es: ${siguiente(n)} <br>`);
//     document.write(`El doble es: ${doble(n)}<br>`);
//     document.write(`El doble del siguiente es: ${doble(siguiente(n))}<br>`);
// }
// imprimirElDobleDelSiguiente(a);
// 9. Una función que se denomine
// imprimirElDobleDelSiguienteAlCuadrado que dado un número por
// parámetro, imprima cual es el valor siguiente al el doble.Usando las
// funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
// cuadrado
// a = prompt("Ingrese un numero", "");
// function imprimirElDobleDelSiguienteAlCuadrado(n) {
//     document.write(`El siguiente es: ${siguiente(n)} <br>`);
//     document.write(`El doble es: ${doble(n)}<br>`);
//     document.write(`El cuadrado es: ${cuadrado(n)}<br>`);
//     document.write(`El doble del siguiente es: ${doble(siguiente(n))}<br>`);
//     document.write(`El doble del siguiente al cuadrado es: ${cuadrado(doble(siguiente(n)))}<br>`);
// }
// imprimirElDobleDelSiguienteAlCuadrado(a);
// 10.Una función que dado la longitud de un lado de un cuadrado devuelva
// el perímetro
// let perimetroCuadrado = (lado) => lado * 4;
// document.write(`El perimetro del cuadrado: ${perimetroCuadrado(14)}<br>`);
// 11. Una función que dado la longitud de un lado de un cuadrado devuelva
// la superficie.
// let superficieCuadrado = (lado) => lado * lado;
// document.write(`La superficie del cuadrado: ${superficieCuadrado(14)}<br>`);
// 12.Una función que dado el radio de un círculo devuelva la circunferencia
//     (perímetro del círculo).
// function circunfereincia(radio) {
//     diametro = radio * 2;
//     circunf = diametro * Math.PI;
//     return document.write("La cirunsferencia es: ", circunf );
// }
// circunfereincia(10)
// 13.Una función que dado el radio de un círculo devuelva el área del
// círculo.
// function area(radio) {
//     a = Math.PI * radio**2
//     return document.write("El radio es: ", a);
// }
// area(10)
// 14.Una función que dado un número de mes y me devuelva la cantidad de
// días de ese mes(suponiendo que no es un año bisiesto).
// let a = prompt("Ingrese el numero del mes: ", "");

// function diasdelMes(m) {
//     switch (m) {
//         case "1":
//             document.write("Enero tiene 31 dias.");
//             break;
//         case "2":
//             document.write("Febrero tiene 28 dias.");
//             break;
//         case "3":
//             document.write("Marzo tiene 31 dias.");
//             break;
//         case "4":
//             document.write("Abril tiene 30 dias.");
//             break;
//         case "5":
//             document.write("Mayo tiene 31 dias.");
//             break;
//         case "6":
//             document.write("Junio tiene 30 dias.");
//             break;
//         case "7":
//             document.write("Julio tiene 31 dias.");
//             break;
//         case "8":
//             document.write("Agosto tiene 31 dias.");
//             break;
//         case "9":
//             document.write("Septiembre tiene 30 dias.");
//             break;
//         case "10":
//             document.write("Octubre tiene 31 dias.");
//             break;
//         case "11":
//             document.write("Noviembre tiene 30 dias.");
//             break;
//         case "12":
//             document.write("Diciembre tiene 31 dias.");
//             break;
//     }
// }
// diasdelMes(a);

// 15.Una función que reciba como parámetro un año y diga si ese año es
// bisiesto.
// a = prompt("Ingrese año para saber si es bisiesto: ");
// function añoBisiesto(b) {
//     if (b % 4 == 0 && b % 100 != 0) {
//         return document.write(true);
//     }
//     else if (b % 100 == 0 && b % 400 == 0) {
//         return document.write(true);
//     }
//     else{
//         return document.write(false);
//     }

// }
// añoBisiesto(a);

// Ejercicio 1: cree un array con todas las edades de los estudiantes de su
// clase.Itere el array utilizando un bucle while y luego imprima todas las
// edades en la consola.
// arr = [];
// arr.unshift({
//     name: "Juan",
//     age: 18
//     },
//     {
//         name: "Micaela",
//         age: 27
//     },
//     {
//         name: "Maria",
//         age: 22
//     },
//     {
//         name: "Pedro",
//         age: 35 })
// let i=0;
// while (i < arr.length) {
//     console.log(arr[i].age);
//     i++;
// }
// Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
// para imprimir solo números pares.Cambie el ciclo para usar un ciclo
// "for" en lugar de un ciclo "while".
// arr = [];
// arr.unshift({
//     name: "Juan",
//     age: 18
//     },
//     {
//         name: "Micaela",
//         age: 27
//     },
//     {
//         name: "Maria",
//         age: 22
//     },
//     {
//         name: "Pedro",
//         age: 35 })
// let i=0;
// for (i of arr) {
//     if (i.age % 2 == 0) {
//         console.log(i.age);
//     }
// }
// Ejercicio 3: escriba una función que reciba un array como parámetro e
// imprima el número más bajo de la array en la consola.
// arr = [2, 44, 123, 4023, 2]
// function masBajo(a) {
//     let min = a[0];
//     for (let i = 0; i <= a.length; i++) {
//         if (a[i] < min) {
//             min = a[i];
//         }
//     }
//     return console.log(min);
// }
// masBajo(arr);
// Ejercicio 4: escriba una función que reciba un array como parámetro e
// imprima el número más grande de la array en la consola.
// arr = [2, 44, 123, 4023, 2]
// function masGrande(a) {
//     let max = 0;
//     for (let i = 0; i <= a.length; i++) {
//         if (a[i] > max) {
//             max = a[i];
//         }
//     }
//     return console.log(max);
// }
// masGrande(arr);
// Ejercicio 5: Escriba una función que reciba dos parámetros, una array y
// un índice.La función imprimirá el valor del elemento en la posición
// dada(basado en uno) en la consola.Por ejemplo, dada la siguiente array e índice,
//     la función imprimirá '6'.
// var array =
//     [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
// var index = 1;
// function valorElem(a, ind) {
//     return console.log(a[ind]);
// }
// valorElem(array, index)
// Ejercicio 6: Escriba una función que reciba una array y solo imprima los
// valores que se repiten.Por ejemplo, dada la siguiente array e índice, la
// función imprimirá '6,23,33,100'.
// var array =
//     [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
// function duplicados(arr) {
//     return arr.filter((valorActual, indexActual) =>
//         arr.indexOf(valorActual) !== indexActual);
// }
// console.log(duplicados(array));
// Ejercicio 7: escriba una función de JavaScript simple para unir todos los
// elementos de la siguiente array en una cadena.
//    myColor = ["Red", "Green", "White", "Black"];
// Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco",
//     "Negro"
// function unir(a) {
//     res = a.join(", ");
//     return console.log(res);
// }
// unir(myColor)
// Ejercicio 8: escriba una función de JavaScript que invierta un número.
// Por ejemplo, si x = 32443, la salida debería ser 34423.
// x = 32443;
// function invierte(n) {
//     str = n.toString()
//     let res;
//     for (let i = str.length;  i>=0; i--){
//         res = res + str[i];
//     }
//     r = res.substring(3,res.length)
//     return console.log(r);
// }
// invierte(x);
// Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
// en orden alfabético.Por ejemplo, si x = 'webmaster', la salida debería
// ser 'abeemrstw'.La puntuación y los números no se pasan en la
// cadena.
// let x = 'webmaster'

// function ordenAlfabetico(x) {
//     let arr = x.split("");
//     arr.sort();
//     x = arr.join("");
//     return console.log(x);
// }
// ordenAlfabetico(x);
// Ejercicio 10: escriba una función de JavaScript que convierta la primera
// letra de cada palabra a mayúsculas.Por ejemplo, si x = "prince of
// persia", la salida debería ser "Prince Of Persia".
// let x = "prince of persia"
// function mayus(str) {
//     let result = [];
//     for (let arr of str.split(" ")) {
//         result.push(arr[0].toUpperCase() + arr.slice(1));
//     }
            
//     return console.log(result.join(" "));
// }
// mayus(x);
// Ejercicio 11: escriba una función de JavaScript que busque la palabra
// más larga de una frase.Por ejemplo, si x = "Tutorial de desarrollo web",
//     el resultado debería ser "Desarrollo"
// let x = "Tutorial de desarrollo web"
// function palabraLarga(str) {
//     arr = str.split(" ");
//     a = 1; 
//     let res;
//     for (i of arr) {
//       if (i.length >= a) {
//             a = i.length;
//             res = i
//         }
//     }
//     return console.log(res);
// }
// palabraLarga(x);