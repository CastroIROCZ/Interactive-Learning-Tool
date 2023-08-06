const questions = {
  "3rd": {
    Math: [
      {
        question: "What is the sum of 58 and 23?",
        options: ["69", "81", "76", "51"],
        correctAnswer: "81"
      },
      {
        question: " If you have 8 apples and give 3 to your friend, how many apples do you have left?",
        options: ["5", "10", "3", "6"],
        correctAnswer: "5"
      },
      {
        question: "Sarah has 24 stickers, and Emma has 19 stickers. How many more stickers does Sarah have than Emma?",
        options: ["5", "45", "43", "3"],
        correctAnswer: "5"
      },
      {
        question: "A box contains 36 marbles. If 15 of them are blue and the rest are red, how many red marbles are there?",
        options: ["18", "21", "12", "27"],
        correctAnswer: "21"
      },
      {
        question: "If a rectangle has a length of 12 units and a width of 5 units, what is its perimeter?",
        options: ["60 units", "30 units", "24 units", "22 units"],
        correctAnswer: "24 units"
      },
      {
        question: "There are 30 students in a class, and they want to split into 6 equal groups for a project. How many students will be in each group?",
        options: ["4 students", "5 students", "6 students", "7 students"],
        correctAnswer: "5 students" 
      }
    ],
    Science: [ /* questions go here */ ],
    // ... other subjects
  },
  "4th": {
    Math: [ /* questions you provided go here */ ],
    Science: [ /* and so on... */ ],
    // ... other subjects
  },
  "5th": {
    Math: [ /* questions go here */ ],
    Science: [ /* questions go here */ ],
    // ... other subjects
  }
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
