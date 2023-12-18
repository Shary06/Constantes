//Crear un programa que determine si un número introducido en un Prompt es par o no, 
//la respuesta será mostrada en un Alert.
var num = prompt("Introducir un número: ");
var num2 = num % 2;
if(num2 != 0) alert( num + " Es un numero impar")
else alert( num + " Es un numero par")