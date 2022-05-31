const personagens = document.querySelectorAll(".personagem");
let selecionado = "selecionado-jogador-1";
let trocarJogador = true;
let numJogador = "1";

let trocarTag = `${numJogador}P`;

function trocandoJogador() {
  if (trocarJogador === true) {
    selecionado = "selecionado-jogador-2";
    trocarJogador = false;
    numJogador = "2";
  } else {
    selecionado = "selecionado-jogador-1";
    trocarJogador = true;
    numJogador = "1";
  }
}

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    //mudando persoangens dos jogadores
    const idSelecionado = personagem.attributes.id.value;

    const personagemSelecionado = document.querySelector(`.${selecionado}`);
    personagemSelecionado.classList.remove(`${selecionado}`);

    personagem.classList.add(`${selecionado}`);

    const imagemJogador = document.getElementById(
      `personagem-jogador-${numJogador}`
    );
    imagemJogador.src = `./src/imagens/${idSelecionado}.png`;

    // mundando nomes
    const nomeJogador = document.getElementById(`nome-jogador-${numJogador}`);
    const nomeSelecionado = personagem.getAttribute("data-name");

    nomeJogador.innerHTML = nomeSelecionado;

    // mudamos tags
    const tag = personagem.getElementsByTagName("span");
    tag.innerHTML;
  });
  personagem.addEventListener("click", () => {
    trocandoJogador();
  });
});
