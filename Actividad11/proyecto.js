//Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por 
//un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
//Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es 
//“autobús” 0.5.
//Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor
// la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
//total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

var vehiculo = prompt("Que vehiculo tiene? ");
if (vehiculo === "coche"){
    var dist = prompt("Distancia recorrida en km: ");
    const litros = dist / 30;
    if (litros >= 0 && litros <= 100){
        var total = (dist * 0.20) + 5;
    } else if(litros > 100){
        var total = (dist * 0.20) + 10;
    }
    alert("total a pagar: " + total);

}else if (vehiculo === "moto"){
    var dist = prompt("Distancia recorrida en km: ");
    const litros = dist / 30;
    if (litros >= 0 && litros <= 100){
        var total = (dist * 0.10) + 5;
    } else if(litros > 100){
        var total = (dist * 0.10) + 10;
    }

}else if (vehiculo === "autobus"){
    var dist = prompt("Distancia recorrida en km: ");
    const litros = dist / 30;
    if (litros >= 0 && litros <= 100){
        var total = (dist * 0.5) + 5;
    } else if(litros > 100){
        var total = (dist * 0.5) + 10;
    }
}