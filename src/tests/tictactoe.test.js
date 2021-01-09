import {
  playWithPlayerButton,
  playWithComputerButton,
  getPlayTicTacToeButtons,
  fields,
  fulledFields,
  checkTicTacToeWinner,
  getTicTacToeBoard,
  ticTacToeWinner,
  writeTurn,
  computerMove,
  initGameWithPlayer,
  fullField,
} from "../scripts/tictactoe";

describe("Tests for ticTacToe games", () => {
  document.body.innerHTML = `
    <p class="tictactoe__winner"></p>
        <div class="field" data-index="0"></div>
        <div class="field" data-index="1"></div>
        <div class="field" data-index="2"></div>
        <div class="field" data-index="3"></div>
        <div class="field" data-index="4"></div>
        <div class="field" data-index="5"></div>
        <div class="field" data-index="6"></div>
        <div class="field" data-index="7"></div>
        <div class="field" data-index="8"></div>
        <button class="tictactoe__btn" id="tictactoewithplayer">Player vs player</button
        ><button class="tictactoe__btn" id="tictactoewithcomputer">Player vs computer</button>
    `;

  test("Buttons to start playing game exists", () => {
    getPlayTicTacToeButtons();
    expect(playWithComputerButton !== null).toBe(true);
    expect(playWithPlayerButton !== null).toBe(true);
  });

  test("Board have 9 squares", () => {
    getTicTacToeBoard();
    expect(fields.length === 9).toBe(true);
  });

  test("Draw sign after click on field", () => {
    initGameWithPlayer();
    fields[0].click();
    expect(fields[0].textContent !== null).toBe(true);
  });

  test("Script can draw on paragraph", () => {
    getTicTacToeBoard();
    writeTurn("test");
    expect(ticTacToeWinner.textContent).toBe("test");
  });

  test("Computer fill field", () => {
    getTicTacToeBoard();
    computerMove();
    let fulled = new Array();
    for (let i = 0; i < fulledFields.length; i++) {
      if (fulledFields[i] === 1) {
        fulled.push(1);
      }
    }
    expect(fulled.length === 2).toBe(true);
  });

  test("right check for fulledFields", () => {

    //for X
    for (let i = 0; i < 3; i++) {
      fullField(i, 0);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("X won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 3; i < 6; i++) {
      fullField(i, 0);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("X won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 6; i < 9; i++) {
      fullField(i, 0);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("X won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }

    for(let i=0;i<7;i+=3){
        fullField(i,0)
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("X won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 1; i < 8; i +=3) {
      fullField(i, 0);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("X won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 2; i < 9; i +=3) {
      fullField(i, 0);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("X won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }

    for(let i=0;i<9;i+=4){
        fullField(i, 0);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("X won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 2; i < 7; i +=2) {
      fullField(i, 0);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("X won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }

    //for O
    for (let i = 0; i < 3; i++) {
      fullField(i, 1);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("O won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 3; i < 6; i++) {
      fullField(i, 1);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("O won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 6; i < 9; i++) {
      fullField(i, 1);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("O won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }

    for (let i = 0; i < 7; i += 3) {
      fullField(i, 1);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("O won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 1; i < 8; i += 3) {
      fullField(i, 1);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("O won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 2; i < 9; i += 3) {
      fullField(i, 1);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("O won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }

    for (let i = 0; i < 9; i += 4) {
      fullField(i, 1);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("O won game!");
    for (let i = 0; i < fulledFields.length; i++) {
      fullField(i, undefined);
    }
    for (let i = 2; i < 7; i += 2) {
      fullField(i, 1);
    }
    checkTicTacToeWinner();
    expect(ticTacToeWinner.textContent).toBe("O won game!");
  });
});
