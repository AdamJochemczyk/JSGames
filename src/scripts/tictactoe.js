let fields,
  playWithPlayerButton,
  playWithComputerButton,
  ticTacToeWinner,
  inTicTacToeGame = false,
  whoseTurn = true,
  fulledFields = [...new Array(9)].map(() => undefined),
  computer = false;

const getPlayTicTacToeButtons = () => {
  playWithPlayerButton = document.querySelector("#tictactoewithplayer");
  playWithComputerButton = document.querySelector("#tictactoewithcomputer");

  playWithComputerButton.addEventListener("click", () => {
    if (!inTicTacToeGame) {
      initGameWithComputer();
      disablePlayButtons();
      inTicTacToeGame = true;
    }
  });

  playWithPlayerButton.addEventListener("click", () => {
    if (!inTicTacToeGame) {
      initGameWithPlayer();
      disablePlayButtons();
      inTicTacToeGame = true;
    }
  });
};

const disablePlayButtons = () => {
  playWithComputerButton.disable = "true";
  playWithPlayerButton.disable = "true";
  playWithComputerButton.style.cursor = "inherit";
  playWithPlayerButton.style.cursor = "inherit";
};

const getTicTacToeBoard = () => {
  fields = Array.from(document.querySelectorAll(".field"));
  ticTacToeWinner = document.querySelector(".tictactoe__winner");
  fields.map((el) => {
    el.style.cursor = "pointer";
    el.addEventListener(
      "click",
      event => {
        drawSign(event);
        el.style.cursor = "default";
      },
      { once: true }
    );
  });
};

const drawSign = (event) => {
  if (whoseTurn) {
    event.target.textContent = "X";
    whoseTurn = false;
    writeTurn("Player 1: O");
    fullField(event.target.dataset.index, 0);
    if (computer) {
      computerMove();
    }
  } else {
    event.target.textContent = "O";
    whoseTurn = true;
    writeTurn("Player 2: X");
    fullField(event.target.dataset.index, 1);
  }
  checkTicTacToeWinner();
};

const writeTurn = txt => {
  ticTacToeWinner.textContent = txt;
};

const initGameWithPlayer = () => {
  getTicTacToeBoard();
};

const initGameWithComputer = () => {
  getTicTacToeBoard();
  computer = true;
};

const computerMove = () => {
  let index;
  do {
    index = Math.floor(Math.random() * 9);
  } while (fulledFields[index] !== undefined);
  document.querySelector('[data-index="' + index + '"').click();
  whoseTurn = true;
};

const fullField = (index, state) => {
  fulledFields[index] = state;
};

const checkTicTacToeWinner = () => {
  if (
    (fulledFields[0] === 0 && fulledFields[1] === 0 && fulledFields[2] === 0) ||
    (fulledFields[3] === 0 && fulledFields[4] === 0 && fulledFields[5] === 0) ||
    (fulledFields[6] === 0 && fulledFields[7] === 0 && fulledFields[8] === 0) ||
    (fulledFields[0] === 0 && fulledFields[3] === 0 && fulledFields[6] === 0) ||
    (fulledFields[1] === 0 && fulledFields[4] === 0 && fulledFields[7] === 0) ||
    (fulledFields[2] === 0 && fulledFields[5] === 0 && fulledFields[8] === 0) ||
    (fulledFields[0] === 0 && fulledFields[4] === 0 && fulledFields[8] === 0) ||
    (fulledFields[2] === 0 && fulledFields[4] === 0 && fulledFields[6] === 0)
  ) {
    writeTurn("X won game!");
    freezeBoardAfterWin();
  } else if (
    (fulledFields[0] === 1 && fulledFields[1] === 1 && fulledFields[2] === 1) ||
    (fulledFields[3] === 1 && fulledFields[4] === 1 && fulledFields[5] === 1) ||
    (fulledFields[6] === 1 && fulledFields[7] === 1 && fulledFields[8] === 1) ||
    (fulledFields[0] === 1 && fulledFields[3] === 1 && fulledFields[6] === 1) ||
    (fulledFields[1] === 1 && fulledFields[4] === 1 && fulledFields[7] === 1) ||
    (fulledFields[2] === 1 && fulledFields[5] === 1 && fulledFields[8] === 1) ||
    (fulledFields[0] === 1 && fulledFields[4] === 1 && fulledFields[8] === 1) ||
    (fulledFields[2] === 1 && fulledFields[4] === 1 && fulledFields[6] === 1)
  ) {
    writeTurn("O won game!");
    freezeBoardAfterWin();
  }
};

const freezeBoardAfterWin = () => {
  fields.map((el) => {
    el.parentNode.replaceChild(el.cloneNode(true), el);
  });
  fields = Array.from(document.querySelectorAll(".field"));
  fields.map((el) => {
    el.style.cursor = "default";
  });
};

export {
  fields,
  playWithPlayerButton,
  playWithComputerButton,
  ticTacToeWinner,
  inTicTacToeGame,
  whoseTurn,
  fulledFields,
  computer,
  getPlayTicTacToeButtons,
  getTicTacToeBoard,
  writeTurn,
  computerMove,
  initGameWithPlayer,
  checkTicTacToeWinner,
  fullField,
};
