// Définition des variables
var score = 0;
var error = 0;
var notesAContainer = document.querySelector(".notesA");
var notesZContainer = document.querySelector(".notesZ");
var notesEContainer = document.querySelector(".notesE");
var notesRContainer = document.querySelector(".notesR");
var isGameRunning = false;

// Configuration du jeu
var config = {
  noteSpeed: 2, // Vitesse de déplacement des notes
  noteFrequency: 2760, // Fréquence de création des notes (en millisecondes)
  fretboardWidth: 100,
  fretboardHeight: 50,
  windowHeight: 600,
  noteSize: 40,
};

// Tableaux pour stocker les timings d'apparition des notes dans chaque colonne
var timingsA = [460, 920, 1380, 1840, 2300, 2760];
var timingsZ = [120, 600, 1080, 1560, 2040, 2520];
var timingsE = [360, 840, 1320, 1800, 2280, 2760];
var timingsR = [920, 1840, 2760];

// Fonction pour créer une note dans la colonne spécifiée
function createNoteWithTiming(container, timing) {
  setTimeout(function() {
    var note = document.createElement("div");
    note.classList.add("note");
    note.style.left = "30%"; // Chaque note démarre à la position left de 0
    note.style.top = "0px"; // Chaque note démarre en dehors de l'écran
    container.appendChild(note);
  }, timing);
}

// Fonction de mise à jour du jeu
function updateGame() {
  var notesA = notesAContainer.querySelectorAll(".note");
  var notesZ = notesZContainer.querySelectorAll(".note");
  var notesE = notesEContainer.querySelectorAll(".note");
  var notesR = notesRContainer.querySelectorAll(".note");

  // Déplacement des notes A
  notesA.forEach(function (note) {
    var currentTop = parseFloat(note.style.top);
    note.style.top = currentTop + config.noteSpeed + "px";

    // Vérification de la collision avec la fretboard
    if (currentTop + config.noteSize >= config.fretboardHeight && currentTop <= config.fretboardHeight) {
      note.classList.add("active");
    }

    // Vérification si la note est sortie de l'écran
    if (currentTop > config.windowHeight - config.noteSize) {
      note.remove();
      increaseError();
    }
  });

  // Déplacement des notes Z
  notesZ.forEach(function (note) {
    var currentTop = parseFloat(note.style.top);
    note.style.top = currentTop + config.noteSpeed + "px";

    // Vérification de la collision avec la fretboard
    if (currentTop + config.noteSize >= config.fretboardHeight && currentTop <= config.fretboardHeight) {
      note.classList.add("active");
    }

    // Vérification si la note est sortie de l'écran
    if (currentTop > config.windowHeight - config.noteSize) {
      note.remove();
      increaseError();
    }
  });

  // Déplacement des notes E
  notesE.forEach(function (note) {
    var currentTop = parseFloat(note.style.top);
    note.style.top = currentTop + config.noteSpeed + "px";

    // Vérification de la collision avec la fretboard
    if (currentTop + config.noteSize >= config.fretboardHeight && currentTop <= config.fretboardHeight) {
      note.classList.add("active");
    }

    // Vérification si la note est sortie de l'écran
    if (currentTop > config.windowHeight - config.noteSize) {
      note.remove();
      increaseError();
    }
  });

  // Déplacement des notes R
  notesR.forEach(function (note) {
    var currentTop = parseFloat(note.style.top);
    note.style.top = currentTop + config.noteSpeed + "px";

    // Vérification de la collision avec la fretboard
    if (currentTop + config.noteSize >= config.fretboardHeight && currentTop <= config.fretboardHeight) {
      note.classList.add("active");
    }

    // Vérification si la note est sortie de l'écran
    if (currentTop > config.windowHeight - config.noteSize) {
      note.remove();
      increaseError();
    }
  });

  // Appel récursif pour mettre à jour le jeu à chaque frame
  if (isGameRunning) {
    requestAnimationFrame(updateGame);
  }
}

// Fonction pour jouer la musique
function playMusic() {
  var audio = new Audio("music/Chaussettes.mp3");
  audio.play();
}

// Fonction pour démarrer le jeu
function startGame() {
  isGameRunning = true;
  playMusic();
  var timer = 63;
  setInterval(function () {
    timer--;
    if (timer === 0) {
      isGameRunning = false;
      document.querySelector(".game-over").classList.add("visible");
      document.querySelector(".play-again").classList.add("visible");
      document.querySelector(".back-button").classList.add("visible");
    }
  }, 1000);
  
  timingsA.forEach(function(timing) {
    setInterval(function () {
      createNoteWithTiming(notesAContainer, timing); // Crée une note dans le conteneur A avec le timing spécifié
    }, config.noteFrequency);
  });
  
  timingsZ.forEach(function(timing) {
    setInterval(function () {
      createNoteWithTiming(notesZContainer, timing); // Crée une note dans le conteneur Z avec le timing spécifié
    }, config.noteFrequency);
  });
  
  timingsE.forEach(function(timing) {
    setInterval(function () {
      createNoteWithTiming(notesEContainer, timing); // Crée une note dans le conteneur E avec le timing spécifié
    }, config.noteFrequency);
  });
  
  timingsR.forEach(function(timing) {
    setInterval(function () {
      createNoteWithTiming(notesRContainer, timing); // Crée une note dans le conteneur R avec le timing spécifié
    }, config.noteFrequency);
  });
  
  updateGame();
}

// Fonction pour arrêter le jeu
function stopGame() {
  isGameRunning = false;
}

// Fonction pour augmenter le score
function increaseScore() {
  score += 50;
  document.querySelector(".score").textContent = score;
}

// Fonction pouraugmenter le score d'erreur
function increaseError() {
  error++;
  document.querySelector(".error").textContent = error;
}

// Déclaration de la variable pour les fretboard
var fretboardA = document.querySelector(".fretboardA");
var fretboardZ = document.querySelector(".fretboardZ");
var fretboardE = document.querySelector(".fretboardE");
var fretboardR = document.querySelector(".fretboardR");

// Événement de pression de la touche
document.addEventListener("keydown", function(event) {
  if (event.key === "a") {
    // Ajoute la classe "glow" à la fretboardA
    fretboardA.classList.add("glow");
  }
  if (event.key === "z") {
    // Ajoute la classe "glow" à la fretboardZ
    fretboardZ.classList.add("glow");
  }
  if (event.key === "e") {
    // Ajoute la classe "glow" à la fretboardE
    fretboardE.classList.add("glow");
  }
  if (event.key === "r") {
    // Ajoute la classe "glow" à la fretboardR
    fretboardR.classList.add("glow");
  }
});

// Événement de relâchement de la touche
document.addEventListener("keyup", function(event) {
  if (event.key === "a") {
    // Supprime la classe "glow" de la fretboardA
    fretboardA.classList.remove("glow");
  }
  if (event.key === "z") {
    // Supprime la classe "glow" de la fretboardZ
    fretboardZ.classList.remove("glow");
  }
  if (event.key === "e") {
    // Supprime la classe "glow" de la fretboardE
    fretboardE.classList.remove("glow");
  }
  if (event.key === "r") {
    // Supprime la classe "glow" de la fretboardR
    fretboardR.classList.remove("glow");
  }
});

// Gestion des actions du joueur
document.addEventListener("keydown", function (event) {
  var activeNoteA = notesAContainer.querySelector(".note.active");
  var activeNoteZ = notesZContainer.querySelector(".note.active");
  var activeNoteE = notesEContainer.querySelector(".note.active");
  var activeNoteR = notesRContainer.querySelector(".note.active");

  if (activeNoteA && event.key === "a") {

    var fretboardARect = document.querySelector(".fretboardA").getBoundingClientRect();
    var noteARect = activeNoteA.getBoundingClientRect();

    // Vérification de la position de la note par rapport à la fretboard
    if (noteARect.top + noteARect.height >= fretboardARect.top && noteARect.top <= fretboardARect.bottom) {
      activeNoteA.remove();
      increaseScore();
    }
  }
  if (activeNoteZ && event.key === "z") {
    var fretboardZRect = document.querySelector(".fretboardZ").getBoundingClientRect();
    var noteZRect = activeNoteZ.getBoundingClientRect();

    // Vérification de la position de la note par rapport à la fretboard
    if (noteZRect.top + noteZRect.height >= fretboardZRect.top && noteZRect.top <= fretboardZRect.bottom) {
      activeNoteZ.remove();
      increaseScore();
    }
  }
  if (activeNoteE && event.key === "e") {
    var fretboardERect = document.querySelector(".fretboardE").getBoundingClientRect();
    var noteERect = activeNoteE.getBoundingClientRect();

    // Vérification de la position de la note par rapport à la fretboard
    if (noteERect.top + noteERect.height >= fretboardERect.top && noteERect.top <= fretboardERect.bottom) {
      activeNoteE.remove();
      increaseScore();
    }
  }
  if (activeNoteR && event.key === "r") {
    var fretboardRRect = document.querySelector(".fretboardR").getBoundingClientRect();
    var noteRRect = activeNoteR.getBoundingClientRect();

    // Vérification de la position de la note par rapport à la fretboard
    if (noteRRect.top + noteRRect.height >= fretboardRRect.top && noteRRect.top <= fretboardRRect.bottom) {
      activeNoteR.remove();
      increaseScore();
    }
  }
});

// Démarrage du jeu au clic sur le bouton "Start"
var startButton = document.querySelector(".start-button");
var playAgainButton = document.querySelector(".play-again");
var backButton = document.querySelector(".back-button");
backButton.addEventListener("click", function() {
    window.location.href = "index.html";
  });
playAgainButton.addEventListener("click", function() {
  window.location.reload();
});
startButton.addEventListener("click", function() {
  document.querySelector(".start-button").classList.add("hidden");
  startGame();
});