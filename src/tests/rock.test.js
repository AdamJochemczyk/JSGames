import {
  playerScoreElem,
  enemyScoreElem,
  enemyImg,
  enemyText,
  rock,
  paper,
  scissors,
  enemyChoose,
  playerScore,
  enemyScore,
  playRockButton,
  getScoreElements,
  getEnemyItems,
  getImgItems,
  getPlayRockButton,
  whoWins,
  setChoose,
} from "../scripts/rock";

describe("Tests for rock, scissors and paper game", () => {
  document.body.innerHTML = `
    <div class="rock__points">
        <p class="yourScore">Your score: </p>
        <p class="enemyScore">Enemy score: </p>
    </div>
    <div class="choose">
        <img src="./img/scissors.png" alt="scissors" class="choose__img" id="enemy__img">
        <p class="choose__txt" id="enemy__txt"></p>
    </div>
    <div class="choose">
        <img src="./img/paper.png" alt="paper" class="choose__img">
        <p class="choose__txt">Paper</p>
    </div>
    <div class="choose">
        <img src="./img/rock.png" alt="rock" class="choose__img">
        <p class="choose__txt">Rock</p>
    </div>
    <div class="choose">
        <img src="./img/scissors.png" alt="scissors" class="choose__img">
        <p class="choose__txt">Scissors</p>
    </div>
    <button class="startRockGame">Play</button>
    `;

  test("Score element exists", () => {
      getScoreElements();
      expect(playerScoreElem.classList.contains("yourScore")).toBe(true);
      expect(enemyScoreElem.classList.contains("enemyScore")).toBe(true);
  });

  test("Enemy choose exists", () => {
      getEnemyItems();
      expect(enemyImg.id==='enemy__img').toBe(true)
      expect(enemyText.id === "enemy__txt").toBe(true);
  });

  test("Player choose items exists", () => {
    getImgItems()
    expect(rock.alt==="rock").toBe(true)
    expect(paper.alt === "paper").toBe(true);
    expect(scissors.alt === "scissors").toBe(true);
  });

  test("Play button exists",()=>{
    getPlayRockButton();
    expect(playRockButton!=null).toBe(true)
  })

  test("Right return who win, when player choose paper",()=>{
    setChoose("paper");
    whoWins()
    if(enemyChoose==="rock"){
        expect(playerScore===1).toBe(true)
    }else if(enemyChoose==="scissors"){
        expect(enemyScore===1).toBe(true)
    }else{
        expect(playerScore===0 && enemyScore===0).toBe(true)
    }
  })
});
