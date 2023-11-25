//Create variables to reference index.html elements
var start = document.getElementById('start');
var time = document.getElementById('time');

//Create variables to capture user input

//Create functions to start game and handle user input

var timeLeft = 5;

function startGame() {
    function countDown() {
        var timeInterval = setInterval(function() {
            timeLeft--;
            time.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(timeInterval);
                console.log('sorry all done!');
            }
        }, 1000)
    }
    console.log('Start the game already!');
    countDown();
}

//Create functions to provide results from user input

//Create event listeners
start.addEventListener('click', startGame);