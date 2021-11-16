const highscorePageUrl = "highscore.html";
const startButtonEl = $("#StartButton");
const homeSectionEl = $("#HomeSection");
const quizSectionEl = $("#QuizSection");
const formSectionEl = $("#HighscoreForm");
const questionEl = $("#Question");
const answersEl = $("#Answers");
const alertEl = $("#Alert");
var answersListEl;
const timerCountEl = $("TimerCount");
var timer;
var score = 0;
var timerCounter = 60;
var questionIndex;
//#region Questions Array
var questions = [
    {
        question: "What is the function to bring up a pop up on the user's screen.",
        answers: [
            "prompt()",
            "remove()",
            "alert()",
            "text()"
        ],
        correctAnswer: 3
    },
    {
        question: "How do you redirect to a different page using javascript.",
        answers: [
            "window.location",
            "window.document",
            "window.page",
            "window.currentPage",
            "window.dom"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the name of the property storing the length of an array.",
        answers: [
            "length",
            "size",
            "width",
            "amount"
        ],
        correctAnswer: 1
    }
    
];
//#endregion


function displayNextQuestion(){
    if (!answersListEl){createList();}
    if (questionIndex === questions.length) {gameOver(); return;}
    //Delete unused list items
    if (questions[questionIndex].answers.length != answersListEl.children().length){
        // Delete all items after certain index
        for (let i = questions[questionIndex].answers.length - 1; i < answersListEl.children().length; i++){
            let answerListChildren = answersListEl.children();
            answerListChildren[i].remove();
        }
    }
    questionEl.text(questions[questionIndex].question);
    for(let i = 0; i < questions[questionIndex].answers.length; i++){
        //Add a new list item if there are not enough items
        if (i >= answersListEl.children().length) {
            var listItem = $("<button>");
            listItem.attr("id", i);
            answersListEl.append(listItem);
        }
        let answerListChildren = answersListEl.children();
        console.log(answerListChildren[i]);
        answerListChildren[i].innerHTML = questions[questionIndex].answers[i]; //Add text to list item
    }
}

function init(){
    questionIndex = 0;
    createList();    
    //When an answer is clicked check if its correct and move to the next question
    answersListEl.on("click", checkAnswer);
}

function createList(){
    answersListEl = $("<div>");
    for (let i = 0; i < questions[questionIndex].answers.length; i++){
        var listItem = $("<button>");
        listItem.attr("id", i);
        
        //listItem.class();
        answersListEl.append(listItem);
    }
    answersEl.append(answersListEl);
}

function checkAnswer(event){
    var answerChildren = answersListEl.children();
    var index = answerChildren.index(event.target);
    if( index === questions[questionIndex].correctAnswer - 1){
        alertEl.text("Correct!!");
        score++;
    }
    else{
        alertEl.text("Wrong!");
        score--;
    }
    questionIndex++;
    displayNextQuestion();
}

function gameOver(){
    clearInterval(timer);
    timerCounter = 60;
    quizSectionEl.attr("Display", "none");
    formSectionEl.attr("Display", "block");
    $("#ScoreLabel").text("Your score was " + score + "points");
}

//When the start button is clicked start the game
startButtonEl.on("click", function(event){
    homeSectionEl.attr("Display", "none");
    quizSectionEl.attr("Display", "block");
    //Write the initial value of timer
    timerCountEl.text(timerCounter);
    //Start the timer
    timer = setInterval(function(){
        //if timerCounter is 0 stop the game and exit function
        if (timerCounter <= 0){gameOver(); return;}
        timerCounter--;
        timerCountEl.text(timerCounter);
    }, 1000);
    init();
    displayNextQuestion();
});

//When form is submitted save the data
formSectionEl.submit(function(event){
    event.preventDefault();
    var highscoreData = {
        score: score,
        username: $("#FormTextBox").val()
    };
    localStorage.setItem("HighscoreData", JSON.stringify(highscoreData));
    window.location = highscorePageUrl;
})