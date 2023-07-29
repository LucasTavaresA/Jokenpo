"use strict";
let BotWins = 0;
let PlayerWins = 0;
const PossibleGames = {
    "pedra": {
        "pedra": null,
        "papel": false,
        "tesoura": true,
    },
    "papel": {
        "papel": null,
        "pedra": true,
        "tesoura": false,
    },
    "tesoura": {
        "tesoura": null,
        "pedra": false,
        "papel": true,
    },
};
const PossibleOptions = Object.keys(PossibleGames);
function RandomPlay() {
    return PossibleOptions[Math.floor(Math.random() * PossibleOptions.length)];
}
function PlayTurn(playerPick) {
    const botPick = RandomPlay();
    const gameState = PossibleGames[playerPick][botPick];
    if (gameState == null) {
        document.getElementById("result").style.color = "Transparent";
        document.getElementById("play").innerText = "Empate!";
    }
    else if (gameState == true) {
        document.getElementById("play").innerText = `O Computador Escolheu ${botPick}`;
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerText = "Voce Ganhou!";
        PlayerWins++;
        document.getElementById("vitorias").innerText = `${PlayerWins} Vitórias`;
    }
    else if (gameState == false) {
        document.getElementById("play").innerText = `O Computador Escolheu ${botPick}`;
        document.getElementById("result").style.color = "Red";
        document.getElementById("result").innerText = "Voce Perdeu!";
        BotWins++;
        document.getElementById("derrotas").innerText = `${BotWins} Derrotas`;
    }
}
