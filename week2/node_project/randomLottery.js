var pb1 = getRandomInt(1,69);
var pb2 = getRandomInt(1,69);
var pb3 = getRandomInt(1,69);
var pb4 = getRandomInt(1,69);
var pb5 = getRandomInt(1,69);
var pb6 = getRandomInt(1,26);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}


let pwrNum = [pb1,pb2,pb3,pb4,pb5];
let pwrBall = [pb6]
let pwrPbSent1 = ["Your Lottery numbers are:"]
let pwrPbSent2 = [" and Powerball"]
let pwrPbSent3 =["."] 
let powerBallSentence = pwrPbSent1.concat(pwrNum,pwrPbSent2,pwrBall,pwrPbSent3)
let powerBallSentence2 =  JSON.stringify(powerBallSentence);
powerBallSentence2 = powerBallSentence2.replace(/\"/g, "")
console.log(powerBallSentence2)

//console.log(JSON.stringify(powerBallSentence))
//let powerBallSentenceFinal = JSON.stringify(powerBallSentence);
//console.log(JSON.parse(powerBallSentenceFinal)) 
//.replace(/\"/g, "")
