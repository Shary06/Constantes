// Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', 
//en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

var num = prompt("Número de cliente: ");
if (num == 1000) document.write("GANASTE UN PREMIO!!");
else document.write( " NUMERO: ", num + "       LO SENTIMOS, SIGUE PARTICIPANDO :( ")