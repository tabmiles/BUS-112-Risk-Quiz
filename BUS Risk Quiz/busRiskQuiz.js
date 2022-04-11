// Questions that will be asked
const Questions = [{
    id: 0,
    q: "Question one?",
    a: [{ text: "A", riskVal: 1 },
        { text: "B", riskVal: 2 },
        { text: "C", riskVal: 3 },
        { text: "D", riskVal: 4 }
    ]

},
{
    id: 1,
    q: "Question Two?",
    a: [{ text: "1", riskVal: 1 },
        { text: "2", riskVal: 2 },
        { text: "3", riskVal: 3 },
        { text: "4", riskVal: 4 }
    ]

},
{
    id: 2,
    q: "Question Three?",
    a: [{ text: "abc", riskVal: 1 },
        { text: "def", riskVal: 2 },
        { text: "ghi", riskVal: 3 },
        { text: "jkl", riskVal: 4 }
    ]

},
{
    id: 3,
    q: "ENDING",
    a: [{ text: "", riskVal: 0 },
        { text: "", riskVal: 0 },
        { text: "", riskVal: 0 },
        { text: "", riskVal: 0 }
    ]

}

]

// Set start, risk total value, and result
var start = true;
var riskValTotal = 0;
var result = document.getElementsByClassName("result");

if (start) {
    iterate("0");
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
    var selected = 0;

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

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    riskValTotal += selected;
    console.log("Current riskTotalVal: "+riskValTotal);
    start = false;
    // Reset button colors
    opB1.style.backgroundColor = "";
    opB2.style.backgroundColor = "";
    opB3.style.backgroundColor = "";
    opB4.style.backgroundColor = "";
    
    // If there are still questions to be asked...
    if (id < 3) {
        id++;
        iterate(id);
        console.log("id of question: ", id);
        if (id == 3){
            // TODO: clear the css and ONLY show the finish button

            // Change next button to say finish
            next.innerHTML = "FINISH";

            // Temporary hiding of everything
            op1.style.visibility='hidden';
            op2.style.visibility='hidden';
            op3.style.visibility='hidden';
            op4.style.visibility='hidden';
            opB1.style.visibility='hidden';
            opB2.style.visibility='hidden';
            opB3.style.visibility='hidden';
            opB4.style.visibility='hidden';
        }
    }else{
        // TODO: clear all css and text and only show result and retry (next) button

        // Print the result
        result[0].innerText = riskValTotal;
        next.innerHTML = "Retry"; //TODO: make this button on click reset the entire quiz

        // Temporary hiding of everything
        op1.style.visibility='hidden';
        op2.style.visibility='hidden';
        op3.style.visibility='hidden';
        op4.style.visibility='hidden';
        opB1.style.visibility='hidden';
        opB2.style.visibility='hidden';
        opB3.style.visibility='hidden';
        opB4.style.visibility='hidden';
    }
})
