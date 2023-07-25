const questions = {
  Math: [
    {
      question: "What is 25 + 17?",
      options: ["30", "42", "56", "42"],
      correctAnswer: "42"
    },
    {
      question: "What is 8 × 7?",
      options: ["15", "48", "56", "56"],
      correctAnswer: "56"
    },
    // Add 4 more math questions here...
  ],
  Science: [
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Venus", "Jupiter"],
      correctAnswer: "Jupiter"
    },
    {
      question: "What is the process by which plants make their own food?",
      options: ["Photosynthesis", "Germination", "Respiration", "Photosynthesis"],
      correctAnswer: "Photosynthesis"
    },
    // Add 4 more science questions here...
  ],
  History: [
    {
      question: "Who was the first president of the United States?",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "George Washington"],
      correctAnswer: "George Washington"
    },
    {
      question: "What war was fought between the North and South regions of the United States?",
      options: ["Revolutionary War", "World War II", "Civil War", "Civil War"],
      correctAnswer: "Civil War"
    },
    // Add 4 more history questions here...
  ],
  English: [
    {
      question: "What is the plural form of 'child'?",
      options: ["childs", "child's", "children", "children"],
      correctAnswer: "children"
    },
    {
      question: "Which word is a verb: 'jump', 'ball', 'blue'?",
      options: ["jump", "ball", "blue", "jump"],
      correctAnswer: "jump"
    },
    // Add 4 more English questions here...
  ]
};

let currentSubject = null;
let currentQuestionIndex = 0;

function displayQuestion(question) {
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const feedbackElement = document.getElementById('feedback');

  questionElement.textContent = question.question;
  answersElement.innerHTML = '';
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    answersElement.appendChild(button);
  });

  feedbackElement.textContent = '';
}

function checkAnswer(selectedAnswer) {
  const feedbackElement = document.getElementById('feedback');
  const currentQuestion = questions[currentSubject][currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedAnswer === correctAnswer) {
    feedbackElement.textContent = "Good job!";
  } else {
    feedbackElement.textContent = "Wrong answer. Try again!";
  }

  currentQuestionIndex++;
  if (currentQuestionIndex >= 6) {
    currentQuestionIndex = 0;
    feedbackElement.textContent = '';
  } else {
    setTimeout(() => displayQuestion(questions[currentSubject][currentQuestionIndex]), 1500);
  }
}

function initialize() {
  const subjectBoxes = document.querySelectorAll('.box');

  subjectBoxes.forEach(box => {
    box.addEventListener('click', () => {
      currentSubject = box.textContent;
      currentQuestionIndex = 0;
      displayQuestion(questions[currentSubject][currentQuestionIndex]);
    });
  });
}

initialize();
