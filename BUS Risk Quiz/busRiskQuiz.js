// Questions that will be asked
const Questions = [{
    id: 0,
    q: "In general, how would your best friend describe you as a risk taker?",
    a: [{ text: "A real gambler", riskVal: 4 },
        { text: "Willing to take risks after completing adequate research", riskVal: 3 },
        { text: "Cautious", riskVal: 2 },
        { text: "A real risk avoider", riskVal: 1 }
    ]
},
{
    id: 1,
    q: "Question Two",
    a: [{ text: "1", riskVal: 1 },
        { text: "2", riskVal: 2 },
        { text: "3", riskVal: 3 },
        { text: "4", riskVal: 4 }
    ]
},
{
    id: 2,
    q: "Question Three",
    a: [{ text: "abc", riskVal: 1 },
        { text: "def", riskVal: 2 },
        { text: "ghi", riskVal: 3 },
        { text: "jkl", riskVal: 4 }
    ]
}] // End of Questions

function evaluateRisk(val){
    var result;
    if (val <= 18){
        result = "You have a low risk tolerance (ie. conservative investor)!";
    }else if(19 <= val <= 22){
        result = "You have a below-average risk tolerance!";
    }else if(23 <= val <= 28){
        result = "You have an average/moderate risk tolerance!";
    }else if(29 <= val <= 32){
        result = "You have a above-average risk tolerance!";
    }else if(33 <= val){
        result = "You have a high risk tolerance (ie. aggresive investor!";
    }
    // Return the string of result to be posted on page
    return result;
}

function nextFunc(){
    if (start){ // If currently at first scene ...
        start = false;
        // Hide: start-container
        start_container[0].style.display = 'none';
        // Show option-container
        const form = document.getElementsByClassName('form-container');
        form[0].style.display = '';
        restart.style.display = '';
        // Update next button to say "Next"
        next.innerText = "Next";
        // Do first question
        iterate("0");
    }

    // Check to make sure an option is chosen
    const radioButtons = document.querySelectorAll('input[name="options"]');
    for (x in radioButtons) {
        if (radioButtons[x].checked) { // If an option is chosen ...
            // Get value and add to total
            x++;
            var opID = "op"+x;
            var selected = document.getElementById(opID);
            riskValTotal += selected.value;
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
    // TODO: implement
}

function finishFunc(){
    // Evaluate last question
    const radioButtons = document.querySelectorAll('input[name="options"]');
    for (x in radioButtons) {
        if (radioButtons[x].checked) {
            x++;
            var opID = "op"+x;
            var selected = document.getElementById(opID);
            riskValTotal += selected.value;
            break;
        }
    }
    var resultText = evaluateRisk(riskValTotal);
    console.log(resultText);

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
    resultHeader.innerText = resultText;
    const riskScore = document.getElementById('riskScore');
    riskScore.innerText = "Your score: "+riskValTotal;

    // Prints the risk value explainations
    const ex1 = document.getElementById('explain1');
    const ex2 = document.getElementById('explain2');
    const ex3 = document.getElementById('explain3');
    const ex4 = document.getElementById('explain4');
    const ex5 = document.getElementById('explain5');
    ex1.innerText = "18 or below is low risk tolerance (ie. conservative investor)";
    ex2.innerText = "19-22 is below-average risk tolerance";
    ex3.innerText = "23-28 is average/modreate risk tolerance";
    ex4.innerText = "29-32 is above-average risk tolerance";
    ex5.innerText = "33 or above is high risk tolerance (ie. aggrssive investor)";
}

function restartFunc(){
    // Set initial values again
    id = 0;
    riskValTotal = 0;

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
    iterate("0");
}

function iterate(id){
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
var riskValTotal = 0;
var totalQues = Questions.length;

// Grab the buttons
const finish = document.getElementById('finish');
const restart = document.getElementById('restart');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const start_container = document.getElementsByClassName('start-container');

// Hide: finish button
finish.style.display = 'none';

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
