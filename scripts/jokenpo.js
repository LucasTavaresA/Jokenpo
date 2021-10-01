let computerWins = 0;
let playerWins = 0;

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
      document.getElementById("result").style.color = "Transparent";
      document.getElementById("play").innerHTML = "Empate!";
    }
    else {
      if (jogada == "pedra" && bot == "papel"){
        document.getElementById("play").innerHTML = "O Computador Escolheu Papel";
        document.getElementById("result").style.color = "Red";
        document.getElementById("result").innerHTML = "Você Perdeu!";
        computerWins++;
        document.getElementById("derrotas").innerHTML = computerWins + " Derrotas";
      } else {
        document.getElementById("play").innerHTML = "O Computador Escolheu Tesoura";
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Você Ganhou!";
        playerWins++;
        document.getElementById("vitorias").innerHTML = playerWins + " Vitórias";
      }
    }
  }
  else if(jogada == "papel"){
    if (jogada == bot) {
      document.getElementById("result").style.color = "Transparent"; 
      document.getElementById("play").innerHTML = "Empate!"; 
    }
    else {
      if (jogada == "papel" && bot == "tesoura"){ 
        document.getElementById("play").innerHTML = "O Computador Escolheu Tesoura";
        document.getElementById("result").style.color = "Red";
        document.getElementById("result").innerHTML = "Você Perdeu!";
        computerWins++;
        document.getElementById("derrotas").innerHTML = computerWins + " Derrotas";
      } else {  
        document.getElementById("play").innerHTML = "O Computador Escolheu Pedra";
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Você Ganhou!";
        playerWins++;
        document.getElementById("vitorias").innerHTML = playerWins + " Vitórias";
      }
    }
  }
  else if(jogada == "tesoura"){
    if (jogada == bot) {
      document.getElementById("result").style.color = "Transparent";
      document.getElementById("play").innerHTML = "Empate!";    
    }
    else {
      if (jogada == "tesoura" && bot == "pedra"){
        document.getElementById("play").innerHTML = "O Computador Escolheu Pedra";
        document.getElementById("result").style.color = "Red";
        document.getElementById("result").innerHTML = "Você Perdeu!";
        computerWins++;
        document.getElementById("derrotas").innerHTML = computerWins + " Derrotas";
      } else {
        document.getElementById("play").innerHTML = "O Computador Escolheu Papel";
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Você Ganhou!";
        playerWins++;
        document.getElementById("vitorias").innerHTML = playerWins + " Vitórias";
      }
    }
  }
  else {
    document.getElementById("result").style.color = "Transparent";
    document.getElementById("play").innerHTML = "Comando invalido! Tente novamente";
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
