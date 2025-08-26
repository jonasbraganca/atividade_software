const mensagens = Array.from({ length: 10 }, (_, i) => ({
  texto: `Página número ${i + 1}`,
  cor: `hsl(${i * 36}, 70%, 70%)` // Cores variando para cada página
}));

let indice = 0;

const mensagemEl = document.getElementById("mensagem");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");

function atualizarMensagem() {
  const atual = mensagens[indice];
  mensagemEl.textContent = atual.texto;
  document.body.style.backgroundColor = atual.cor;

  // Desabilitar ou habilitar botões com base no índice atual
  botaoAnterior.disabled = indice === 0;
  botaoProximo.disabled = indice === mensagens.length - 1;
}

botaoProximo.addEventListener("click", () => {
  if (indice < mensagens.length - 1) {
    indice++;
    atualizarMensagem();
  }
});

botaoAnterior.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    atualizarMensagem();
  }
});

atualizarMensagem();
