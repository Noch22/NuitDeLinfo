function rightMove(element, originalPosition, step = 10) {
  // Get the current position of the element
  let currentPosition = parseInt(element.style.left) || originalPosition;

  // Translate the element to the left
  currentPosition -= step;

  // Set the new position to move the element
  element.style.left = currentPosition + "px";
}


let gamePause = true;
let walking = false;
let poubelleValue = false;
const player = document.querySelector(".player");
const playerWalk = document.querySelector(".player.walk");
const poubelle = document.querySelector("#poubelle");
const cow = document.querySelector("#cow");
const gameBg = document.querySelector("#game-bg");
const message = document.querySelector("#message");
const scorespan = document.querySelector('#score');
const backMessage = document.querySelector('#back-message');
const quizzvache = document.querySelector(".quizzvache");
const quizz = document.querySelector(".quizz");
const quizz1 = document.querySelector(".quizz1");
const quizz2 = document.querySelector(".quizz2");
const mauvaiserep = document.querySelector(".mauvaiserep");
const mauvaiserepcow = document.querySelector(".mauvaiserepcow");
const fin = document.querySelector(".fin");
let score = 0;


// If keydown
document.addEventListener("keydown", function (event) {
  if (gamePause === true) {
    player.classList.remove("hide");
    playerWalk.classList.add("hide");
  } else {
    if (event.key === "ArrowRight" || event.key === "d") {
      backMessage.style.display = "none";
        if (poubelle.style.left === "450px") {
            gamePause = true;
            message.classList.add("messageShow");
            message.classList.remove("messageHide");
        }

        if (cow.style.left === "450px") {
          gamePause = true;
          message.classList.add("messageShow");
          message.classList.remove("messageHide");
          quizzvache.classList.add("displayquizz");
          quizz1.classList.remove("displayquizz");
          mauvaiserep.classList.remove("displayquizz");
      }

        // Player movement
        player.classList.add("hide");
        playerWalk.classList.remove("hide");

        // Background movement
        rightMove(gameBg, 0);
        rightMove(poubelle, 1000);
        rightMove(cow, 1500);
    } else if (event.key === "ArrowLeft" || event.key === "q") {
        // Player movement
        backMessage.style.display = "block";
    }

    if (event.key === "ArrowUp" || event.key === "z" || event.key === " ") {
      // Player movement
      player.src = "../img/walk.gif";

      let jump = true;
      if (jump === true) {
        player.style.top = "100px";
        player.style.transition = "top 0.5s ease-out";
        player.style.height = "100px";
        setTimeout(function () {
          player.style.top = "150px";
          player.style.transition = "top 0.5s ease-in";
          player.style.height = "100px";
        }, 500);

        jump = false;
      }
    }

    if (event.key === "p") {
      player.src = "../img/poubelle.png";
      poubelleValue = true;
      if (poubelleValue === true) {
        player.style.top = "100px";
        player.style.transition = "top 0.5s ease-out";
        player.style.height = "auto";
        setTimeout(function () {
          player.style.top = "184px";
          player.style.transition = "top 0.5s ease-in";
          player.style.height = "auto";
        }, 500);
        poubelleValue = false;
      }
    }
  }
});

document.addEventListener("keyup", function (event) {
  // Player movement
  player.classList.remove("hide");
  playerWalk.classList.add("hide");
});



function CrampteyMonster() {
    quizz.classList.remove("displayquizz");
    quizz1.classList.add("displayquizz");
    AddScore(50);
}

function Quizz1Error() {
    const quizz = document.querySelector(".quizz");
    mauvaiserep.classList.add("displayquizz");
    quizz.classList.remove("displayquizz");
    AddScore(-25);
}

function Quizz2Error() {
  mauvaiserepcow.classList.add("displayquizz");
  quizzvache.classList.remove("displayquizz");
  AddScore(-25);
}

function bonvache() {
  quizz2.classList.add("displayquizz");
  quizzvache.classList.remove("displayquizz");
  AddScore(50);
}

function AddScore(montant){
    scorespan.textContent = score+montant;
    score = score+montant;
}

function theme(theme) {
  gamePause = false;
  const accueil = document.querySelector("#accueil");
  accueil.classList.remove('themedisplay');
  accueil.classList.add('themeno');
  if(theme == "dystopique"){
    gameBg.classList.add('dystopie-mode')
  }else if (theme == "normal"){
    gameBg.classList.add('normal-mode')
  }else if (theme == "utopique"){
    gameBg.classList.add('utopie-mode')
  }
}


function continuer() {
  gamePause = false;
  message.classList.remove("messageShow");
  message.classList.add("messageHide");
  poubelle.classList.add("messageHide");
}

function continuervache() {
  gamePause = false;
  message.classList.remove("messageShow");
  message.classList.add("messageHide");
  cow.classList.add("messageHide");
  setTimeout(function () {
    gameBg.style.backgroundImage = "none";
    gameBg.style.backgroundColor = "black";
    gameBg.style.transition = "all 1s ease-in-out";
    player.style.opacity = 0;
    player.style.transition = "all 1s ease-in-out";
    gamePause = true;
    fin.classList.add("affiche");
  }, 1000);

}

// Fonction pour détecter le Konami code
function konamiCode(callback) {
  const code = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown', 
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];
  let index = 0;

  function keyHandler(event) {
    if (event.key === code[index]) {
      index++;
      if (index === code.length) {
        callback();
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  document.addEventListener('keydown', keyHandler);
}

// Exemple d'utilisation
konamiCode(function() {
  alert('Konami code executé ! Redirection vers Chaussettes Rythm...');
  window.location.href = 'rhytme.html'; // Redirection vers index.html
});