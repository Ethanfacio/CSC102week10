function playgetnine(){
    /*playgetnine() is a function used to simulate a craps game. 
     use for the week 3 assignment*/ 
    console.log("playgetnine() started");
    //roll the dice 
    var die1 = 1 + Math.floor(6 * Math.random());
    console.log(die1);
    document.getElementById("die1res").innerHTML = die1;
    var die2 = 1 + Math.floor(6 * Math.random());
    console.log(die2);
    document.getElementById("die2res").innerHTML = die2;
    var die3 = 1 + Math.floor(6 * Math.random());
    console.log(die3);
    document.getElementById("die3res").innerHTML = die3;
    //find sum of the three dice
    var sum = die1 + die2 + die3;
    console.log(sum);
    document.getElementById("sumres").innerHTML = sum;
    //if sum = another than 9, they lose
   if(sum == 3 || sum == 4 || sum == 5 || sum == 6 || sum == 7 || sum == 8|| sum == 10 || sum == 11 || sum == 12 || sum == 13 || sum == 14 || sum == 15 || sum == 16 || sum == 17 || sum == 18){
    document.getElementById("finres").innerHTML = "You lose! Please try again or go somewhere else.";
   } else if( die1 == die2){
    //if sum is nine, then they win
    document.getElementById("finres").innerHTML = "You win! Want to keep going.";
   }
   
}