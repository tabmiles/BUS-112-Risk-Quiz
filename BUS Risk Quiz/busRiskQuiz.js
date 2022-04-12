// Questions that will be asked
const Questions = [{
    id: 0,
    q: "Question one",
    a: [{ text: "A", riskVal: 1 },
        { text: "B", riskVal: 2 },
        { text: "C", riskVal: 3 },
        { text: "D", riskVal: 4 }
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
    return result;
}


function printResult(val){
    // Hides the options and option buttons
    const table = document.getElementById('table');
    table.style.display = 'none';
    explainTable.style.display = '';
    next.style.display = 'none';

    // Prints an ending message in the "question" section
    result.style.display = '';
    retry.style.display = '';
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

    // Set "next" button to be "retry" and get rid of finish button
    finish.style.display = 'none';
    // When this button is pressed, restart quiz
    retry.addEventListener("click", () => {
        // Reset values
        retry.style.display = 'none';
        explainTable.style.display = 'none';
        table.style.display = '';
        next.style.display = '';
        result.style.display = 'none';
        next.innerHTML = "Next";
        start = true;
        id = 0;
        riskValTotal = 0;
        iterate("0");
        // Reset button colors
        opB1.style.backgroundColor = "";
        opB2.style.backgroundColor = "";
        opB3.style.backgroundColor = "";
        opB4.style.backgroundColor = "";
    })
}



// RUNNING WHAT IS BELOW
// Set start, risk total value, selected, and result
var start = true; // makes it run on initial boot up
var totalQues = Questions.length;
var riskValTotal = 0;
var selected = 0;
const finish = document.getElementsByClassName('finish')[0];
finish.style.display = 'none';
const retry = document.getElementsByClassName('retry')[0];
retry.style.display = 'none';
const result = document.getElementById('result');
result.style.display = 'none';
const explainTable = document.getElementById('explain');
explainTable.style.display = 'none';

if (start){
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    if(selected == 0){
        alert("Please choose an option");
        console.log(id);
        iterate(id);
    }else{
        riskValTotal += selected;
        console.log("Current riskTotalVal: "+riskValTotal+" Current id: "+ id);
        start = false;
        // Reset button colors
        opB1.style.backgroundColor = "";
        opB2.style.backgroundColor = "";
        opB3.style.backgroundColor = "";
        opB4.style.backgroundColor = "";
        
        // If there are still questions to be asked...
        if (id < totalQues) {
            id++;
            iterate(id);
            if (id == totalQues-1){
                // Change next button to say finish
                finish.style.display = '';
                next.style.display = 'none';
                // When finish button is hit
            }
        }else{ 
            document.write("ERROR");
        }
    }
})

finish.addEventListener("click", () => {
    if(selected == 0){
        alert("Please choose an option");
        iterate(id);
    }else{
        riskValTotal += selected;
        console.log("LAST Current riskTotalVal: "+riskValTotal+" Current id: "+ id);
        printResult(riskValTotal);
    }
})
