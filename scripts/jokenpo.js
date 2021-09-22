function rodadaBot() {
  let escolha = Math.floor(Math.random() * 3) + 1; 
  switch(escolha){
    case 1:
      return "pedra";
    case 2:
      return "papel";
    case 3:
      return "tesoura";
  }
}

function partida(bot, jogada) {
  if(jogada == "pedra"){
    if (jogada == bot) {
      document.getElementById("result").innerHTML = "Empate!";
    }
    else {
      if (jogada == "pedra" && bot == "papel"){
        document.getElementById("result").innerHTML = "O Computador Escolheu Papel, Você Perdeu!";
      } else {
        document.getElementById("result").innerHTML = "O Computador Escolheu Tesoura, Você Ganhou!";
      }
    }
  }
  else if(jogada == "papel"){
    if (jogada == bot) {
      document.getElementById("result").innerHTML = "Empate!";  
    }
    else {
      if (jogada == "papel" && bot == "tesoura"){ 
        document.getElementById("result").innerHTML = "O Computador Escolheu Tesoura, Você Perdeu!";
      } else {  
        document.getElementById("result").innerHTML = "O Computador Escolheu Pedra, Você Ganhou!";
      }
    }
  }
  else if(jogada == "tesoura"){
    if (jogada == bot) {
      document.getElementById("result").innerHTML = "Empate!";    
    }
    else {
      if (jogada == "tesoura" && bot == "pedra"){
        document.getElementById("result").innerHTML = "O Computador Escolheu Pedra, Você Perdeu!";
      } else {
        document.getElementById("result").innerHTML = "O Computador Escolheu Papel, Você Ganhou!";
      }
    }
  }
  else {
    document.getElementById("result").innerHTML = "Comando invalido! Tente novamente";
  }
}

function pedra() {
  let bot = rodadaBot();
  let jogada = "pedra";
  partida(bot, jogada);
}
function papel() {
  let bot = rodadaBot();
  let jogada = "papel";
  partida(bot, jogada);
}
function tesoura() {
  let bot = rodadaBot();
  let jogada = "tesoura";
  partida(bot, jogada);
}
