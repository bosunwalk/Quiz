const quizData = [
    { //   1
        question: ' #1. How many countries were participated as founding member of United Nation?',
        a: "45",
        b: "50",
        c: "51",
        d: "75",
        correct: "c",
    }, { // 2
        question: '#2. What does He stand for on the periodic table?',
        a: "Helium",
        b: "Helienium",
        c: "Heroin",
        d: "Hemisphere",
        correct: "a",
    },{ // 3
        question: "#3. What is the capital of finland?",
        a: "Honolulu",
        b: "Helsinki",
        c: "Venice",
        d: "Luton",
        correct: "b", 
    },{ // 4
        question: "#4. Which five colours make up the Olympic rings?",
        a: "Black, green, blue, yellow and red",
        b: "Black, cream, indido, yellow, crisom",
        c: "Black, lime, violet, orange, pink",
        d: "Black, green, violet, yet, maroon",
        correct: "a",
    },{ // 5
        question: "#5. In Harry Potter, what is the name of The Weasleys house?",
        a: "The refuge",
        b: "The Homely",
        c: "The Haven",
        d: "The borrow",
        correct: "d",
    },{ // 6 
        question:"#6. To a single decimal point, how many kilometers are in a mile?",
        a:"1.6km",
        b:"1.4km",
        c:"1.9km",
        d:"1.5km",
        correct: "a",
    },{// 7
        question:"#7. Which planet is closest to the sun?",
        a:"Mercury",
        b:"Venus",
        c:"Neptune",
        d:"Pluto",
        correct: "a",
    },{ // 8
        question:"#8. What was the most streamed show on Netflix in 2020?",
        a:"The Umbrella Academy",
        b:"The Young Royals, with 43million stream",
        c:"The Sandman,",
        d:"Wu Assasins",
        correct: "a",
    },{ // 9
        question:"#9. Which one is the smallest ocean in the World? ",
        a:"Indian",
        b:"Pacific",
        c:"Atlantic",
        d:"Arctic",
        correct: "d",
    }, { //10
        question:"#10. Which country gifted the statute of liberty to USA in 1886?",
        a:"Canada",
        b:"Brazil",
        c:"France",
        d:"England",
        correct: "c",
    },{ // 11
        question:"#11. Dead sea is located bettwen which two countries?",
        a:"Jordan and Sudan",
        b:"Jordan and Israel",
        c:"Turkey and UAE",
        d:"UAE and Egypt",
        correct: "b",
    },{ // 12
        question:"#12. Which ocean 'Bermuda Triangle' region is located?",
        a:"Atlantic",
        b:"Indian",
        c:"Pacific",
        d:"Arctic",
        correct: "a",
    },{ //13
        question:"#13. Which country is known as the 'playground of Europe?",
        a:"Austria",
        b:"Holland",
        c:"Switzerland",
        d:"Italy",
        correct: "c",
    },{ // 14
        question:"#14. Which country is also known as 'Landof the rising Sun'?",
        a:"Japan",
        b:"New Zealand",
        c:"Fiji",
        d:"China",
        correct: "a",
    },{ //15
        question:"#15. Which country is known as the 'Land of Thunderbolts'? ",
        a:"China",
        b:"Bhutan",
        c:"Mongolia",
        d:"Thailand",
        correct: "b",
    },{ // 16
        question:"#16. Which continent has the highest number of countries?",
        a:"Asia",
        b:"Europe",
        c:"North America",
        d:"Africa",
        correct: "d",
    },{ // 17
        question:"#17. Mount Kilimanjaro is located in which country? ",
        a:"Tanzania",
        b:"Ghana",
        c:"Namibia",
        d:"South Africa",
        correct: "a",
    },{// 18
        question:"#18. Blue Nile and White Nile meet at?",
        a:"Khartoum",
        b:"Cairo",
        c:"Marrakesh",
        d:"Lagos",
        correct: "a",
    },{//19
        question:"#19. The river that crosses Equator two times is?",
        a:"Congo",
        b:"Nile",
        c:"Limpopo",
        d:"Niger",
        correct: "a",
    },{//20
        question:"#20. Lake Victoria does not border?",
        a:"Tanzania",
        b:"Uganda",
        c:"Kenya",
        d:"Zimbabwe",
        correct: "d",
    },{ // 21
        question:"#21. Which of the following African country is landlocked? ",
        a:"South Africa",
        b:"Ethiopia",
        c:"Libya",
        d:"Nigeria",
        correct: "b",
    },{// 22
        question:"#22. Tropic of cancer does not pass through?",
        a:"Mali",
        b:"Mauritina",
        c:"Algeria",
        d:"Congo",
        correct: "d",
    },{ //23
        question:"#23. Tropic of cancer does not pass through? ",
        a:"Steppe",
        b:"Pampas",
        c:"Savanna",
        d:"Downs",
        correct: "c",
    },{// 24
        question:"#24.Which country does not fall in the horn of Africa?",
        a:"Djibouti",
        b:"Egypt",
        c:"Ethiopa",
        d:"Kenya",
        correct:"d",
    },{// 25
        question:"#25. Which African country shares its boundary with Mediterranean Sea?",
        a:"Libya",
        b:"Kenya",
        c:"Congo",
        d:"Uganda",
        correct:"a",

    }


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
            ">Reload</button>
             
            <a href="/answers.html"><button
            ">See Answers</button></a>`;
        }
    }
});