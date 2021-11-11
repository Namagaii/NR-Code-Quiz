/*
    Notes:
    Clear #Answers and write new questions
    Listen for form submition formEl.on("submit", function)
    event.preventDefault() on form

    When Game Starts:
    Set timer and start countdown
    Show Question
*/

/*
get start button
set start button event listener
function{
    hide #HomeSection
    show #QuizSection
    start timer at 1 sec interval count down function
    init();
    displayNextQuestion();
}
*/
var startButton = $("#startButton");
var homeSection = $("#HomeSection");
var quizSection = $("#QuizSection");
startButton.on("click", function(){
    
});
/*
    questions[] = [
        {
            question: "question"
            answers: [...]
            correctAnswer: 
        }
    ]
    questionIndex;
    function displayNextQuestion(){
        if (answersListEl does not exist) then call init func
        if (questionIndex === questions.length - 1) then call gameOver()
        questionEl.text(questions[questionIndex].question);
        for(var i = 0; i < questions[questionIndex].answers.length; i++){
            check if li exist to set text too if not make new one
            set text to answer li 
        }
    }
*/

/*
    function init(){
        questionIndex = 0;
        create answer <ul>
        for elements in answers array of current question object make li
        create answer <li>
        add class to answer li
        append <li> to ul
        leave for loop
        append ul to #Answers div
    }
*/

/*
    $(#Answers).on("click", function(){
        if (event.target.index === questions[questionIndex].correctAnswer)
        then
        write into #Alert "Correct!!" and increment score
        else
        then
        write into #Alert "Wrong!" and decrement score and subtract time
        displayNextQuestion();
    })
*/

/*
    function gameOver()
    {
        stop the timer
        #QuizSection hide
        #HighscoreForm Show
        set #ScoreLabel Your score was *Score* points
    }

    $(#HighscoreForm).submit(function(event){
        save data to local storage and return to start page
        link to Scoreboard page
    })
*/