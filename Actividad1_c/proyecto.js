
// Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, 
//responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    if(document.getElementById("pregunta").value === "si"){
        document.getElementById("respuesta").textContent = ' Ciertamente';
    }
    else {
        document.getElementById("respuesta").textContent = ' No te creo';
    }

    document.getElementById("respuesta").style.visibility = "visible";
})