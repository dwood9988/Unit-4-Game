// crystal game
// start with four crystals and a randomly generated Goal number
var goal;
var wins;
var losses;

randomGoal = Math.floor(Math.random() * 69) + 30;
console.log(randomGoal);

$("#randomGoal").html("Goal: " + randomGoal);

for (let i = 0; i < 4; i++) {
    // each crystal gets a random number value from 1-12 
    var randomValue = Math.floor(Math.random() * 11) + 1;
    console.log(randomValue);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": randomValue

    });



    $(".crystals").append(crystal);

}
$(".crystal").on('click', function () {
    console.log($(this).attr("data-random"));
    
});
 

// each crystal gets a new value every time you win or lose
// when the user clicks a crystal, their total is increased by the number assigned to each crystal until it equals the total score.
// if the user total is over the random number, they lose - increase losses count -  and the game resets 
// if the total score is equal to the random number, increase the wins count.
