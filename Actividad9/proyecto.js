//Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida 
//marca de comida rápida cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.El topping de oreo cuesta 10 MXN.El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN. En caso de no disponer del topping solicitado por el usuario, el 
//programa le indicará “no tenemos este topping, 
//lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

var helado = prompt("Buenas tardes, bienvenido. ¿Que desea comprar?");
if (helado === "helado"){
    var topping = prompt("Los topping disponibles son: Oreo, KitKat, Brownie. ¿Cual desea añadir?");
    if (topping === "oreo"){
        alert("Seria un total de $60 MXN");
    } else if (topping === "kitkat"){
        alert("Seria un total de $65 MXN");
    }else if (topping === "Brownie"){
        alert("Seria un total de $70 MXN");
    }else alert("No tenemos este topping, lo sentimos");
    alert("Seria un total de $50 MXN");
}
else alert("Por el momento solo tenemos disponible helado. Hasta pronto");