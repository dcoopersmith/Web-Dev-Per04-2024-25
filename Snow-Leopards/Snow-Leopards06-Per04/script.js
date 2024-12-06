// JSON (JavaScript Object Notation)
const Questions = [
    {
        q: "Fill in the blank: Snow leopards live ____.",
        a:  [{text: "in the desert.", isCorrect: false},
             {text: "in the jungle.", isCorrect: false},
             {text: "in the mountains.", isCorrect: true},
             {text: "in the city.", isCorrect: false},
            ]
    }

];

let currQuestion = 0;
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
    }
}

loadQues();

