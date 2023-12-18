//Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
//Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

var num = prompt("Escribe un número");
res = num % 2;
if (res == 0) document.write( num + " Es divisible entre 2")
else document.write( num + " No es divisible entre 2")
