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
    {question1: 'What is 2 + 2',
    correctAnswer: '4',
    },
    {question2: 'What is 4 + 4',
    correctAnswer: '8',
    },
    {question3: 'What is 5 + 5',
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
    questionSection.textContent = questions[0].question1;
}

//Create functions to provide results from user input

//Create event listeners
start.addEventListener('click', startGame);