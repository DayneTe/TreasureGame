let treasureNum = Math.round(Math.random() * 99);
let attempts = 5;
let hints = [];

function StartFunc() {
  hints = [];
  treasureNum = Math.round(Math.random() * 99);
  attempts = 5;
  numHint1.textContent = "";
  answerBox.textContent = "Hmm...";
  numFinal.textContent = `Random Number is ${treasureNum}.  Attempts are ${attempts}.`;

  createHints();
}

function createHints() {
  if (treasureNum < 10) {
    TNum = treasureNum.toString();
    TNum = TNum.padStart(2, "0");
  } else {
    TNum = treasureNum.toString();
  }

  tNumFirstC = TNum[0];
  tNumSecondC = TNum[1];
  tNumFirstN = parseInt(tNumFirstC);
  tNumSecondN = parseInt(tNumSecondC);
  sum = tNumFirstN + tNumSecondN;

  ran = Math.round(Math.random() * 1);
  if (ran == 1) {
    hints.push(`1st Char: ${tNumFirstC}\n`);
  } else {
    hints.push(`2nd Char: ${tNumSecondC}\n`);
  }

  if (tNumFirstN % 2 == 0) {
    hints.push("First Number is Even\n");
  } else {
    hints.push("First Number is Odd\n");
  }

  if (tNumSecondN % 2 == 0) {
    hints.push("Second Number is Even\n");
  } else {
    hints.push("Second Number is Odd\n");
  }

  hints.push(`The sum of both numbers is ${sum}\n`);
}

function checkAnswer() {
  if (attempts <= 0) {
    return;
  } else {
    input = document.getElementById("pInput").value;
    if (input == treasureNum) {
      answerBox.textContent = "Casket Unlocked";
    } else {
      attempts -= 1;
      answerBox.textContent = `Wrong.\nAttempts remaining: ${attempts}`;
      if (attempts >= 1) {
        ran = Math.max(0, Math.round(Math.random() * hints.length - 1));
        numHint1.textContent += hints[ran];
        hints.splice(ran, 1);
      }
      numFinal.textContent = `Random Number is ${treasureNum}.  Attempts are ${attempts}.`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  StartFunc();
});
