//Solicitar al usuario que ingrese tres números y
//mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

var num1 = prompt("Escribe el primer número: ");
var num2 = prompt("Escribe el segundo número: ");
var num3 = prompt("Escribe el tercer número: ");


if(num1 > num2 && num1 > num3) document.write( num1 + " Es el número mayor ");
else if(num2 > num1 && num2 > num3) document.write( num2 + " Es el número mayor ");
else if(num3 > num1 && num3 > num2) document.write( num3 + " Es el número mayor ");
else if(num1 == num2 || num1 == num3) alert("Hay dos numeros iguales");
else if(num2 == num3) alert("Hay dos numeros iguales");

