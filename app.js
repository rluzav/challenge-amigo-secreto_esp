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
        // Verificar si el nombre ya existe

    

    addListaAmigos(nombreAmigo);
    actualizarListaAmigos();  
    document.getElementById("resultado").innerText = "";
}
// Esta función agrega el nombre del amigo al array
function addListaAmigos(agreAmigo)
{
   // Convertir el nombre a minúsculas para comparar
    let nombreMinuscula = agreAmigo.toLowerCase();
    
    // Verificar si ya existe (comparando en minúsculas)
    let existe = ArraylistaAmigos.some(nombre => nombre.toLowerCase() === nombreMinuscula);
    
    if (existe) {
        alert("⚠️ NOMBRE DUPLICADO ⚠️\n\n" +
              "Este nombre ya está en la lista.\n" +
              "Por favor, ingresa un nombre diferente.");
        return;
    }
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

function sortearAmigo() {

    if (ArraylistaAmigos.length === 0) {
        alert(" ⚠️ LISTA VACÍA ⚠️ \n " +
            " No hay amigos para sortear. \n" +
            " Añade al menos un amigo para continuar.");
            return;
    }

    let indiceAleatorio = Math.floor(Math.random() * ArraylistaAmigos.length);
    let amigoSorteado = ArraylistaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerText = "🎉 El amigo sorteado es: " + amigoSorteado + " 🎉";
    document.getElementById("listaAmigos").innerHTML = "";
    ArraylistaAmigos = [];
}