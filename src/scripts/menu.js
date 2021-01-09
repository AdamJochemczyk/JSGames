let leftTriangle,
  rightTriangle,
  bottomTriangle,
  middleTriangle,
  tictactoe,
  checkers,
  rock,
  backRockButton,
  backTicButton;

function getMenuElements() {
  leftTriangle = document.querySelector(".leftTriangle");
  rightTriangle = document.querySelector(".rightTriangle");
  bottomTriangle = document.querySelector(".bottomTriangle");
  middleTriangle = document.querySelector(".middleTriangle");
}
function getGames() {
  tictactoe = document.querySelector(".tictactoe");
  checkers = document.querySelector(".checkers");
  rock = document.querySelector(".rock");
}
function addMenuActions() {

  middleTriangle.addEventListener("click", () => {
    leftTriangle.classList.toggle("v_show");
    rightTriangle.classList.toggle("v_show");
    bottomTriangle.classList.toggle("v_show");
  });

  backRockButton = document.querySelector(".fa-arrow-circle-right");
  backTicButton = document.querySelector(".fa-arrow-circle-left");

  rightTriangle.addEventListener("click", () => {
    tictactoe.classList.add("playTicTacToe");
    backTicButton.classList.add("v_show");
    backTicButton.style.visibility="visible";
  });

  backTicButton.addEventListener("click",()=>{
    backTicButton.classList.toggle("v_show");
    tictactoe.classList.remove("playTicTacToe")
    backTicButton.style.visibility = "hidden";
  })

  bottomTriangle.addEventListener("click", () => {
    checkers.classList.add("playCheckers");
  });

  leftTriangle.addEventListener("click", () => {
    rock.classList.add("playRock");
    backRockButton.classList.add("v_show");
  });

  backRockButton.addEventListener("click", () => {
    backRockButton.classList.toggle("v_show");
    rock.classList.remove("playRock");
  });
}

export {
  getMenuElements,
  getGames,
  addMenuActions,
  leftTriangle,
  rightTriangle,
  bottomTriangle,
  middleTriangle,
  tictactoe,
  checkers,
  rock,
};
