//Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente
// esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la 
//calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

var calif = prompt("Ingrese la calificación(entre 1 y 10): ");
if(calif < 6){
    alert("reprobado");
}else if(calif >= 6 && calif <= 8){
    alert("regular");
}else if(calif == 9){
    alert("bien");
}else if(calif == 10){
    alert("excelente");
}else alert("error");
