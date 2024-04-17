const questions = [
    {
        question: "What is the output of 'print(2 + 3 * 5)'?",
        options: ["10", "25", "17", "None"],
        answer: ""
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "def", "define", "function"],
        answer: "def"
    },
    {
        question: "What does the 'len()' function do?",
        options: ["Returns the length of a string", "Returns the length of a list", "Returns the length of a dictionary", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which statement is used to exit a loop prematurely?",
        options: ["break", "exit", "continue", "return"],
        answer: "break"
    },
    {
        question: "What is the correct file extension for Python files?",
        options: [".pyt", ".python", ".py", ".pt"],
        answer: ".py"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function() {
    showQuestion();
});

function showQuestion() {
    const questionData = pythonQuizData[currentQuestionIndex];
    document.getElementById("quizTitle").textContent = "Question " + (currentQuestionIndex + 1);
    
    let optionsHtml = "";
    for (let option of questionData.options) {
        optionsHtml += `<input type="radio" name="option" value="${option}">
                        <label>${option}</label><br>`;
    }
    
    document.getElementById("quizContainer").innerHTML = optionsHtml;
    
    document.getElementById("nextBtn").addEventListener("click", function() {
        checkAnswer(questionData.answer);
    });
}

function checkAnswer(correctAnswer) {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.value === correctAnswer) {
            score++;
            document.getElementById("feedback").textContent = "Correct!";
        } else {
            document.getElementById("feedback").textContent = "Wrong!";
        }
        
        currentQuestionIndex++;
        if (currentQuestionIndex < pythonQuizData.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    } 
}

function finishQuiz() {
    document.getElementById("quizTitle").textContent = "Quiz Completed!";
    document.getElementById("quizContainer").innerHTML = `Your score: ${score}/${pythonQuizData.length}`;
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("feedback").textContent = "";
}
