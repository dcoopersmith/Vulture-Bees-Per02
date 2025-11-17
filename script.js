const Questions = [   
    {
        q: "Fill in the blank: Vulture Bees live _________.",
        a: [{ text: "in Moreno Valley.", isCorrect: false },
            { text: "in South America.", isCorrect: true },
            { text: "in Africa.", isCorrect: false },
            { text: "in Asia.", isCorrect: false },
           ]        
    },
    {
        q: "Fill in the blank: Vulture Bees eat _________.",
        a: [{ text: "meat.", isCorrect: true },
            { text: "leaves.", isCorrect: false },
            { text: "dirt.", isCorrect: false },
            { text: "bones.", isCorrect: false },
           ]  
    },
    {
        q: "Fill in the blank: All of these are types of Vulture Bees except _________.",
        a: [{ text: "queen.", isCorrect: false },
            { text: "forager.", isCorrect: false },
            { text: "drone.", isCorrect: false },
            { text: "guardian.", isCorrect: true },
           ]  
    },
    {
        q: "Fill in the blank: What is the purpose of Vulture Bees? __________.",
        a: [{ text: "to look cool.", isCorrect: false },
            { text: "to sting people.", isCorrect: false },
            { text: "clean the environment of rotting animals.", isCorrect: true },
            { text: "make honey.", isCorrect: false },
           ]  
    },

    //  ToDo: add more questions???


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
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns() 
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value );
    if ( Questions[currQuestion].a[selectedAns].isCorrect )
    {
        score++;
        console.log("Correct!");
        nextQuestion();
    }
    else
    {
        console.log("Wrong!");
        nextQuestion();
    }

}

function nextQuestion()
{
    if ( currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();

        loadScore();
    }
}

function loadScore()
{
    const totalScore = document.getElementById("score");

    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}