const readlineSync = require('readline-sync');

// Animal Quiz Questions
const questions = [
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    choices: ['1. Tiger', '2. Lion', '3. Elephant', '4. Bear'],
    correct: 2
  },
  {
    question: "Which is the fastest land animal?",
    choices: ['1. Cheetah', '2. Leopard', '3. Lion', '4. Falcon'],
    correct: 1
  },
  {
    question: "Which bird is known for its impressive mimicry skills?",
    choices: ['1. Parrot', '2. Peacock', '3. Penguin', '4. Sparrow'],
    correct: 1
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ['1. Elephant', '2. Blue Whale', '3. Giraffe', '4. Rhino'],
    correct: 2
  },
  {
    question: "Which animal is known to have the longest lifespan?",
    choices: ['1. Elephant', '2. Galápagos Tortoise', '3. Bowhead Whale', '4. Human'],
    correct: 3
  },
  {
    question: "Which animal can sleep standing up?",
    choices: ['1. Elephant', '2. Dog', '3. Horse', '4. Kangaroo'],
    correct: 3
  },
  {
    question: "What is the only flying mammal?",
    choices: ['1. Bat', '2. Eagle', '3. Flying Squirrel', '4. Pigeon'],
    correct: 1
  },
  {
    question: "Which animal has the most number of legs?",
    choices: ['1. Spider', '2. Centipede', '3. Crab', '4. Millipede'],
    correct: 4
  },
  {
    question: "Which animal is known to change its color?",
    choices: ['1. Octopus', '2. Cuttlefish', '3. Chameleon', '4. Squid'],
    correct: 3
  },
  {
    question: "Which of these animals is a marsupial?",
    choices: ['1. Kangaroo', '2. Tiger', '3. Monkey', '4. Elephant'],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let timeOuts = 0;

// Function to start the quiz
function startQuiz() {
  if (currentQuestion < questions.length) {
    askQuestion(questions[currentQuestion]);
  } else {
    displayFinalScore();
  }
}

// Function to handle each question asynchronously
function askQuestion(question) {
  let timeLeft = 10;
  console.log(`\nQuestion ${currentQuestion + 1}: ${question.question}`);
  question.choices.forEach(choice => console.log(choice));

  const timer = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      console.log(`Time remaining: ${timeLeft} seconds`);
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    console.log("\nTime's up!");
    timeOuts++;
    currentQuestion++;
    startQuiz(); // Move to the next question
  }, 10000);

  const userAnswer = readlineSync.question('\nYour answer (1-4): ');

  if (parseInt(userAnswer) === question.correct) {
    console.log('Correct!');
    score++;
  } else {
    console.log('Wrong answer.');
  }

  clearInterval(timer);
  currentQuestion++;
  startQuiz(); // Move to the next question
}

// Function to display the final score
function displayFinalScore() {
  console.log('\nQuiz Over!');
  console.log(`Your score: ${score}/${questions.length}`);
  console.log(`Timed out: ${timeOuts}`);
}

// Start the quiz
startQuiz();
