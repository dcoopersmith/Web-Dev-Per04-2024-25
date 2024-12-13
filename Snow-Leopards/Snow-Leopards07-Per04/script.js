// JSON (JavaScript Object Notation)
const Questions = [
    {
        q: "Fill in the blank: Snow leopards live ____.",
        a:  [{text: "in the desert.", isCorrect: false},
             {text: "in the jungle.", isCorrect: false},
             {text: "in the mountains.", isCorrect: true},
             {text: "in the city.", isCorrect: false},
            ]
    },
    {
        q: "Fill in the blank: Snow leopards have the colors ____.",
        a:  [{text: "red, with whitish fur.", isCorrect: false},
             {text: "whitish-gray fur.", isCorrect: true},
             {text: "orange with black stripes.", isCorrect: false},
             {text: "black with white dots.", isCorrect: false},
            ]
    },
    {
        q: "Fill in the blank: Snow leopards use their tails for ____.",
        a:  [{text: "balance.", isCorrect: true},
             {text: "kill their prey.", isCorrect: false},
             {text: "grabbing objects.", isCorrect: false},
             {text: "swinging.", isCorrect: false},
            ]
    },
    {
        q: "Fill in the blank: Snow leopards eat ____.",
        a:  [{text: "frogs.", isCorrect: false},
             {text: "fish.", isCorrect: false},
             {text: "lions.", isCorrect: false},
             {text: "deer.", isCorrect: true},
            ]
    },
    // add more questions here...
];

let currQuestion = 3;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choicelabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choicelabel.textContent = Questions[currQuestion].a[i].text;
        
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choicelabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function checkAns() 
{
    const selectedAns = parseInt( document.querySelector('input[name="answer"]:checked').value    );
}

