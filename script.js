const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is The Financial Capital of India?" ,
        answers: [
            { text: "Delhi" , correct: false },
            { text: "Mumbai" , correct: true },
            { text: "Kolkata" , correct: false },
            { text: "Chennai", correct: false},
        ]
    },
    {
        question: "Which of these Language is Dynamically Typed?" ,
        answers: [
            { text : "Ruby" , correct: false },
            { text : "Solidity Language" , correct: false },
            { text: "Python", correct: true },
            { text: "HTML", correct: false },
        ]
    },
    // Add more questions here
];

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    nextButton.disabled = false;
    answerButtons.querySelectorAll(".answer-btn").forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.disabled = true;
        answerButtons.querySelectorAll(".answer-btn").forEach(button => {
            button.disabled = false;
        });
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerText = "Quiz completed!";
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
    scoreContainer.innerText = `Your score: ${score}/${questions.length}`;
}

startQuiz();
