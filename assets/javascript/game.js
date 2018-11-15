// crystal game
// start with four crystals and a randomly generated Goal number
var goal;
var wins = 0;
var losses = 0;
var previousScore = 0;
var randomGoal = 0;

var beginGame = function () {
    // empty the crystals at the start of each begin game function
    $(".crystals").empty();
    // assign a random goal for the user
    randomGoal = Math.floor(Math.random() * 101) + 19;


    $("#randomGoal").html("Goal: " + "<br>" + randomGoal);

// generates 4 crystals
    for (let i = 0; i < 4; i++) {
        // each crystal gets a random number value from 1-12 
        var randomValue = Math.floor(Math.random() * 12) + 1;
        console.log(randomValue);

        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": randomValue
        });

        $(".crystals").append(crystal);
    }
}

beginGame();

$(document).on('click', ".crystal", function () {

    var crystalNumber = parseInt($(this).attr('data-random'));
    previousScore += crystalNumber;
    console.log(previousScore);
    console.log(randomGoal);
    

    if (previousScore > randomGoal) {
        console.log("YOU LOSE!");
        losses++;
        $("#losses").html("Losses:" + losses);
        previousScore = 0;
        console.log(losses);
        beginGame();
    }
    else if (previousScore === randomGoal) {
        console.log("YOU WIN!");
        wins++;
        $("#wins").html("Wins:" + wins);
        previousScore = 0;
        console.log(wins);
        beginGame();
    }

});


// each crystal gets a new value every time you win or lose
// when the user clicks a crystal, their total is increased by the number assigned to each crystal until it equals the total score.
// if the user total is over the random number, they lose - increase losses count -  and the game resets 
// if the total score is equal to the random number, increase the wins count.
