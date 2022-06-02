const personagens = document.querySelectorAll(".personagem");
let selecionado = "selecionado-jogador-1";
let trocarJogador = true;
let numJogador = "1";

const tags = document.querySelectorAll(".tag");

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
    const nomeSelecionado = personagem.getAttribute("data-name");
    let imgPersonagem = `<img src="./src/imagens/${idSelecionado}.jpg" alt="${nomeSelecionado}"/>`;
    let tag = `<span class="tag">${numJogador}P</span>`;

    let personagemSelecionado = document.querySelector(`.${selecionado}`);
    const idSelecionadoAnterio = personagemSelecionado.attributes.id.value;
    const nomeSelecionadoAnterio =
      personagemSelecionado.getAttribute("data-name");
    let imgPersonagemAnterio = `<img src="./src/imagens/${idSelecionadoAnterio}.jpg" alt="${nomeSelecionadoAnterio}"/>`;

    personagemSelecionado.innerHTML = imgPersonagemAnterio;
    if (
      personagem.getAttribute("class") !=
      personagemSelecionado.getAttribute("data-name")
    ) {
      personagemSelecionado.classList.remove(`${selecionado}`);
      personagem.innerHTML = tag + imgPersonagem;
      personagem.classList.add(`${selecionado}`);
      personagemSelecionado.classList.remove(`${selecionado}`);
    }

    personagem.innerHTML = tag + imgPersonagem;
    personagem.classList.add(`${selecionado}`);

    const imagemJogador = document.getElementById(
      `personagem-jogador-${numJogador}`
    );
    imagemJogador.src = `./src/imagens/${idSelecionado}.png`;

    // mundando nomes
    const nomeJogador = document.getElementById(`nome-jogador-${numJogador}`);

    nomeJogador.innerHTML = nomeSelecionado;

    // mudamos tags
  });
  personagem.addEventListener("click", () => {
    trocandoJogador();
  });
});
