let gameStarted = false;
let secondsLeft = 60;
let questionPointer = 0;

//render question answers from javascript - options
//register whether they clicked the right one
//end the game at some point
//make 1 question long and detect its that long"good job! otherwise you got it wrong


// Selects element by class
let timeEl = document.querySelector(".time");
let questionsEl = document.getElementById('questions');
let correctAnswerEl = document.querySelector(".correct");
let promptEl = document.getElementById("prompt");


//-------------------------------QUESTIONS ARRAY------------------------------//
let questions = [
    {
        question: "What's your favorite color?",
        multipleChoiceOptions: [
            "Yellow",
            "Green",
            "Blue",
            "Pink"
        ],
        correct: "Green"
    },
    {
        question: "What's your food color?",
        multipleChoiceOptions: [
            "Yellow",
            "Green",
            "Blue",
            "Pink"
        ],
        correct: "Blue"
    },
];


//--------------------------------NEXT QUESTION------------------------------//


function nextQuestion(){
    questionPointer++;
    //Display
    render();
};

//---------------------------------TIMER------------------------------------//

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        // sendMessage();
      }
  
    }, 1000);
  }


//------------------------------ANSWER QUESTION----------------------------//
function answerQuestion(event){
    //Which answer the choice (which button)
    var buttonEl = event.target;
    var answer = buttonEl.dataset.answer;
    

    console.log(answer);

    //Compare 'answer' to the "current question" answer
    let currentQuestion = questions[questionPointer];
    console.log(questionPointer, questions)
        
        
    if ( answer ===  currentQuestion.multipleChoiceOptions.value) {

    }
    console.log(answer);
    nextQuestion();

    //IF we have no questions left

        //THEN end the game

    //ELSE
}

const startButton = document.getElementById("1");
startButton.addEventListener("click", event => {
startQuiz();



})

function startQuiz(event){
console.log("start quiz")

gameStarted = true;
render();


setTime();
}


function render(){
if(gameStarted){
    startButton.style.visibility = "hidden";

} else {
    startButton.style.visibility = "visible";
}

promptEl.innerHTML = questions[questionPointer].question;

}


//---------------------------EVENT LISTENER------------------------------//
questionsEl.addEventListener( "click", answerQuestion );

//----------------------------------------------------------------------//