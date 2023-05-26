const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    answer: 2,
    explanation: "The capital of France is Paris.",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: 2,
    explanation: "The Mona Lisa was painted by Leonardo da Vinci.",
  },
  {
    question: "What is the symbol for Iron on the periodic table?",
    options: ["In", "Fe", "I", "Ir"],
    answer: 1,
    explanation: "The symbol for Iron on the periodic table is Fe.",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
    explanation: "Mars is known as the Red Planet.",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: 1,
    explanation: "The largest ocean on Earth is the Pacific Ocean.",
  },
];

let currentQuestion = 0;
let score = 0;
let quizEnd = false;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

// Display the current question and options
function displayQuestion() {
  const question = quizData[currentQuestion];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = "";
  for (let i = 0; i < question.options.length; i++) {
    const option = document.createElement("li");
    option.textContent = question.options[i];
    option.onclick = handleAnswer;
    optionsElement.appendChild(option);
  }
}

// Handle the user's answer selection
function handleAnswer() {
  if (quizEnd) {
    return;
  }

  const selectedOption = this;
  const question = quizData[currentQuestion];

  if (
    question.answer ===
    Array.from(optionsElement.children).indexOf(selectedOption)
  ) {
    score += 10;
  }

  for (let i = 0; i < optionsElement.children.length; i++) {
    optionsElement.children[i].onclick = null;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Move to the next question
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// End the quiz and display the result
function endQuiz() {
  quizEnd = true;
  resultElement.textContent = "Quiz ended!";
  scoreElement.textContent = "Your score: " + score + "/50";
  resultElement.style.display = "block";
  scoreElement.style.display = "block";
}

// Start the quiz
function startQuiz() {
  displayQuestion();
}

nextBtn.addEventListener("click", nextQuestion);

startQuiz();
