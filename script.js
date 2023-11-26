//Create variables to reference index.html elements
var start = document.getElementById('start');
var time = document.getElementById('time');
var mainSection = document.getElementById('main');
var gameContainer = document.getElementById('gameContainer');
var landingSection = document.getElementById('landingSection');
var questionSection = document.getElementById('questionSection');
var answerSection = document.getElementById('answerSection');
var resultSection = document.getElementById('resultSection');

//Create variables to capture user input

//Create the variable object for the questions and its correct answer:
var questions = [
    {question: 'The condition of the If statement is enclosed in _____.',
    options: ['square brackets', 'commas', 'parenthesis', 'curly brackets',],
    correctAnswer: 'parenthesis',
    },
    {question: 'What is 4 + 4',
    options: [],
    correctAnswer: '8',
    },
    {question: 'What is 5 + 5',
    options: [],
    correctAnswer: '10',
    },
    {question: 'What is 10 + 10',
    options: [],
    correctAnswer: '20',
    }
];


//Create functions to start game and handle user input
var timeLeft = 80;
var currentQuestionIndex = 0;

//Created the main function startGame() and its internal functions that will run the game
function startGame() {
    timeLeft = 80;
    currentQuestionIndex = 0;
    //Append to the webpage to hide center section and display my questions and options
    landingSection.setAttribute('style', 'display: none;');
    gameContainer.setAttribute('style', 'display: block;');

    //Calling out these internal functions that power the startGame() main function
    countDown();
    nextQuestion();
    displayQuestion();

    //Setting up the internal functions that power the startGame() main function
    function countDown() {
        var timeInterval = setInterval(function() {
            timeLeft--;
            time.textContent = timeLeft;

            if (timeLeft === 0 || currentQuestionIndex === questions.length) {
                clearInterval(timeInterval);
                endGame();
            }
        }, 1000);
    }

    //Set up next question with condition statement to: continue or end game.
    function nextQuestion() {
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
        } else {endGame();}
    }
    //Display next question with options as buttons
    function displayQuestion (questions) {
        questionSection.textContent = questions.question;
        questions.options.forEach(
            function (options, index) {
                var button = document.createElement('button');
                button.textContent = options;
                button.addEventListener('click', function() {
                    checkAnswer(choice, questions.correctAnswer);
                });
                answerSection.appendChild(button);
            }
        );
    }

}

//Create functions to provide results from user input

//Create event listeners
start.addEventListener('click', startGame);