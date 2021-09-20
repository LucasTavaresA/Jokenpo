function rodadaBot() {
  let escolha = Math.floor(Math.random() * 3) + 1; 
  switch(escolha){
    case 1:
      escolha = "pedra";
    break;
    case 2:
      escolha = "papel";
    break;
    case 3:
      escolha = "tesoura";
    break;
  }
  return escolha;
}

function jogar() {
  let jogada = prompt('').toString().toLowerCase();
  let bot = rodadaBot();
  if(jogada == "pedra"){
    if (jogada == bot) {
      alert("Empate!");
    }
    else {
      if (jogada == "pedra" && bot == "papel"){
        alert("O Computador Escolheu Papel, Você Perdeu!");
      } else {
        alert("O Computador Escolheu Tesoura, Você Ganhou!");
      }
    }
  }
  else if(jogada == "papel"){
    if (jogada == bot) {
      alert("Empate!");
    }
    else {
      if (jogada == "papel" && bot == "tesoura"){
        alert("O Computador Escolheu Tesoura, Você Perdeu!");
      } else {
        alert("O Computador Escolheu Pedra, Você Ganhou!");
      }
    }
  }
  else if(jogada == "tesoura"){
    if (jogada == bot) {
      alert("Empate!");
    }
    else {
      if (jogada == "tesoura" && bot == "pedra"){
        alert("O Computador Escolheu Pedra, Você Perdeu!");
      } else {
        alert("O Computador Escolheu Papel, Você Ganhou!");
      }
    }
  }
  else {
    alert("Comando invalido! Tente novamente");
  }
}
