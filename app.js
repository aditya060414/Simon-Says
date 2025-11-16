// to track the user input and the game input
let gameSequence = [];
let userSequence = [];
let highScore = [];
// initial level
let level = 0;

let start = false;
// choose random color
let btns = ["purple", "blue", "red", "green"];

let h5 = document.querySelector("h5");
let h6 = document.querySelector("h6");
// start game

document.addEventListener("keypress", () => {
  if (start == false) {
    start = true;
    levelUp();
  }
});
function startFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 200);
}

function levelUp() {
  userSequence = [];
  level++;
  h5.innerText = `level ${level}`;
  h6.innerText = "";

  let randInx = Math.floor(Math.random() * 4);
  let randCol = btns[randInx];
  let randBtns = document.querySelector(`.${randCol}`);
  gameSequence.push(randCol);
  // console.log(gameSequence);
  startFlash(randBtns);
}

function checkAns(indx) {
  if (userSequence[indx] === gameSequence[indx]) {
    if (userSequence.length === gameSequence.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    highScore.push(level);
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "";
    }, 200);
    h5.innerHTML = `Game over! your score was <b>${level}</b> and your highest score is ${Math.max(
      ...highScore
    )}`;
    restart();
  }
}
function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSequence.push(userColor);
  // console.log(userSequence);
  checkAns(userSequence.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function restart() {
  start = false;
  // console.log();
  h6.innerText = "Press any key to restart!";
  userSequence = [];
  gameSequence = [];
  level = 0;
  // gameStart();
}
