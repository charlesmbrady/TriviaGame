$(document).ready(function () {
    //////////////////////////  Sounds ////////////////////////////////////
    //////////////////////////  Object/Variables   //////////////////////////////
    var questions = [
        {
            question: "question one",
            choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
            answer: "choice 2"
        },
        {
            question: "question two",
            choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
            answer: "answer to question two"
        },
        {
            question: "question three",
            choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
            answer: "answer to question three"
        },
        {
            question: "question four",
            choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
            answer: "answer to question four"
        }
    ];

    var correct = 0;
    var incorrect = 0;
    var questionCounter = 0;
    var q = questions[questionCounter];
    var answers = [];           //store the answers here? and maybe use them later

    //******** ****************************************************************/
    //initially set display of everything to none except for title and start btn
    initial();

    ////////////////////////    Event Listeners  ////////////////////////////
    $("#start-btn").on("click", start);      //run the start function when start button clicked
    $("#choices").on("click", ".choice", chooseAnswer);   //run the chooseAnswer function when a choice is clicked


    //////////////////////////  Functions   ///////////////////////////////

    function initial() {
        $(".initial-hide").css("display", "none");
        $(".hide").css("display", "none");
    }

    function setChoices() {
        q = questions[questionCounter];

        $(".hide").css("display", "block");         //first unhide everything that may have been hidden
        $(".feedback").css("display", "none");      //make sure any feedback "card" is turned off
        $("#choices").html("");                 //blank out the #choices div first then set new choices

        

        //dynamically create the answer choices in the #choices row
        for (var i = 0; i < q.choices.length; i++) {
            var choiceBox = $("<div>");
            choiceBox.addClass("row");
            $("#choices").append(choiceBox);

            var choice = $("<div>");
            choice.addClass("col-sm-12");
            choice.addClass("choice")
            choice.attr("data-choice", q.choices[i]);
            choice.text(q.choices[i]);
            choiceBox.append(choice);
        }
    }

    function start() {
        questionCounter = 0;
        correct = 0;
        incorrect = 0;
        answers = [];

       
        $("#start").css("display", "none");
        $("#game").css("display", "block");
        $("#game").children("display", "block");
        $("#choices").css("display", "block");
        setChoices();
        
    }

    function chooseAnswer() {
        var answer = $(this).data("choice");
        answers.push(answer);            //store this answer in answers array

        showFeedback(answer);           //show either "correct" or "incorrect" feedback

        questionCounter++;
        //check to see if game is over
        if (questionCounter == questions.length) {
            gameOver();
        }
    }

    function showFeedback(answer) {
        if(answer == q.answer) {
            $("#question").css("display", "none");  //hide question and choices
            $("#choices").css("display", "none");

            correct++;
            //TODO://show success feedback
            //TODO://add timer so after a few seconds, the next question is displayed by running setChoices()
        }
        else{
            incorrect++;
            //TODO://show wrong feedback
            //TODO://add timer so after a few seconds, the next question is displayed by running setChoices()
        }
    }

    function gameOver() {
        //TODO://show the "#final" div add an event listener to the reset button so if they push it, it runs initial() ? or start() ?
    }






});//end document.ready