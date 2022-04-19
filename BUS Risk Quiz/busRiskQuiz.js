// Questions that will be asked
const Questions = [{
    id: 0,
    q: "In general, how would your best friend describe you as a risk taker?",
    a: [{ text: "A real gambler", riskVal: 4 },
        { text: "Willing to take risks after completing adequate research", riskVal: 3 },
        { text: "Cautious", riskVal: 2 },
        { text: "A real risk avoider (1)", riskVal: 1 }
    ]
},
{
    id: 1,
    q: "Question Two",
    a: [{ text: "This has value 18", riskVal: 18 },
        { text: "2", riskVal: 2 },
        { text: "3", riskVal: 3 },
        { text: "value 1", riskVal: 1 }
    ]
},
{
    id: 2,
    q: "Question Three",
    a: [{ text: "abc", riskVal: 1 },
        { text: "def", riskVal: 2 },
        { text: "ghi", riskVal: 3 },
        { text: "jkl (1)", riskVal: 1 }
    ]
}] // End of Questions

function evaluateRisk(arr){
    var sum = 0;
    var resultArr = [];
    var i=0;
    while(i< arr.length){
        sum += arr[i];
        i++;
    }

    if (sum <= 18){
        resultArr.push("You have a low risk tolerance (ie. conservative investor)!");
    }else if(19 <= sum && sum <= 22){
        resultArr.push("You have a below-average risk tolerance!");
    }else if(23 <= sum && sum <= 28){
        resultArr.push("You have an average/moderate risk tolerance!");
    }else if(29 <= sum && sum <= 32){
        resultArr.push("You have a above-average risk tolerance!");
    }else if(33 <= sum){
        resultArr.push("You have a high risk tolerance (ie. aggresive investor!");
    }
    resultArr.push(sum);
    // Return the array of result text and value to be posted on page
    return resultArr;
}

function nextFunc(){
    if (start){ // If currently at first scene ...
        start = false;
        // Hide: start-container
        start_container[0].style.display = 'none';
        // Show: form-container, restart button
        const form = document.getElementsByClassName('form-container');
        form[0].style.display = '';
        restart.style.display = '';
        // Update next button to say "Next"
        next.innerText = "Next";
        // Do first question
        iterate(0);
    }

    // Check to make sure an option is chosen
    const radioButtons = document.querySelectorAll('input[name="options"]');
    for (x in radioButtons) {
        if (radioButtons[x].checked) { // If an option is chosen ...
            // Get value and add to total
            x++;
            var opID = "op"+x;
            var selected = document.getElementById(opID);
            riskValArr.push(selected.value);
            id++;
            // Go to next question
            iterate(id);
            break;
        }
    }

    if (id>=1){ // If past first question ...
        //Show: previous button
        previous.style.display = '';
    }

    if(id==(totalQues-1)){ // If on the last question ...
        // Hide: next button
        next.style.display = 'none';
        // Show: finish button
        finish.style.display = '';
    }
}

function previousFunc(){
    riskValArr.pop(); //removes from array
    if(id==(totalQues-1)){ // If on the second to last question ...
        // Hide: next button
        next.style.display = '';
        // Show: finish button
        finish.style.display = 'none';
    }
    if(id==1){ // If on the second question ...
        // Hide: previous button
        previous.style.display = 'none';
    }
    id = id -1; //to go back to previous ques
    iterate(id)  //goes to prev q's
}

function finishFunc(){
    // Evaluate last question
    const radioButtons = document.querySelectorAll('input[name="options"]');
    for (x in radioButtons) {
        if (radioButtons[x].checked) {
            x++;
            var opID = "op"+x;
            var selected = document.getElementById(opID);
            riskValArr.push(selected.value);
            break;
        }
    }
    var resultText = evaluateRisk(riskValArr); // run the array through the funciton to get the result text/value

    // Hide: form-container, finish button
    const form = document.getElementsByClassName('form-container');
    form[0].style.display = 'none';
    finish.style.display = 'none';
    start_container[0].style.display = 'none';
    previous.style.display = 'none';

    // Show: end-container
    const end = document.getElementsByClassName('end-container');
    end[0].style.display = '';
    const resultHeader = document.getElementById('resultHeader');
    
    // Edit end-container <p> to say user's results
    resultHeader.innerText = resultText[0];
    const riskScore = document.getElementById('riskScore');
    riskScore.innerText = "Your score: "+resultText[1];
}

function restartFunc(){
    // Set initial values again
    id = 0;
    riskValArr.length = 0;

    // Show:
    next.style.display = '';
    const form = document.getElementsByClassName('form-container');
    form[0].style.display = '';

    // Hide:
    const end = document.getElementsByClassName('end-container');
    end[0].style.display = 'none';
    finish.style.display = 'none';
    previous.style.display = 'none';

    // Start from first question
    iterate(0);
}

function iterate(id){
    // Showing what question out of total question is current
    const numQuestion = document.getElementById("questOfTotal");
    numQuestion.style.display = '';
    var currQuest = id+1;
    numQuestion.innerText = currQuest+" of "+totalQues+" questions";

    // Getting the question and setting it's text
    const question = document.getElementById("question");
    question.innerText = Questions[id].q;

    // Grab the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Provide new text for options
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    
    // Provide new values for options
    op1.value = Questions[id].a[0].riskVal;
    op2.value = Questions[id].a[1].riskVal;
    op3.value = Questions[id].a[2].riskVal;
    op4.value = Questions[id].a[3].riskVal;
}


// *** AUTOMATICALLY RUNS WHAT IS BELOW***

// Initialize values
var id = 0;
var start = true;
var totalQues = Questions.length;
const riskValArr = [];

// Grab the buttons, start-container
const finish = document.getElementById('finish');
const restart = document.getElementById('restart');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const start_container = document.getElementsByClassName('start-container');
const numQuestion = document.getElementById("questOfTotal");

// Hide: finish button
finish.style.display = 'none';
numQuestion.style.display = 'none';

// Initialize next button as "start"
next.innerText = "START";

// Get it started
if (start){
    // Hide: the form-container and end-contianer, and restart button
    const form = document.getElementsByClassName('form-container');
    form[0].style.display = 'none';
    const end = document.getElementsByClassName('end-container');
    end[0].style.display = 'none';
    restart.style.display = 'none';
    previous.style.display = 'none';
}

// When next button is clicked, advance to next question
next.addEventListener("click", nextFunc);

// When previous button is clicked, go back to next question
previous.addEventListener("click", previousFunc);

// When finish button is clicked, go to last page with results
finish.addEventListener("click", finishFunc);

// When this button is clicked, restart quiz
restart.addEventListener("click", restartFunc);
