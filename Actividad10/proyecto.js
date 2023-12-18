//Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
//El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
//Carrera $3999 MXN
//Master: $2999 MXN
//Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
//Beca Facebook: 20% de descuento.
//Beca Google: 15% de descuento.
//Beca Jesua: 50% de descuento.
//Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total 
//por el curso elegido, tomando en cuenta las siguientes duraciones:
//Course: 2 meses
//Carrera 6 meses
//Master: 12 meses

var nivel = prompt("Bienvenido a este portal de educacion en tecnologia. En que nivel esta interesado adquirir el programa educativo?");
if (nivel === "course"){
    var beca = prompt("¿Cuenta con alguna beca?");
        if (beca === "si"){
            var opcion = prompt("De donde es la beca?");
                if (opcion === "facebook"){
                    var desc = 4999 - (4999 * .20);
                    var total = desc * 2;
                    alert("El curso elegido tiene una duracion de 2 meses. Por lo tanto, usted pagaria un total de: $" + total);
                } else if(opcion ==="google"){
                    var desc = 4999 - (4999 * .15);
                    var total = desc * 2;
                    alert("El curso elegido tiene una duracion de 2 meses. Por lo tanto, usted pagaria un total de: $" + total);
                } else if(opcion ==="jesua"){
                    var desc = 4999 - (4999 * .50);
                    var total = desc * 2;
                    alert("El curso elegido tiene una duracion de 2 meses. Por lo tanto, usted pagaria un total de: $" + total);
                } 
        } else{ var curso = 4999 * 2; 
         alert("El curso tiene un costo de" + curso);}
}else if (nivel === "carrera"){
    var beca = prompt("¿Cuenta con alguna beca?");
        if (beca === "si"){
            var opcion = prompt("De donde es la beca?");
                if (opcion === "facebook"){
                    var desc = 3999 - (3999 * .20);
                    var total = desc * 6;
                    alert("El curso elegido tiene una duracion de 6 meses. Por lo tanto, usted pagaria un total de: $" + total);
                } else if(opcion ==="google"){
                    var desc = 3999 - (3999 * .15);
                    var total = desc * 6;
                    alert("El curso elegido tiene una duracion de 6 meses. Por lo tanto, usted pagaria un total de: $" + total);
                } else if(opcion ==="jesua"){
                    var desc = 3999 - (3999 * .50);
                    var total = desc * 6;
                    alert("El curso elegido tiene una duracion de 6 meses. Por lo tanto, usted pagaria un total de: $" + total);
                }
        }else{ var curso = 3999 * 6; 
         alert("El curso tiene un costo de " + curso);}
}else if (nivel === "master"){
    var beca = prompt("¿Cuenta con alguna beca?");
    if (beca === "si"){
        var opcion = prompt("De donde es la beca?");
            if (opcion === "facebook"){
                var desc = 2999 - (2999 * .20);
                var total = desc * 12;
                alert("El curso elegido tiene una duracion de 12 meses. Por lo tanto, usted pagaria un total de: $" + total);
            } else if(opcion ==="google"){
                var desc = 2999 - (2999 * .15);
                var total = desc * 12;
                alert("El curso elegido tiene una duracion de 12 meses. Por lo tanto, usted pagaria un total de: $" + total);
            } else if(opcion ==="jesua"){
                var desc = 2999 - (2999 * .50);
                var total = desc * 12;
                alert("El curso elegido tiene una duracion de 12 meses. Por lo tanto, usted pagaria un total de: $" + total);
            }
    } else{ var curso = 2999 * 12; 
        alert("El curso tiene un costo de " + curso);}

}