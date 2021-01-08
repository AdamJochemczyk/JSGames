let playerScoreElem,
  enemyScoreElem,
  enemyImg,
  enemyText,
  rock,
  paper,
  scissors,
  playerChoose,
  enemyChoose,
  playerScore = 0,
  enemyScore = 0,
  playRockButton,
  randomEnemyImageHandle;

const getScoreElements = () => {
  playerScoreElem = document.querySelector(".yourScore");
  enemyScoreElem = document.querySelector(".enemyScore");
};

const getEnemyItems = () => {
  enemyImg = document.querySelector("#enemy__img");
  enemyText = document.querySelector("#enemy__txt");
};

const getImgItems = () => {
  let allImages = Array.from(document.querySelectorAll(".choose__img"));
  paper = allImages[1];
  rock = allImages[2];
  scissors = allImages[3];
};

const randomEnemyImage = ()=>{
  const images = ["./img/paper.png", "./img/rock.png", "./img/scissors.png"];
  let imgIndex = 0;
  enemyText.innerHTML='';
  randomEnemyImageHandle=setInterval(() => {
    enemyImg.src = images[imgIndex % 3];
    imgIndex++;
  }, 300);
}

const initRockGame = () => {
  getScoreElements();
  getEnemyItems();
  getImgItems();

  paper.addEventListener("click", () => {
    setChoose("paper");
    paper.style.opacity=1;
    setTimeout(() => {
        paper.style.opacity = .7;
    }, 800);
  });

  rock.addEventListener("click", () => {
    setChoose("rock");
    rock.style.opacity = 1;
    setTimeout(() => {
      rock.style.opacity = 0.7;
    }, 800);
  });

  scissors.addEventListener("click", () => {
    setChoose("scissors");
    scissors.style.opacity = 1;
    setTimeout(() => {
      scissors.style.opacity = 0.7;
    }, 800);
  });

  randomEnemyImage();
};

const whoWins = () => {
  switch (playerChoose) {
    case "paper":
      if (enemyChoose === "rock") {
        addPlayerPoint();
      } else if (enemyChoose === "scissors") {
        addEnemyPoint();
      }
      break;
    case "rock":
      if (enemyChoose === "scissors") {
        addPlayerPoint();
      } else if (enemyChoose === "paper") {
        addEnemyPoint();
      }
      break;
    case "scissors":
      if (enemyChoose === "rock") {
        addEnemyPoint();
      } else if (enemyChoose === "paper") {
        addPlayerPoint();
      }
      break;
  }
};

const addEnemyPoint = () => {
  enemyScore++;
  enemyScoreElem.textContent = `Enemy score: ${enemyScore}`;
};

const addPlayerPoint = () => {
  playerScore++;
  playerScoreElem.textContent = `Your score: ${playerScore}`;
};

const setChoose = choose => {
  clearInterval(randomEnemyImageHandle);
  playerChoose = choose;
  let index = Math.floor(Math.random() * 3);
  let possibleChoices = ["paper", "rock", "scissors"];
  enemyChoose = possibleChoices[index];
  enemyImg.src=`./img/${enemyChoose}.png`;
  enemyText.innerHTML=`${enemyChoose}`;
  whoWins();
  setTimeout(() => {
    randomEnemyImage();
  }, 1000);
};

const getPlayRockButton = () => {
  playRockButton = document.querySelector(".startRockGame");
  playRockButton.addEventListener("click", () => {
    initRockGame();
    playRockButton.classList.add("clickedButton");
    playRockButton.disabled=true;
    playRockButton.style.cursor="inherit";
  });
};

export {
  playerScoreElem,
  enemyScoreElem,
  enemyImg,
  enemyText,
  rock,
  paper,
  scissors,
  playerChoose,
  enemyChoose,
  playerScore,
  enemyScore,
  playRockButton,
  randomEnemyImageHandle,
  getScoreElements,
  getEnemyItems,
  getImgItems,
  getPlayRockButton,
  initRockGame,
  whoWins,
  setChoose,
};
