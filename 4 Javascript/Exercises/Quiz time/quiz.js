var responsesArray= [];
var correct=0;
var incorrect= 0;
//Correct answer key initialize
var index = 0;
//Initialize array to store correct answer.
var correctAnswers = [];


function question2() {
  //Save correct answer.
  correctAnswers[index++] = "yes";
  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

  // why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    console.log("correct");
    firstQuestion = 'yes'
  } else if (firstQuestion.toLowerCase() === 'no') {
    console.log("in-correct");
    firstQuestion = 'no'
  } else {
    // what if the user writes something other than yes or no? 
    // they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responsesArray.push(firstQuestion); // add the true or false value to the responses array
}

question2();



function question3() {
  //Save correct answer.
  correctAnswers[index++] = "livescript";
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {      
      // your own answers

    case "livescript":
      console.log("Correct!");
      break;
    case "Java":
      console.log("wrong");
      break;
    case "JavaLive":
      console.log("wrong");
      break;
    case "ScriptyScript":
      console.log("wrong");
      break;
    default:
      console.log("Sorry the answer is LiveScript");
  }
  responsesArray.push(js);
  
  //Save correct answer.
  correctAnswers[index++] = "ruby";
  var mine = prompt('What coding language is exclusively related to the back-end: Ruby, JavaScript, HTML?');
  mine= mine.toLowerCase();
  switch (mine) {
      // your own answers
    case "ruby":
      console.log("Yeah!");
      break;
    case "html":
      console.log("ouuu I'm sorry for you");
      break;
    case "javascript":
      console.log("Yeah but so so");
      break;
  }
  responsesArray.push(mine);
  //Call function to evaluate correct or incorrect answer
  evaluate(responsesArray,correctAnswers)
}

question3();

function evaluate(responsesArray,correctAnswers) 
{
  for (var i = 0; i < responsesArray.length; i++) 
  {
    //Match response with correct answer.
    if (responsesArray[i] === correctAnswers[i]) 
    {
      correct++;

    } else{
      if (responsesArray[i] !== correctAnswers[i]) {
        incorrect++;
      }
    }
  }
  alert("Correct : "+correct+" and Incorrect : "+incorrect);
}