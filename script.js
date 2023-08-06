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
    Science: [
      {
        question: "What is the process by which plants make their own food using sunlight?",
        options: ["Photosynthesis", "Germination", "Respiration", "Fertilization"],
        correctAnswer: "Photosynthesis"
      },
      {
        question: "What state of matter has a definite shape and volume?",
        options: ["Liquid", "Solid", "Gas", "Plasma"],
        correctAnswer: "Solid"
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
      },
      {
        question: "What is the name of the natural outer layer that surrounds the Earth?",
        options: ["Atmosphere", "Mantle", "Crust", "Core"],
        correctAnswer: "Atmosphere"
      },
      {
        question: "Which of these animals is a cold-blooded vertebrate?",
        options: ["Whale", "Eagle", "Turtle", "Rabbit"],
        correctAnswer: "Turtle"
      },
      {
        question: "What is the process of changing water into water vapor?",
        options: ["Evaporation", "Condensation", "Melting", "Freezing"],
        correctAnswer: "Evaporation"
      }
    ],
    History: [
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John F. Kennedy"],
        correctAnswer: "George Washington"
      },
    ],
    English: [ ]
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

//let currentSubject = null;
//let currentQuestionIndex = 0;
let currentGrade = null;
let correctAnswerCount = 0;

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
  const currentQuestion = questions[currentGrade][currentSubject][currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedAnswer === correctAnswer) {
    correctAnswerCount++;
    feedbackElement.textContent = "Good job!";
    if (correctAnswerCount === 5) {
      feedbackElement.textContent = "This section has been passed! Please choose another section or you may start again.";
      correctAnswerCount = 0;
      return;
    }
    currentQuestionIndex++;
    displayQuestion(questions[currentGrade][currentSubject][currentQuestionIndex]);
  } else {
    feedbackElement.textContent = "Wrong answer. Try again!";
  }
}

function initialize() {
  const subjectBoxes = document.querySelectorAll('.box');

  subjectBoxes.forEach(box => {
    box.addEventListener('click', () => {
      currentGrade = box.getAttribute('data-grade');
      currentSubject = box.getAttribute('data-subject');
      currentQuestionIndex = 0;
      displayQuestion(questions[currentGrade][currentSubject][currentQuestionIndex]);
    });
  });
}

initialize();
