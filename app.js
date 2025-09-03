// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ArraylistaAmigos = [];

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
    actualizarListaAmigos();
  

}


function addListaAmigos(agreAmigo)
{
    ArraylistaAmigos.push(agreAmigo);
    document.getElementById("amigo").value ="";
}

function actualizarListaAmigos()
{
let lista = document.getElementById("listaAmigos")
lista.innerHTML = "";

for (let i = 0; i < ArraylistaAmigos.length; i++) {
    let nombreLista = ArraylistaAmigos[i];
    let li = document.createElement("li");
    li.textContent = nombreLista;
    lista.appendChild(li);    
}
}