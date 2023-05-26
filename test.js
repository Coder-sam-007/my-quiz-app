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

    // Highlight the previously selected option
    if (question.selectedOption === i) {
      option.classList.add("selected");
    }
  }

  // Enable or disable the Previous button based on the current question
  prevBtn.disabled = currentQuestion === 0;
}

// Handle the user's answer selection
function handleAnswer() {
  // ... previous code ...

  // Store the selected option index in the question object
  question.selectedOption = Array.from(optionsElement.children).indexOf(
    selectedOption
  );

  // ... previous code ...
}

// Move to the previous question
function prevQuestion() {
  currentQuestion--;

  // Display the previous question
  displayQuestion();
}

// Store the selected option index in the question object
const selectedOptionIndex = Array.from(optionsElement.children).indexOf(
  selectedOption
);
question.selectedOption = selectedOptionIndex;
