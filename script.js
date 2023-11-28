//Create variables to reference index.html elements
var start = document.getElementById('start');
var time = document.getElementById('time');
var mainSection = document.getElementById('main');
var greetingSection = document.getElementById('greetingSection');
var gameContainer = document.getElementById('gameContainer');
var questionSection = document.getElementById('questionSection');
var answerSection = document.getElementById('answerSection');
var resultSection = document.getElementById('resultSection');


//Create the variable object for the questions, answer options, and correct answer:
var questions = [
    {question: 'The condition of the If statement is enclosed in _____.',
    options: ['square brackets', 'commas', 'parenthesis', 'curly brackets'],
    correctAnswer: 'parenthesis',
    },
    {question: 'What do x and y represent within this function, function mathAdd (x, y)?',
    options: ['parameters', 'variables', 'extra power'],
    correctAnswer: 'parameters',
    },
    {question: 'You can have Arrays inside an Object',
    options: ['false', 'true'],
    correctAnswer: 'true',
    },
    {question: 'When writing a for loop, what does the i++ mean?',
    options: ['increase the iteration by 2','increase the iteration by 1', 'we never use i++'],
    correctAnswer: 'increase the iteration by 1',
    }
];


//Create global variables
var timeLeft = 80;
var currentQuestionIndex = 0;

//Created the main function startGame() and its internal functions that will run the game
function startGame() {
    //variables move to local scope inside the startGame function
    timeLeft = 80;
    currentQuestionIndex = 0;
    //Append to the webpage to hide 'greetingsection' and display 'questions and options'
    greetingSection.setAttribute('style', 'display: none;');
    gameContainer.setAttribute('style', 'display: block;');

    //Calling out the internal functions that power the startGame() main function
    countDown();
    nextQuestion();
    displayQuestion();

    //Setting up the internal functions that power the startGame() main function

    /*Set up countDown function to start the timer, with IF statement to clear interval
    and end game if at 0 seconds or last question*/
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

    //Set up next question function with condition statement to: continue or end game.
    function nextQuestion() {
        resetOptions();
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
        } else {endGame();}
    }
    /*Display next question with options as buttons
    and a click event listener to the button to check for the correct answer*/
    function displayQuestion (questions) {
        questionSection.textContent = questions.question;
        for (var i = 0; i < questions.options.length; i++) {
            var option = questions.options[i];
            var button = document.createElement('button');

            button.textContent = option;

            button.addEventListener('click', function(){
                checkAnswer(option, questions.correctAnswer);
            });

            //append the option buttons as children in the answers container
            answerSection.appendChild(button);
        }
    }

    /*Set up function to remove answers with a while loop
    by a way of basically removing the first child (buttons) of the answer container
    until there is no children left*/
    function resetOptions() {
        while (answerSection.firstChild) {
            answerSection.removeChild(answerSection.firstChild);
        }
    }

    //Set up function to check the user's answer
    function checkAnswer(options, correctAnswer) {
        if (options !== correctAnswer) {
            timeLeft -= 10;
        }
        currentQuestionIndex++;
        nextQuestion();
        displayQuestion();
    }

    //create and ending game function

}

//Create event listeners
start.addEventListener('click', startGame);