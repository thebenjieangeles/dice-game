function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let imageName1 = "dice" + randomNumber1 + ".png";
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", "./images/" + imageName1);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let imageName2 = "dice" + randomNumber2 + ".png";
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", "./images/" + imageName2);

  let heading = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins! 🚩";
  } else {
    heading.textContent = "Draw!";
  }
}

document.querySelector("h1").addEventListener("click", rollDice);
