// var readlineSync = require("readline-sync");
// // var firstName = readlineSync.question("First Name:");
// console.log("Hi" + firstName);
var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  first = { name: "roshan",
            scores: 5},
  second = { name: "kshitij",
            scores: 5}
] 

console.log("WELCOME!! to How well do you know me Quiz \n Select your options")

var questionsOfTheGame = [
 questionOne = {
    question: "What is my favourite color ?\na)Blue \nb)Red \nc)Orange",
    answer: "a"
  },

  questionTwo = {
    question: "What was the name of my high school?\na)DPS	\nb)navoday \nc)KVS",
    answer: "c"
 },

  questionThree  = {
    question: "what is my nickname given by my parents? \na)deepak	\nb)bablu\nc)chintu",
    answer: "b"
  },
  questionfour  = {
    question: "what is my last name?	\na)kumar \nb)ojha \nc)sharma",
    answer: "b"
  },
 questionfive  = {
    question: "what is my favourite song ?\na)gooda \nb)galat apne launde \nc)swaha",
    answer: "a"
  }
]
// console.log(questionsOfTheGame.length)

for(var i =0 ; i < questionsOfTheGame.length  ; i++ ){
  console.log(questionsOfTheGame[i].question)
  var ans = readlineSync.question("What is your answer?");
  if(ans.toUpperCase() === questionsOfTheGame[i].answer.toUpperCase()){
    console.log("YES!! you are right")
    score++
  }
  else
  {
    console.log("oops!! you were wrong, the correct answer was : "+ questionsOfTheGame[i].answer)
  }
  console.log("your current score is : "+score)
  console.log("\n------------------------------------")
}

console.log("HIGH SCORES \n"+ highScores[0].name+ " : "+highScores[0].scores )
console.log("\n"+highScores[1].name+ " : "+highScores[1].scores)
for(var i=0 ; i< highScores.length ; i++){
  if(score >= highScores[i].scores)
  {
    console.log( "yay! you have beaten the HIGHSCORES \n send us the screenshot \n THANKS for playing")
    break;
  }
}