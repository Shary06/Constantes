//Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
//No considerar el caso en que ambos números son iguales.

var num1 = prompt("Ingrese el 1er. número: ");
var num2 = prompt("Ingrese el 2do. número: ");

if(num1 > num2) document.write(num2 + " Es menor que " + num1)
else document.write(num1 + " Es menor que " + num2)