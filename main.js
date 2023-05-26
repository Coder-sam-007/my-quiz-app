const quizContainer = document.querySelector(".quiz-container");
const quizName = document.querySelector(".quiz-header>h3");
let question = document.querySelector(".question");
const prevBTN = document.querySelector(".prevBTN");
const nxtBTN = document.querySelector(".nxtBTN");

const options = document.querySelectorAll(".option");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

let j = 0;

// questions

let questions = [
  {
    no: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    no: 2,
    question: "How many heading tags are there in HTML5?",
    answer: "6",
    options: ["2", "3", "5", "6"],
  },
  {
    no: 3,
    question:
      "Which of the following attributes is used to add link to any element?",
    answer: "href",
    options: ["link", "ref", "href", "newref"],
  },
  {
    no: 4,
    question:
      "Which of the following tags is used to add a line-break in HTML?",
    answer: "<br>",
    options: ["<br>", "<break>", "</break>", "<break/>"],
  },
  {
    no: 5,
    question:
      "What does XML stand for?Which of the following attributes is used to open an hyperlink in new tab?",
    answer: "target",
    options: ["tab", "href", "target", "ref"],
  },
];

let scores = 0;

const right_ans = (i) => {
  options.forEach((opt) => {
    if (opt.innerText == questions[i].answer) {
      opt.classList.add("right-answer");
      scores++;
    }
  });
};

options.forEach((optn) => {
  optn.addEventListener("click", (e) => {
    if (e.target.innerText == questions[j].answer) {
      optn.classList.add("right-answer");
      j++;
    } else {
      optn.classList.add("wrong-answer");
      right_ans(j);
      j++;
    }
    console.log(j);
  });
});
