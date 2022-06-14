var questionsEl = document.getElementById('questions');

// Selects element by class
var timeEl = document.querySelector(".time");
//-------------------------------QUESTIONS ARRAY------------------------------//
var questions = [
    {
        question: "What's your favorite color?",
        multipleChoiceOptions: [
            "Yellow",
            "Green",
            "Blue",
            "Pink"
        ],
        correct: "Green"
    }
];


//--------------------------------NEXT QUESTION------------------------------//
var questionPointer = 0;

function nextQuestion(){
    questionPointer++;
    //Display
};

//---------------------------------TIMER------------------------------------//
var secondsLeft = 60;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

setTime();

//------------------------------ANSWER QUESTION----------------------------//
function answerQuestion(event){
    //Which answer the choice (which button)
    var buttonEl = event.target;
    var answer = buttonEl.dataset.answer;

    console.log(answer);

    //Compare 'answer' to the "current question" answer
    var currentQuestion = questions[questionPointer];
    
    if ( answer ===  questions[questionPointer].correct) {

    }
    console.log(answer);
    nextQuestion();

    //IF we have no questions left

        //THEN end the game

    //ELSE
}

//---------------------------EVENT LISTENER------------------------------//
questionsEl.addEventListener( "click", answerQuestion );

//----------------------------------------------------------------------//