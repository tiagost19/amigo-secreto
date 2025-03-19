// Array para armazenar os nomes dos amigos
let amigos = [];

let sorteados = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "" || !isNaN(nome)) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(nome);
  atualizarLista();

  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
    lista.appendChild(li);
  });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia.");
    return;
  }

  if (amigos.length <= 2) {
    alert("Para realizar o sorteio, insira três amigos ou mais.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceSorteado];

  sorteados.push(amigoSorteado);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "O amigo secreto sorteado é: " + sorteados;

  dispararConfete();

  sorteados = [];

  atualizarLista();
}

function dispararConfete() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
