import {
  board,
  cells,
  redsPieces,
  blacksPieces,
  redTurnText,
  blackTurnText,
  turn,
  redScore,
  blackScore,
  playerPieces,
  selectedPiece,
  initCheckersGame,
  getPlayerPieces,
} from "../scripts/checkers";

describe('Tests for checkers', () => {
    document.body.innerHTML = `
    <div class="checkers">
      <a href="#"><i class="fas fa-arrow-circle-up"></i></a>
      <h2 class="rock__title">
        checkers
      </h2>
      <div class="checkers__container">
        <table class="checkers__board">
            <tr>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="0"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="1"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="2"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="3"></p></td>
            </tr>
            <tr>
                <td><p class="red-piece" id="4"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="5"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="6"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="7"></p></td>
                <td class="noPieceHere"></td>
            </tr>
            <tr>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="8"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="9"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="10"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="red-piece" id="11"></p></td>
            </tr>
            <tr>
                <td></td>
                <td class="noPieceHere"></td>
                <td></td>
                <td class="noPieceHere"></td>
                <td></td>
                <td class="noPieceHere"></td>
                <td></td>
                <td class="noPieceHere"></td>
            </tr>
            <tr>
                <td class="noPieceHere"></td>
                <td></td>
                <td class="noPieceHere"></td>
                <td></td>
                <td class="noPieceHere"></td>
                <td></td>
                <td class="noPieceHere"></td>
                <td></td>
            </tr>
            <tr>
                <td><p class="black-piece" id="12"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="13"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="14"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="15"></p></td>
                <td class="noPieceHere"></td>
            </tr>
            <tr>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="16"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="17"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="18"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="19"></p></td>
            </tr>
            <tr>
                <td><p class="black-piece" id="20"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="21"></p></td>
                <td class="noPieceHere">
                <td><p class="black-piece" id="22"></p></td>
                <td class="noPieceHere"></td>
                <td><p class="black-piece" id="23"></p></td>
                <td class="noPieceHere"></td>
            </tr>
        </table>
        <div>
            <span class="red-turn-text">
                Reds turn
            </span>
            <span class="black-turn-text">
                Blacks turn
            </span>
        </div>
      </div>
    </div>
    `;

    test("Program have right data after init game",()=>{
        initCheckersGame()
        expect(board).toStrictEqual([
          null,
          0,
          null,
          1,
          null,
          2,
          null,
          3,
          4,
          null,
          5,
          null,
          6,
          null,
          7,
          null,
          null,
          8,
          null,
          9,
          null,
          10,
          null,
          11,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          12,
          null,
          13,
          null,
          14,
          null,
          15,
          null,
          null,
          16,
          null,
          17,
          null,
          18,
          null,
          19,
          20,
          null,
          21,
          null,
          22,
          null,
          23,
          null,
        ]);
        expect(cells.length).toBe(64)
        expect(redsPieces.length && blacksPieces.length).toBe(12);
        expect(turn).toBeFalsy()
        expect(redScore && blackScore).toBe(12)
        expect(selectedPiece).toEqual({
          pieceId: -1,
          indexOfBoardPiece: -1,
          isKing: false,
          seventhSpace: false,
          ninthSpace: false,
          fourteenthSpace: false,
          eighteenthSpace: false,
          minusSeventhSpace: false,
          minusNinthSpace: false,
          minusFourteenthSpace: false,
          minusEighteenthSpace: false,
        });
    })
})
