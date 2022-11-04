const quizData = [
    { //   1
        question: 'At the time of writing (March 2022) how many episodes of The Simpsons are there?',
        a: "973",
        b: "730",
        c: "990",
        d: "850",
        correct: "c",
    }, { // 2
        question: 'What does He stand for on the periodic table?',
        a: "Helium",
        b: "Helienium",
        c: "Heroin",
        d: "Hemisphere",
        correct: "a",
    },{ // 3
        question: "What is the capital of finland?",
        a: "Honolulu",
        b: "Helsinki",
        c: "Venice",
        d: "Luton",
        correct: "b", 
    },{ // 4
        question: "Which five colours make up the Olympic rings?",
        a: "Black, green, blue, yellow and red",
        b: "Black, cream, indido, yellow, crisom",
        c: "Black, lime, violet, orange, pink",
        d: "Black, green, violet, yet, maroon",
        correct: "a",
    },{ // 5
        question: "In Harry Potter, what is the name of The Weasleys house?",
        a: "The refuge",
        b: "The Homely",
        c: "The Haven",
        d: "The borrow",
        correct: "d",
    },{ // 6 
        question:"To a single decimal point, how many kilometers are in a mile?",
        a:"1.6km",
        b:"1.4km",
        c:"1.9km",
        d:"1.5km",
        correct: "a",
    },{// 7
        question:"Which planet is closest to the sun?",
        a:"Mercury",
        b:"Venus",
        c:"Neptune",
        d:"Pluto",
        correct: "a",
    },{ // 8
        question:"What was the most streamed show on Netflix in 2020?",
        a:"The Umbrella Academy",
        b:"The Young Royals, with 43million stream",
        c:"The Sandman,",
        d:"Wu Assasins",
        correct: "a",
    },{ // 9
        question:"Which one is the smallest ocean in the World? ",
        a:"Indian",
        b:"Pacific",
        c:"Atlantic",
        d:"Arctic",
        correct: "d",
    }, { //10
        question:"Which country gifted the statute of liberty to USA in 1886?",
        a:"Canada",
        b:"Brazil",
        c:"France",
        d:"England",
        correct: "c",
    },{ // 11
        question:"Dead sea is located bettwen which two countries?",
        a:"Jordan and Sudan",
        b:"Jordan and Israel",
        c:"Turkey and UAE",
        d:"UAE and Egypt",
        correct: "b",
    },{ // 12
        question:"Which ocean 'Bermuda Triangle' region is located?",
        a:"Atlantic",
        b:"Indian",
        c:"Pacific",
        d:"Arctic",
        correct: "a",
    },


];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById
('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById
("submit");

let currentQuiz = 0;
let score =0;
 
 
loadQuiz();

function loadQuiz() { 
    deselectAnswers();
    const currentQuizData = quizData
    [currentQuiz];

    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    

    answerEls.forEach((answerEl) => {
     if(answerEl.checked){
            answer = answerEl.id;
    }});

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

    });
}

submitBtn.addEventListener("click", () =>{
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].
            correct){
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = 
            `<h2>You answered correctly at
            ${score}/${quizData.length}
            questions.</h2>
             
            <button onclick= "location.reload()
            ">Reload</button>`;
        }
    }
});