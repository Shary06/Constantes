//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
//otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día 
//ingresado no es ninguno de esos, imprimir otro mensaje.

var dia = prompt("Ingrese un dia de la semana:");
if (dia === "lunes"){
    alert("Es lunes, buen inicio de semana");
}else if(dia === "viernes"){
    alert("Por fin es viernes!!");
}else if(dia === "sabado" || dia === "domingo"){
    alert("Buen fin de semana");
}else{
    alert("Que buen dia");
}