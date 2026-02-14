let canPlayWin = false;

function goHome() {
  alert("Bear clicked 🐻");
  showLevel(null);
}

document.addEventListener("DOMContentLoaded", () => {
  showLevel(null);
});

function showLevel(id) {
  // Hide all levels
  document.querySelectorAll('.level').forEach(level => {
    level.style.display = 'none';
  });

  // If no id → show HOME
  if (id === null) {
    document.getElementById("home").style.display = "flex";
  } else {
    document.getElementById("home").style.display = "none";
    document.getElementById(id).style.display = "block";
  }
}

function goHome() {
  showLevel(null);
}

let soundOn = true;

function toggleSound() {
  soundOn = !soundOn;
}

const messages = [
  "Foundation laid 💗",
  "Trust brick placed 🧱",
  "Support installed 💪",
  "Laughter added 😆",
  "Cooking Together included 🌙",
  "Inside jokes secured 🤫",
  "Future plans loading 🏡",
  "Love locked in ❤️"
];

let brickCount = 0;
const maxBricks = messages.length;

function addBrick() {
  playClick();

  if (brickCount >= maxBricks) {
    document.getElementById("message").innerText =
      "This build is complete. Still under construction for life 💕";
    
      document.getElementById("usPic").style.display = "block";
      return;
  }

  const brick = document.createElement("div");
  brick.className = "brick";
  document.getElementById("building").appendChild(brick);

  document.getElementById("message").innerText =
    messages[brickCount];

  brickCount++;
}

function playWin() {
  if (!canPlayWin) return;

  const win = document.getElementById("winSound");
  if (win) {
    win.currentTime = 0;
    win.play();
  }
}

let correctCount = 0;
let chancesLeft = 3;
let gameOver = false;

function pickHeart(button) {
  playClick();

  if (gameOver || button.disabled) return;

  const isCorrect = button.dataset.correct === "true";

  button.disabled = true;

  if (isCorrect) {
    correctCount++;
    button.classList.add("correct");
  } else {
    chancesLeft--;
    button.classList.add("wrong");
  }

  document.getElementById("chancesText").innerText =
    `You have ${chancesLeft} chances`;

  if (correctCount === 2) {
  canPlayWin = true;
  document.getElementById("pixelResult").innerText =
    "You win 💖 You decoded our love.";
  playWin();
  endPixelGame();
}

  if (chancesLeft === 0) {
    document.getElementById("pixelResult").innerText =
      "Game over 💔 But I still love you.";
    endPixelGame();
  }
}

function toggleHint() {
  playClick();

  const hint = document.getElementById("pixelHint");
  const btn = document.querySelector(".hint-btn");

  if (hint.style.display === "none" || hint.style.display === "") {
    hint.style.display = "block";
    btn.innerText = "Hide hint";
  } else {
    hint.style.display = "none";
    btn.innerText = "Need a hint?";
  }
}

function endPixelGame() {
  gameOver = true;
  document.querySelectorAll(".choice-heart").forEach(btn => {
    btn.disabled = true;
  });
}

let reviewChances = 3;
let correctStars = 0;
let starGameOver = false;

function pickStar(button) {
  playClick();

  if (starGameOver || button.disabled) return;

  const isCorrect = button.dataset.correct === "true";
  button.disabled = true;

  if (isCorrect) {
  correctStars++;
  button.classList.add("correct");
} else {
  reviewChances--;
  button.classList.add("wrong");

  document.getElementById("reviewChances").innerText =
    `You have ${reviewChances} chances`;
}

 if (correctStars === 2) {
  canPlayWin = true;
  document.getElementById("starResult").innerText =
    "3 binary numbers and 5 stars means 8 → ∞ , which means our love is infinite in space and time I Love You💖";
  document.getElementById("infinity").style.display = "block";
  playWin();
  starGameOver = true;
}

  if (reviewChances === 0) {
  document.getElementById("reviewLoveMessage").style.display = "block";
  starGameOver = true;
  }
}

function toggleReviewHint() {
  playClick();

  const hint = document.getElementById("reviewHint");
  hint.style.display =
    hint.style.display === "none" || hint.style.display === ""
      ? "block"
      : "none";
}

function reveal() {
  playClick();
  spawnHearts();
  canPlayWin = true;
  playWin();

  document.getElementById("finalMessage").innerText =
    "I am so happy to have you as my Valentine mi Oso you are one in a million and i love you so so much Thank you for everything you do for me my love. Always evereyday i am reminded of why i love you and how amazing our relationship is i wouldn't want to do life with no one else that isn't you, I Love You❤️";
}

function spawnHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

function playClick() {
  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

function resetAll() {
  canPlayWin = false;

  /* 🧱 Build Our Love */
  brickCount = 0;

  const building = document.getElementById("building");
  if (building) {
    building.innerHTML = `
      <img src="us.jpg" id="usPic" class="us-pic" style="display:none;">
    `;
  }

  const buildMessage = document.getElementById("message");
  if (buildMessage) buildMessage.innerText = "";

  /* 🎮 Pixel Love Quest */
  correctCount = 0;
  chancesLeft = 3;
  gameOver = false;

  const pixelResult = document.getElementById("pixelResult");
  if (pixelResult) pixelResult.innerText = "";

  const chancesText = document.getElementById("chancesText");
  if (chancesText) chancesText.innerText = "You have 3 chances";

  const pixelHint = document.getElementById("pixelHint");
  if (pixelHint) pixelHint.style.display = "none";

  document.querySelectorAll(".choice-heart").forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });

  /* ⭐ Architect Review */
  correctStars = 0;
  starGameOver = false;
  reviewChances = 3;
  
  const reviewChancesText = document.getElementById("reviewChances");
  if (reviewChancesText) reviewChancesText.innerText = "You have 3 chances";

  const reviewLove = document.getElementById("reviewLoveMessage");
 if (reviewLove) reviewLove.style.display = "none";

  const starResult = document.getElementById("starResult");
  if (starResult) starResult.innerText = "";

  const infinity = document.getElementById("infinity");
  if (infinity) infinity.style.display = "none";

  document.querySelectorAll(".choice-star").forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });

  /* 💌 Valentine Reveal */
  const finalMessage = document.getElementById("finalMessage");
  if (finalMessage) finalMessage.innerText = "";

  /* 🏠 Go Home */
  showLevel(null);
}

