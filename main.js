(() => {
  const luckyPhrases = [
    "A solidão é a sorte de todos os espíritos excepcionais.",
    "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.",
    "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
    "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
    "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.",
    "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.",
    "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.",
    "A perseverança é a mãe da boa sorte.",
    "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.",
    "Sorte é estar pronto quando a oportunidade vem.",
    "Quanto mais eu treino, mais sorte eu tenho.",
  ];

  const screen1 = document.querySelector("#screen1");
  const screen2 = document.querySelector("#screen2");
  const cookie = screen1.querySelector(".fortune-cookie");
  const luckyPrase = screen2.querySelector("p");
  const button = screen2.querySelector("button");

  cookie.addEventListener("click", handleOpenCookie);
  button.addEventListener("click", handleHideScreen);

  const handleRandomNumber = () => Math.round(Math.random() * 10);

  const handleRandomLuckyPhrase = () => luckyPhrases[handleRandomNumber()];

  function handleHideScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
  }

  function handleOpenCookie() {
    handleHideScreen();
    luckyPrase.innerText = handleRandomLuckyPhrase();
  }
})();
