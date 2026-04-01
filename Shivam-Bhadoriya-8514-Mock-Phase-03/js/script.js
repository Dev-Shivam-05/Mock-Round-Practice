// Dynamic Variables going to used in the Project 
let targetNumber;
let userGuesses = [];
let attempts = 0;
let gameOver = false;

// constant Variables that stores Html Elements
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const feedbackMsg = document.getElementById("feedbackMessage");
const attemptDisplay = document.getElementById("attemptCount");
const historyDisplay = document.getElementById("guessHistory");
const gameArea = document.getElementById("gameArea");
const restartArea = document.getElementById("restartArea");
const restartBtn = document.getElementById("restartBtn");
const bestScoreDisplay = document.getElementById("bestScoreDisplay");

// Function To Initialize Game Therefore sets target Value , set user input , attempts to empty and gameOver To false
const initGame = () => {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  userGuesses = [];
  attempts = 0;
  gameOver = false;

  guessInput.value = "";
  feedbackMsg.innerText = "Start guessing!";
  attemptDisplay.innerText = "0";
  historyDisplay.innerText = "None";
  feedbackMsg.style.color = '#2d3436';
  gameArea.classList.remove("d-none");
  restartArea.classList.add("d-none");
  guessInput.disabled = false;
  submitBtn.disabled = false;
    

  guessInput.focus();
  console.log(`Debug: Target number is ${targetNumber}`);
};

// these function is help to handle guesses of user and validate user inputs for negative values , empty inputs , Invalid and large numbers input
const handleGuess = () => {
  if (gameOver) return;

  const inputValue = guessInput.value;
  const guess = Number(inputValue);

  if (inputValue === "" || isNaN(guess)) {
    displayFeedback("Please enter a valid number.", "error");
    return;
  }

  if (guess < 1 || guess > 100) {
    displayFeedback("Number must be between 1 and 100.", "error");
    return;
  }

  if (userGuesses.includes(guess)) {
    displayFeedback("You already guessed that number!", "warning");
    return;
  }

  attempts++;
  userGuesses.push(guess);
  updateStatsUI();

  if (guess === targetNumber) {
    handleWin();
  } else if (guess > targetNumber) {
    displayFeedback("Too High! Try again.", "warning");
  } else {
    displayFeedback("Too Low! Try again.", "warning");
  }

  guessInput.value = "";
  guessInput.focus();
};

// these function is used to display feedback depending on the users no. of guesses
const displayFeedback = (message, type) => {
    feedbackMsg.textContent = message;

    if (type === 'error') feedbackMsg.style.color = '#d63031';
    else if (type === 'success') feedbackMsg.style.color = '#00b894';
    else if (type === 'warning') feedbackMsg.style.color = '#e17055';
    else feedbackMsg.style.color = '#2d3436';
}

// These function is used to update the stats like no. of attempt , history of attempt in current round
const updateStatsUI = () => {
    attemptDisplay.textContent = attempts;
    historyDisplay.textContent = userGuesses.join(', ');
}

// these function is used to handle the wining scenario for user by displaying feedbacks and etc....
const handleWin = () => {
    gameOver = true;
    displayFeedback(`Correct! The Number Was ${targetNumber}.` , "success");
    guessInput.disabled = true;
    submitBtn.disabled = true;
    checkAndSaveBestScore(attempts);

    setTimeout(() => {
        gameArea.classList.add('d-none');
        restartArea.classList.remove('d-none');
        document.getElementById('resultTitle').innerText = `You won in ${attempts} attempts!`;
    }, 1500); 
}

// these function is used to validate the best score and save / Update best score in Local Storage 
const checkAndSaveBestScore = (currentAttempts) => {
    const storedBest = localStorage.getItem('best_score');
    
    if (!storedBest || currentAttempts < parseInt(storedBest)) {
        localStorage.setItem('best_score', currentAttempts);
        loadBestScore();
    }
}

// These function is used to display the best score of the user....
const loadBestScore = () => {
    const storedBest = localStorage.getItem('best_score');
    if (storedBest) {
        bestScoreDisplay.innerText = `Best Score: ${storedBest} Attempts`;
    } else {
        bestScoreDisplay.innerText = `Best Score: --`;
    }
}

// handling user interaction... for  submit and restart button
submitBtn.addEventListener('click', handleGuess);
restartBtn.addEventListener('click', initGame);

// calling important functions
initGame(); 
loadBestScore();