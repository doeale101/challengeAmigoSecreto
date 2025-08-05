// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de nombres de amigos
const amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue añadido.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos 1 amigo para hacer el sorteo.");
    return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  const li = document.createElement("li");
  li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}

// Algoritmo para sortear sin repetirse a sí mismos
function asignarAmigosSecretos(lista) {
  let resultado;
  let intentos = 0;
  do {
    resultado = [...lista].sort(() => Math.random() - 0.5);
    intentos++;
  } while (!esValido(lista, resultado) && intentos < 100);

  if (intentos === 100) {
    alert("No se pudo hacer un sorteo válido. Intenta de nuevo.");
    return lista;
  }

  return resultado;
}

function esValido(original, sorteado) {
  return original.every((nombre, index) => nombre !== sorteado[index]);
}
