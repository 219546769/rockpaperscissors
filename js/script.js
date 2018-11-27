// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("button").click(function() {
    $("#userChoice").text($("#input")).val();


    var computerChoice = Math.random();
    console.log(computerChoice);
    var computerChoiceName;
    var userChoice="";
    var winner = "";
   
   
    if(computerChoice > .00 && computerChoice < 0.3) {
        $("#computerChoice").text("Paper!"); 
        computerChoiceName = "paper";
    }
    else if(computerChoice > .30 && computerChoice < 0.6) {
        $("#computerChoice").text("Rock!"); 
         computerChoiceName = "rock";
    }
    else if(computerChoice > .60 && computerChoice < 1.0) {
        $("#computerChoice").text("Scissor!");
         computerChoiceName = "scissor";
    }
   
   console.log (computerChoiceName);
   console.log (computerChoice);
   
    $("#computerChoice").text(computerChoiceName); 
     

});
   


// DOCUMENT READY FUNCTION BELOW
