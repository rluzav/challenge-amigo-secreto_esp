// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

// Esta función se ejecuta cuando el usuario hace clic en el botón "Añadir"
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    if (nombreAmigo === "") {
        alert("⚠️ CAMPO VACÍO ⚠️\n\n" +
      "Por favor, ingresa un nombre válido\n" +
      "para continuar con el sorteo.\n\n" +
      "💡 Tip: Asegúrate de escribir\n" +
      "   al menos un nombre completo");
        return;
       
       
    }    

    addListaAmigos(nombreAmigo);
   

}


function addListaAmigos(agreAmigo)
{
    listaAmigos.push(agreAmigo);
    document.getElementById("amigo").value ="";
}


