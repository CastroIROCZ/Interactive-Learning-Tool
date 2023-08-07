const questions = {   
  "1st": {
    Math: [
      {
        question: "What is 5 + 3?",
        options: ["6", "8", "7", "9"],
        correctAnswer: "8"
      },
      {
        question: "What is 4 - 2?",
        options: ["1", "3", "2", "0"],
        correctAnswer: "2"
      },
      {
        question: "Which number comes after 6?",
        options: ["5", "7", "6", "8"],
        correctAnswer: "7"
      },
      {
        question: "How many fingers are on one hand?",
        options: ["4", "5", "6", "10"],
        correctAnswer: "5"
      },
      {
        question: "Which number is the smallest?",
        options: ["1", "5", "3", "7"],
        correctAnswer: "1"
      },
      {
        question: "What is 3 + 2?",
        options: ["4", "6", "5", "7"],
        correctAnswer: "5"
      }
    ],
    Science: [
      {
        question: "What does a plant need to grow?",
        options: ["Candy", "Sunlight", "Shoes", "Books"],
        correctAnswer: "Sunlight"
      },
      {
        question: "What do you use to see at night?",
        options: ["Flashlight", "Spoon", "Plate", "Shoe"],
        correctAnswer: "Flashlight"
      },
      {
        question: "Which animal says 'meow'?",
        options: ["Dog", "Cat", "Cow", "Sheep"],
        correctAnswer: "Cat"
      },
      {
        question: "Where do fish live?",
        options: ["Sky", "Land", "Water", "Tree"],
        correctAnswer: "Water"
      },
      {
        question: "What covers the Earth?",
        options: ["Shoes", "Air", "Clouds", "Water"],
        correctAnswer: "Water"
      },
      {
        question: "Which is not a plant?",
        options: ["Rose", "Tulip", "Fish", "Oak"],
        correctAnswer: "Fish"
      }
    ],
    History: [
      {
        question: "Who delivers presents on Christmas?",
        options: ["Easter Bunny", "Tooth Fairy", "Santa Claus", "Turkey"],
        correctAnswer: "Santa Claus"
      },
      {
        question: "Which holiday involves hunting for eggs?",
        options: ["Christmas", "Halloween", "Easter", "Valentine's Day"],
        correctAnswer: "Easter"
      },
      {
        question: "Who is known for chopping down a cherry tree?",
        options: ["Abraham Lincoln", "George Washington", "Martin Luther King Jr.", "Albert Einstein"],
        correctAnswer: "George Washington"
      },
      {
        question: "Where did the Pilgrims land in America?",
        options: ["Plymouth Rock", "Golden Gate Bridge", "Statue of Liberty", "Mount Rushmore"],
        correctAnswer: "Plymouth Rock"
      },
      {
        question: "What day is Independence Day in the USA?",
        options: ["July 4th", "December 25th", "January 1st", "October 31st"],
        correctAnswer: "July 4th"
      },
      {
        question: "On Thanksgiving, what large bird is often eaten?",
        options: ["Pigeon", "Crow", "Turkey", "Ostrich"],
        correctAnswer: "Turkey"
      }
    ],
    English: [
      {
        question: "Which is a vowel?",
        options: ["G", "M", "O", "T"],
        correctAnswer: "O"
      },
      {
        question: "Which word rhymes with 'hat'?",
        options: ["Dog", "Mat", "Pen", "Sun"],
        correctAnswer: "Mat"
      },
      {
        question: "Which word is a noun?",
        options: ["Run", "Joyful", "After", "House"],
        correctAnswer: "House"
      },
      {
        question: "Which sentence is correct?",
        options: ["Cat barked.", "Dogs flies.", "Birds sing.", "Fish barks."],
        correctAnswer: "Birds sing."
      },
      {
        question: "Which word means the opposite of 'hot'?",
        options: ["Cold", "Warm", "Heat", "Scorching"],
        correctAnswer: "Cold"
      },
      {
        question: "What punctuation ends a question?",
        options: [".", "!", "?", ","],
        correctAnswer: "?"
      }
    ]
  },
  "2nd": {
    Math: [
      {
        question: "What is 6 x 2?",
        options: ["8", "12", "10", "14"],
        correctAnswer: "12"
      },
      {
        question: "What is 8 divided by 2?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "4"
      },
      {
        question: "What is 7 - 3?",
        options: ["2", "5", "4", "10"],
        correctAnswer: "4"
      },
      {
        question: "Which number is even?",
        options: ["3", "7", "8", "9"],
        correctAnswer: "8"
      },
      {
        question: "If you have 3 apples and buy 2 more, how many apples do you have?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "5"
      },
      {
        question: "What shape has four equal sides?",
        options: ["Triangle", "Circle", "Rectangle", "Square"],
        correctAnswer: "Square"
      }
    ],
    Science: [
      {
        question: "Which is the largest animal?",
        options: ["Elephant", "Lion", "Giraffe", "Whale"],
        correctAnswer: "Whale"
      },
      {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        correctAnswer: "Mercury"
      },
      {
        question: "What do plants breathe out that humans and animals breathe in?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
        correctAnswer: "Oxygen"
      },
      {
        question: "What type of rock is formed by lava from a volcano?",
        options: ["Sedimentary", "Igneous", "Metamorphic", "Crystal"],
        correctAnswer: "Igneous"
      },
      {
        question: "Which of the following is NOT a sense?",
        options: ["Hearing", "Seeing", "Tasting", "Flying"],
        correctAnswer: "Flying"
      },
      {
        question: "What force pulls objects toward the center of the Earth?",
        options: ["Friction", "Magnetism", "Gravity", "Push"],
        correctAnswer: "Gravity"
      }
    ],
    History: [
      {
        question: "On which holiday do you wear costumes and go trick-or-treating?",
        options: ["Christmas", "Halloween", "Easter", "Valentine's Day"],
        correctAnswer: "Halloween"
      },
      {
        question: "Which explorer is credited with discovering America?",
        options: ["Christopher Columbus", "Marco Polo", "Vasco da Gama", "Ferdinand Magellan"],
        correctAnswer: "Christopher Columbus"
      },
      {
        question: "Who wrote the Declaration of Independence?",
        options: ["Benjamin Franklin", "Abraham Lincoln", "Thomas Jefferson", "George Washington"],
        correctAnswer: "Thomas Jefferson"
      },
      {
        question: "Which ancient civilization built pyramids?",
        options: ["Greeks", "Egyptians", "Romans", "Mongols"],
        correctAnswer: "Egyptians"
      },
      {
        question: "Where did the Olympic Games originate?",
        options: ["Rome", "London", "Greece", "China"],
        correctAnswer: "Greece"
      },
      {
        question: "What ancient civilization used hieroglyphs?",
        options: ["Mayan", "Greek", "Egyptian", "Chinese"],
        correctAnswer: "Egyptian"
      }
    ],
    English: [
      {
        question: "Which word rhymes with 'cat'?",
        options: ["Dog", "Car", "Bat", "Tree"],
        correctAnswer: "Bat"
      },
      {
        question: "Which is NOT a vowel?",
        options: ["A", "E", "L", "U"],
        correctAnswer: "L"
      },
      {
        question: "What do you call a word that shows action?",
        options: ["Noun", "Adjective", "Verb", "Pronoun"],
        correctAnswer: "Verb"
      },
      {
        question: "Which is the plural of 'mouse'?",
        options: ["Mice", "Mouses", "Mouse's", "Mousey"],
        correctAnswer: "Mice"
      },
      {
        question: "Which sentence is correct?",
        options: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She no like apples."],
        correctAnswer: "She doesn't like apples."
      },
      {
        question: "What punctuation is used to show possession?",
        options: ["-", ":", ";", "'"],
        correctAnswer: "'"
      }
    ]
  }
}
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
      {
        question: "What event led to the founding of the United States?",
        options: ["Boston Tea Party", "Declaration of Independence", "Invention of the Internet", "Construction of the Great Wall of China"],
        correctAnswer: "Declaration of Independence"
      },
      {
        question: "Which famous American explorer is known for his journey to the Pacific Ocean?",
        options: ["Christopher Columbus", "Lewis and Clark", "Marco Polo", "Ferdinand Magellan"],
        correctAnswer: "Lewis and Clark"
      },
      {
        question: "What did the Pilgrims celebrate with the Native Americans in 1621?",
        options: ["Halloween", "Thanksgiving", "Independence Day", "Christmas"],
        correctAnswer: "Thanksgiving"
      },
      {
        question: "Who wrote the Declaration of Independence?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Benjamin Franklin"],
        correctAnswer: "Thomas Jefferson"
      },
      {
        question: "What famous speech did Martin Luther King Jr. deliver in 1963?",
        options: ["I Have a Dream", "We Shall Overcome", "Give Me Liberty or Give Me Death", "Tear down this wall!"],
        correctAnswer: "I Have a Dream"
      }
    ],
    English: [
      {
        question: "Which word is the antonym of 'happy'?",
        options: ["Sad", "Brave", "Funny", "Tall"],
        correctAnswer: "Sad"
      },
      {
        question: "Choose the correct spelling: 'frind', 'freind', 'friend', or 'frend'?",
        options: ["frind", "freind", "friend", "frend"],
        correctAnswer: "friend"
      },
      {
        question: "What is the plural form of the word 'dog'?",
        options: ["dogs", "doggies", "dogies", "doggy"],
        correctAnswer: "dogs"
      },
      {
        question: "Which word means the opposite of 'night'?",
        options: ["light", "dark", "moon", "sleep"],
        correctAnswer: "light"
      },
      {
        question: "Identify the correct sentence: 'She plays the piano.' or 'She play the piano.'?",
        options: ["She plays the piano.", "She play the piano."],
        correctAnswer: "She plays the piano."
      },
      {
        question: "What is the meaning of the word 'beneath'?",
        options: ["above", "under", "behind", "around"],
        correctAnswer: "under"
      }
    ]
  },
  "4th": {
    "Math": [
      {
        "question": "What is the sum of 5 + 7?",
        "options": ["8", "10", "12", "14"],
        "correctAnswer": "12"
      },
      {
        "question": "Which number is the largest?",
        "options": ["25", "35", "15", "45"],
        "correctAnswer": "45"
      },
      {
        "question": "What is 3 multiplied by 9?",
        "options": ["18", "27", "21", "15"],
        "correctAnswer": "27"
      },
      {
        "question": "What is the place value of the digit '6' in the number 864?",
        "options": ["Tens", "Hundreds", "Ones", "Thousands"],
        "correctAnswer": "Hundreds"
      },
      {
        "question": "What is the missing number in the pattern: 5, 10, __, 20, 25?",
        "options": ["12", "15", "18", "22"],
        "correctAnswer": "15"
      },
      {
        "question": "What is the result of 64 divided by 8?",
        "options": ["8", "6", "7", "9"],
        "correctAnswer": "8"
      }
    ],
    "Science": [
      {
        "question": "What state of matter is water in when it is frozen?",
        "options": ["Solid", "Liquid", "Gas", "Plasma"],
        "correctAnswer": "Solid"
      },
      {
        "question": "What is the name of the closest star to Earth?",
        "options": ["Moon", "Sun", "Venus", "Mars"],
        "correctAnswer": "Sun"
      },
      {
        "question": "Which animal is cold-blooded?",
        "options": ["Elephant", "Penguin", "Lion", "Frog"],
        "correctAnswer": "Frog"
      },
      {
        "question": "What is the process by which plants make their own food using sunlight?",
        "options": ["Photosynthesis", "Respiration", "Decomposition", "Transpiration"],
        "correctAnswer": "Photosynthesis"
      },
      {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["Earth", "Venus", "Mars", "Jupiter"],
        "correctAnswer": "Mars"
      },
      {
        "question": "What do you call the change of a caterpillar into a butterfly?",
        "options": ["Hibernation", "Evolution", "Metamorphosis", "Pollination"],
        "correctAnswer": "Metamorphosis"
      }
    ],
    "History": [
      {
        "question": "Who was the first President of the United States?",
        "options": ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John F. Kennedy"],
        "correctAnswer": "George Washington"
      },
      {
        "question": "What event led to the founding of the United States?",
        "options": ["Boston Tea Party", "Declaration of Independence", "Invention of the Internet", "Construction of the Great Wall of China"],
        "correctAnswer": "Declaration of Independence"
      },
      {
        "question": "Which famous American explorer is known for his journey to the Pacific Ocean?",
        "options": ["Christopher Columbus", "Lewis and Clark", "Marco Polo", "Ferdinand Magellan"],
        "correctAnswer": "Lewis and Clark"
      },
      {
        "question": "What did the Pilgrims celebrate with the Native Americans in 1621?",
        "options": ["Halloween", "Thanksgiving", "Independence Day", "Christmas"],
        "correctAnswer": "Thanksgiving"
      },
      {
        "question": "Who wrote the Declaration of Independence?",
        "options": ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Benjamin Franklin"],
        "correctAnswer": "Thomas Jefferson"
      },
      {
        "question": "Which famous civil rights leader gave the 'I Have a Dream' speech?",
        "options": ["Martin Luther King Jr.", "Rosa Parks", "Malcolm X", "Harriet Tubman"],
        "correctAnswer": "Martin Luther King Jr."
      }
    ],
    "English": [
      {
        "question": "Which word is the antonym of 'happy'?",
        "options": ["Sad", "Brave", "Funny", "Tall"],
        "correctAnswer": "Sad"
      },
      {
        "question": "Choose the correct spelling: 'frind', 'freind', 'friend', or 'frend'?",
        "options": ["frind", "freind", "friend", "frend"],
        "correctAnswer": "friend"
      },
      {
        "question": "What is the meaning of the word 'beneath'?",
        "options": ["above", "under", "behind", "around"],
        "correctAnswer": "under"
      },
      {
        "question": "Identify the correct sentence: 'She plays the piano.' or 'She play the piano.'?",
        "options": ["She plays the piano.", "She play the piano."],
        "correctAnswer": "She plays the piano."
      },
      {
        "question": "What is the plural form of the word 'dog'?",
        "options": ["dogs", "doggies", "dogies", "doggy"],
        "correctAnswer": "dogs"
      },
      {
        "question": "Which word means the opposite of 'night'?",
        "options": ["light", "dark", "moon", "sleep"],
        "correctAnswer": "light"
      }
    ]
  },
  "5th": {
    "Math": [
      {
        "question": "What is 25 multiplied by 4?",
        "options": ["50", "75", "100", "125"],
        "correctAnswer": "100"
      },
      {
        "question": "What is the place value of the digit '7' in the number 273?",
        "options": ["Tens", "Hundreds", "Ones", "Thousands"],
        "correctAnswer": "Tens"
      },
      {
        "question": "Simplify the fraction: 12/18.",
        "options": ["1/2", "2/3", "3/4", "4/5"],
        "correctAnswer": "2/3"
      },
      {
        "question": "What is the missing number in the pattern: 2, 4, __, 8, 10?",
        "options": ["6", "12", "14", "16"],
        "correctAnswer": "6"
      },
      {
        "question": "Find the value of 'x' in the equation: 3x + 5 = 14.",
        "options": ["3", "4", "5", "6"],
        "correctAnswer": "3"
      },
      {
        "question": "What is the area of a rectangle with length 8 units and width 5 units?",
        "options": ["13 square units", "25 square units", "40 square units", "45 square units"],
        "correctAnswer": "40 square units"
      }
    ],
    "Science": [
      {
        "question": "What is the process by which plants release water vapor into the air?",
        "options": ["Evaporation", "Condensation", "Transpiration", "Precipitation"],
        "correctAnswer": "Transpiration"
      },
      {
        "question": "What do you call the study of living organisms and their interactions with the environment?",
        "options": ["Botany", "Zoology", "Ecology", "Geology"],
        "correctAnswer": "Ecology"
      },
      {
        "question": "What is the unit used to measure electric current?",
        "options": ["Volts", "Watts", "Amps", "Ohms"],
        "correctAnswer": "Amps"
      },
      {
        "question": "Which gas do plants take in from the air during photosynthesis?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "correctAnswer": "Carbon Dioxide"
      },
      {
        "question": "What is the hardest known natural material on Earth?",
        "options": ["Diamond", "Gold", "Silver", "Platinum"],
        "correctAnswer": "Diamond"
      },
      {
        "question": "Which planet is known as the 'Blue Planet'?",
        "options": ["Earth", "Uranus", "Neptune", "Mercury"],
        "correctAnswer": "Earth"
      }
    ],
    "History": [
      {
        "question": "Who wrote the Declaration of Independence?",
        "options": ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Benjamin Franklin"],
        "correctAnswer": "Thomas Jefferson"
      },
      {
        "question": "What did the Pilgrims celebrate with the Native Americans in 1621?",
        "options": ["Halloween", "Thanksgiving", "Independence Day", "Christmas"],
        "correctAnswer": "Thanksgiving"
      },
      {
        "question": "Which famous African American woman is known for her efforts to end slavery through the Underground Railroad?",
        "options": ["Harriet Tubman", "Rosa Parks", "Sojourner Truth", "Maya Angelou"],
        "correctAnswer": "Harriet Tubman"
      },
      {
        "question": "What important document begins with the words 'We the People'?",
        "options": ["Declaration of Independence", "Bill of Rights", "Gettysburg Address", "Constitution of the United States"],
        "correctAnswer": "Constitution of the United States"
      },
      {
        "question": "Who was the 16th President of the United States and led the country during the Civil War?",
        "options": ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John F. Kennedy"],
        "correctAnswer": "Abraham Lincoln"
      },
      {
        "question": "Which famous speech did Martin Luther King Jr. deliver in 1963?",
        "options": ["I Have a Dream", "We Shall Overcome", "Give Me Liberty or Give Me Death", "Tear down this wall!"],
        "correctAnswer": "I Have a Dream"
      }
    ],
    "English": [
      {
        "question": "What is the plural form of the word 'child'?",
        "options": ["childs", "childes", "childen", "children"],
        "correctAnswer": "children"
      },
      {
        "question": "Identify the correct sentence: 'The cat is sleeping on the mat.' or 'The cat are sleeping on the mat.'?",
        "options": ["The cat is sleeping on the mat.", "The cat are sleeping on the mat."],
        "correctAnswer": "The cat is sleeping on the mat."
      },
      {
        "question": "Which word means the same as 'tiny'?",
        "options": ["Huge", "Small", "Giant", "Enormous"],
        "correctAnswer": "Small"
      },
      {
        "question": "What is the past tense of the verb 'run'?",
        "options": ["Ran", "Runned", "Running", "Runs"],
        "correctAnswer": "Ran"
      },
      {
        "question": "Choose the correct homophone: 'to', 'too', 'two', or 'tow'?",
        "options": ["to", "too", "two", "tow"],
        "correctAnswer": "too"
      },
      {
        "question": "What is the synonym for the word 'happy'?",
        "options": ["Sad", "Angry", "Joyful", "Scared"],
        "correctAnswer": "Joyful"
      }
    ]
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
