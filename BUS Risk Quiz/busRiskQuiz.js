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

}

]

// What happens when you click on next button
function nextBut(){
    if(selected == 0){ // If there is no selection, repeat same question
        alert("Please choose an option");
        iterate(id);
    }else{
        // Add the selected value
        riskValTotal += selected;
        start = false;
        // Reset button colors
        opB1.style.backgroundColor = "";
        opB2.style.backgroundColor = "";
        opB3.style.backgroundColor = "";
        opB4.style.backgroundColor = "";
        
        if (id < totalQues) { // If there are still questions to be asked...
            // Go to next question
            id++;
            iterate(id);
            if (id == totalQues-1){ // If current question is the last question...
                // Show finish button
                finish.style.display = '';
                next.style.display = 'none';
            }
        }else{ 
            document.write("ERROR"); // Checking if there is some random error
        }
    }
}

// What happens when you click on restart button
function restartBut(){
    // Reset values
    start = true;
    id = 0;
    riskValTotal = 0;
    // Make explanation table and result/finish buttons hide
    explainTable.style.display = 'none';
    result.style.display = 'none';
    finish.style.display = 'none';
    // Make the option table and next button show
    table.style.display = '';
    next.style.display = '';
    // Start with first question
    iterate("0");
    // Reset button colors
    opB1.style.backgroundColor = "";
    opB2.style.backgroundColor = "";
    opB3.style.backgroundColor = "";
    opB4.style.backgroundColor = "";
}

// What happens when you click on finish button
function finishBut(){
    if(selected == 0){ // If there is no selection, repeat same question
        alert("Please choose an option");
        iterate(id);
    }else{
        // Hide the button
        finish.style.display = 'none';
        // Add last question value
        riskValTotal += selected;
        // Print the result
        printResult(riskValTotal);
    }
}

// Iterate
function iterate(id) {
    // Getting the question and setting it's text
    const question = document.getElementById("question");
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    // Getting the buttons
    const opB1 = document.getElementById('opB1');
    const opB2 = document.getElementById('opB2');
    const opB3 = document.getElementById('opB3');
    const opB4 = document.getElementById('opB4');


    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the value to the options
    op1.value = Questions[id].a[0].riskVal;
    op2.value = Questions[id].a[1].riskVal;
    op3.value = Questions[id].a[2].riskVal;
    op4.value = Questions[id].a[3].riskVal;

    // Set selected value to zero
    selected = 0;

    // Show selection for op1
    opB1.addEventListener("click", () => {
        opB1.style.backgroundColor = "lightgoldenrodyellow";
        opB2.style.backgroundColor = "lightskyblue";
        opB3.style.backgroundColor = "lightskyblue";
        opB4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Show selection for op2
    opB2.addEventListener("click", () => {
        opB1.style.backgroundColor = "lightskyblue";
        opB2.style.backgroundColor = "lightgoldenrodyellow";
        opB3.style.backgroundColor = "lightskyblue";
        opB4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Show selection for op3
    opB3.addEventListener("click", () => {
        opB1.style.backgroundColor = "lightskyblue";
        opB2.style.backgroundColor = "lightskyblue";
        opB3.style.backgroundColor = "lightgoldenrodyellow";
        opB4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // Show selection for op4
    opB4.addEventListener("click", () => {
        opB1.style.backgroundColor = "lightskyblue";
        opB2.style.backgroundColor = "lightskyblue";
        opB3.style.backgroundColor = "lightskyblue";
        opB4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
}

// Logic to determine what user's financial risk tolerance
function getResult(val){
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


function printResult(val){
    // Hides the options and option buttons
    const table = document.getElementById('table');
    table.style.display = 'none';
    explainTable.style.display = '';
    next.style.display = 'none';
    finish.display = 'none';

    // Prints an ending message in the "question" section
    result.style.display = '';
    const questionArea = document.getElementById('question');
    var resultText = getResult(val);
    questionArea.innerText = resultText;

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

    // Prints the total risk value in the "options" section
    const optionArea = document.getElementById('result');
    optionArea.innerText = "Your score: "+val;

    // Get rid of finish button
    finish.style.display = 'none';
}


// *** AUTOMATICALLY RUNNING WHAT IS BELOW ***

// Initialize: start, length of questions (how many questions), risk total value, selected value, and result
var start = true; // makes it run on initial boot up
var totalQues = Questions.length;
var riskValTotal = 0;
var selected = 0;
var id = 0;
// Grab the finish + next + restart buttons, the result text, and explanation table
const finish = document.getElementsByClassName('finish')[0];
const restart = document.getElementsByClassName('restart')[0];
const next = document.getElementsByClassName('next')[0];
const result = document.getElementById('result');
const explainTable = document.getElementById('explain');
// Hide result text, finish button, and explanation table
finish.style.display = 'none';
result.style.display = 'none';
explainTable.style.display = 'none';

// To start on initial boot
if (start){
    iterate("0");
}

// When next button is clicked, advance to next question
next.addEventListener("click", nextBut);

// When finish button is clicked, go to last page with results
finish.addEventListener("click", finishBut);

// When this button is clicked, restart quiz
restart.addEventListener("click", restartBut);
