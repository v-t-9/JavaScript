// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”
// alert("Hello World!");
// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
// document.write("Hello World!");
// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// document.write(3 + 5);
// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
// let nombreUsuario = prompt("Ingrese su nombre: ", "");
// document.write("Hola " + nombreUsuario);
// 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// let n1 = prompt("Ingrese un numero: ", "");
// let n2 = prompt("Ingrese otro numero: ", "");
// document.write("La suma es: " , Number(n1) + Number(n2));
// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let n1 = prompt("Ingrese un numero: ", "");
// let n2 = prompt("Ingrese otro numero: ", "");
// if (n1 > n2) {
//     document.write("El mayor es " , n1);
// }
// else {
//     document.write("El mayor es " , n2);
// }
// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// let n1 = prompt("Ingrese un numero: ", "");
// let n2 = prompt("Ingrese otro numero: ", "");
// let n3 = prompt("Ingrese un tercer numero: ", "");
// if (n1 > n2 && n1 > n3) {
//     document.write("El mayor es " ,n1);
// }
// else if (n2 > n1 && n2 > n3) {
//     document.write("El mayor es " , n2);
// }
// else if(n3 > n1 && n3 > n2) {
//     document.write("El mayor es " , n3);
// }
// else {
//     document.write("Situacion no contemplada");
// }
// 8. Escribe un programa que pida un número y diga si es divisible por 2
// let num = prompt("Ingrese un numero: ", "");
// function divisiblePorDos(n) {
//     if (n % 2 === 0) {
//         document.write(n, " es divisible por 2");
//     }
//     else {
//         document.write(n, " no es divisible por 2")
//     }
// }
// divisiblePorDos(num);
// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
// frase = prompt("Ingrese una frase ", "");
// function countLetra(frase) {
//     let c = 0;
//     for (let i = 0; i <= frase.length; i++){
//         if (frase[i] == "a") {
//             c = c+1
//         }
//     }
//     document.write(c);
// }
// countLetra(frase);
// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen
// frase = prompt("Ingrese una frase ", "");
// function vocales(frase) {
//     let c = "";
//     for (let i = 0; i <= frase.length; i++) {
//         if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u" ) {
//             c = c + frase[i];
//         }

//     }
//     document.write(c);
// }
// vocales(frase);
// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
// frase = prompt("Ingrese una frase ", "");
// function vocalesCount(frase) {
//     let c = 0;
//     for (let i = 0; i <= frase.length; i++) {
//         if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
//             c = c + 1;
//         }

//     }
//     document.write(c);
// }
// vocalesCount(frase);

// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
// frase = prompt("Ingrese una frase ", "");
// function vocalesTodasCount(frase) {
//     let a = 0;
//     let e = 0;
//     let i = 0;
//     let o = 0;
//     let u = 0;
//     for (let i = 0; i <= frase.length; i++) {
//         if (frase[i] == "a") {
//             a = a + 1;
//         }
//         if (frase[i] == "e") {
//             e = e + 1;
//         }
//         if (frase[i] == "i") {
//             i = i + 1;
//         }
//         if (frase[i] == "o") {
//             o = o + 1;
//         }
//         if (frase[i] == "u") {
//             u = u + 1;
//         }

//     }
//     document.write("a: ", a, " e: ", e, " i: ", i, " o: ", o, " u: ", u);
// }
// vocalesTodasCount(frase);
// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7(sólo hay que comprobar si lo es por uno de los cuatro)
// 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible(hay que decir todos por los que es divisible)
// n = prompt("Ingrese un numero: ", "");
// function divisible(num) {
//     if (num % 2 === 0) {
//         document.write("Es divisible por 2<br>");
//     }
//     if (num % 3 === 0) {
//         document.write("Es divisible por 3<br>");
//     }
//     if (num % 5 === 0) {
//         document.write("Es divisible por 5<br>");
//     }
//     if (num % 7 === 0) {
//         document.write("Es divisible por 7<br>");
//     }
// }
// divisible(n);
//15. Escribir un programa que escriba en pantalla los divisores de un número dado
// n = prompt("Ingrese un numero: ", "");
// function divisores(num) {
//     document.write("Los divisores de ", num, " son: <br>");
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             document.write(i ,"<br>");
//         }
//     }

// }
// divisores(n);
// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
// n1 = prompt("Ingrese un numero: ", "");
// n2 = prompt("Ingrese otro numero: ", "");
// function divisoresComunes(num1, num2) {
//     document.write("Los divisores comunes de ", num1, " y ", num2, " son: <br>");
//     for (let i = 1; i <= num1; i++) {
//         if (num1 % i === 0 && num2 % i === 0) {
//             document.write(i, "<br>");
//         }
//     }

// }
// divisoresComunes(n1,n2);
//17. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
// n = prompt("Ingrese un numero: ", "");
// function primos(num) {
    // let flag = false
    // for (let i = 2; i < num; i++){
    //     if (num%i == 0) {
    //         flag = true;
    //     }
    //     break;
    // }
    // if (flag == true) {
    //     document.write("El numero ", num, " no es primo.")
    // }
    // else {
    //     document.write("El numero ", num, " es primo.")
    // }

// }
// primos(n)

// 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir
// edad = prompt("Ingrese la edad: ", "");
// if (edad >= 18) {
//     document.write("Ya puede conducir")
// }
// else {
//     document.write("No puede conducir")
// }

//19. Pide una nota (número). Muestra la calificación según la nota:
// ● 0 - 3: Muy deficiente
// ● 3 - 5: Insuficiente
// ● 5 - 6: Suficiente
// ● 6 - 7: Bien
// ● 7 - 9: Notable
// ● 9 - 10: Sobresaliente

// let nota = prompt("Ingrese la nota: ", "");
// switch (Number(nota)) {
//     case 0:
//     case 1:
//     case 2:
//         document.write("Muy deficiente");
//         break;
//     case 3:
//     case 4:
//         document.write("Deficiente");
//         break;
//     case 5:
//         document.write("Suficiente");
//         break;
//     case 6:
//         document.write("Bien");
//         break;
//     case 7:
//     case 8:
//         document.write("Notable");
//         break;
//     case 9:
//     case 10:
//         document.write("Sobresaliente");
//         break;
//     default:
//         document.write("No valido");

// }
// 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
// function concatenar() {
//     let str = "";
//     let acum = "";
//     while (str != null) {
//         str = prompt("Ingrese una frase", "");
//         if (str != null) {
//             acum = acum + " - " + str;
//         }
//     }
//     return document.write(acum);
// }
// concatenar();
// 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo.Al salir con “cancelar”
// deberá indicarse la suma total de los números introducidos.
// function numeros() {
//     let acum = 0;
//     let num = 0;
//     while (num != null) {
//         num = prompt("Ingrese numero", "");
//         if (isNaN(num)) {
//             alert("No es un numero");
//         }
//         else {
//             acum = acum + Number(num);
//             alert(acum);
//         }
//     }
//     alert(`La suma es: ${acum}`);
// }
// numeros();
// 22. Realizar una página con un script que calcule el valor de la letra de un número de DNI(Documento Nacional de Identidad).
// El algoritmo para calcular la letra del dni es el siguiente:
// ● El número debe ser entre 0 y 99999999
// ● Debemos calcular el resto de la división entera entre el número y el número 23.
// ● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
// (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// ● Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// ● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
// let num = 0;
// let res = 0;
// let letra = "";
// while (num != null) {
//     num = prompt("Ingrese numero de DNI", "");
//     if (num > 0 && num <= 99999999) {
//         res = num % 23;
//         switch (res) {
//             case 0:
//                 letra = "T";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 1:
//                 letra = "R";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 2:
//                 letra = "W";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 3:
//                 letra = "A";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 4:
//                 letra = "G";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 5:
//                 letra = "M";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 6:
//                 letra = "Y";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 7:
//                 letra = "F";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 8:
//                 letra = "P";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 9:
//                 letra = "D";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 10:
//                 letra = "X";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 11:
//                 letra = "B";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 12:
//                 letra = "N";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 13:
//                 letra = "J";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 14:
//                 letra = "Z";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 15:
//                 letra = "S";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 16:
//                 letra = "Q";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 17:
//                 letra = "V";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 18:
//                 letra = "H";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 19:
//                 letra = "L";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 20:
//                 letra = "C";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 21:
//                 letra = "K";
//                 alert(`Letra: ${letra}`);
//                 break;
//             case 22:
//                 letra = "E";
//                 alert(`Letra: ${letra}`);
//                 break;

//         }
//     }
//     else {
//         alert("Pruebe otra vez.")
//     }
// }
// 23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// for (i = 1; i <= 6; i++){
//     for (let j = 1; j <= i; j++){
//         document.write(i);
//     }
//     document.write("<br>");
// }
// 24. Haz un script que escriba una pirámide inversa de los números del 1 al
// número que indique el usuario de la siguiente forma: (suponiendo que indica 6).
// 666666
// 55555
// 4444
// 333
// 22
// 1
// num = prompt("Ingrese un numero: ", "");
// for (i = num; i >= 1; i--) {
//     for (j = i; j >= 1; j--) {
//         document.write(i);
//     }
//     document.write("<br>");
// }
// 25. Un script que escriba los números del 1 al 500, que indique cuáles son
// múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.Por ejemplo:
// 1
// 2
// 3
// 4(Múltiplo de 4)
// 5
// ————————————————————
// 6
// 7
// 8(Múltiplo de 4)
// 9(Múltiplo de 9)
// 10

// for (let i = 1; i <= 500; ++i) {
//     if (i % 5 == 0) {
//         document.write("<hr>");
//     }
//     if ((i % 4 == 0) && (i % 9 == 0)) {
//         document.write(`${i} es multiplo de 4 y 9`);
//         document.write("<br>");
//     }
//     else if (i % 4 == 0) {
//         document.write(`${i} es multiplo de 4`);
//         document.write("<br>");
//     }
//     else if (i % 9 == 0) {
//         document.write(`${i} es multiplo de 9`);
//         document.write("<br>");
//     }
//     else {
//         document.write(i);
//         document.write("<br>");
//     }
// }
