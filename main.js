const quizContainer = document.getElementById('quiz-container');
const categories = {
    python: [
        {
            question: 'What is Python?',
            options: ['Programming Language', 'Snake', 'Framework', 'Tool'],
            answer: 'Programming Language'
        },
        // Add more questions here
    ],
    html: [
        {
            question: 'What does HTML stand for?',
            options: ['Hyper Text Markup Language', 'High-level Text Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
            answer: 'Hyper Text Markup Language'
        },
        // Add more questions here
    ],
    javascript: [
        {
            question: 'Which one of these is a JavaScript framework?',
            options: ['React', 'Vue', 'Angular', 'All of the above'],
            answer: 'All of the above'
        },
        // Add more questions here
    ],
    sql: [
        {
            question: 'What does SQL stand for?',
            options: ['Structured Query Language', 'Sequential Query Language', 'Simple Query Language', 'None of the above'],
            answer: 'Structured Query Language'
        },
        // Add more questions here
    ]
};

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

function loadQuiz(category) {
    const questions = categories[category];

    if (questions) {
        let quizHTML = '';
        questions.forEach((q, index) => {
            quizHTML += `
                <div class="question">
                    <h3>${index + 1}. ${q.question}</h3>
                    <ul class="options">
                        ${q.options.map(option => `<li>${option}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        quizContainer.innerHTML = quizHTML;
    } else {
        quizContainer.innerHTML = '<p>No quiz found for this category</p>';
    }
}

loadQuiz(category);
