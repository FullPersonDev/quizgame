//Create variables to reference index.html elements
var start = document.getElementById('start');
var time = document.getElementById('time');
var mainSection = document.getElementById('main');
var landingSection = document.getElementById('landingSection');
var questionSection = document.getElementById('questionSection');
var answerSection = document.getElementById('answerSection');

//Create variables to capture user input

//Create the variable object of the questions and its correct answer:
var questions = [
    {question: 'What is 2 + 2',
    options: ['4', '6', '7', '1',],
    correctAnswer: '4',
    },
    {question: 'What is 4 + 4',
    correctAnswer: '8',
    },
    {question: 'What is 5 + 5',
    correctAnswer: '10',
    },
];


//Create functions to start game and handle user input
var timeLeft = 80;

function startGame() {
    function countDown() {
        var timeInterval = setInterval(function() {
            timeLeft--;
            time.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(timeInterval);
            }
        }, 1000)
    }
    countDown();
    //Append to the webpage to hide center section and display my questions.
    landingSection.setAttribute('style', 'display: none;');
    questionSection.setAttribute('style', 'display: block;');
    answerSection.setAttribute('style', 'display: block;');
    questionSection.textContent = questions[0].question;
    answerSection.textContent = questions[0].options;
}

//Create functions to provide results from user input

//Create event listeners
start.addEventListener('click', startGame);