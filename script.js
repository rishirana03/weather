alert("WARNING :-\ncheating ny🙏");
const questions=[
    {
        question: "what color dress were you wearing when you met me for the first time, Wi-Fi jii ?",
        answers:[
            {text:"black", correct: false},
            {text:"yellow", correct: true},
            {text:"pink", correct: false},
            {text:"red", correct: false},          
        ]
    },
    {
        question: "what color dress were you wearing when you met me for the secound time, Mrs. jii ?",
        answers:[
            {text:"pink", correct: false},
            {text:"red", correct: false},
            {text:"black", correct: false},
            {text:"yellow", correct: true},          
        ]
    },
    {
        question: "what was the date when we met and when we started talkin on the call, naagin jii?",
        answers:[
            {text:"3 DEC 2023", correct: true},
            {text:"4 DEC 2023", correct: false},
            {text:"28 DEC 2023", correct: false},
            {text:"30 DEC 2023", correct: false},          
        ]
    },
    {
        question: "when did I go to meet, you and only you in hzb, chudail jii?",
        answers:[
            {text:"14 jan 2024", correct: false},
            {text:"13 jan 2024", correct: false},
            {text:"12 jan 2024", correct: true},
            {text:"10 jan 2024", correct: false},          
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length} !  JALDI SE SCREENSHOT BHEJO AB❤️`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
