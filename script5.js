let currentQuestion = generateQuestion();
let score = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 * num2;

    document.getElementById('question').innerText = `${num1} * ${num2} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';

    return answer;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);

    if (!isNaN(userAnswer)) {
        if (userAnswer === currentQuestion) {
            document.getElementById('result').innerText = 'Правильно!';
            score++;
        } else {
            document.getElementById('result').innerText = 'Неправильно. Спробуйте ще раз.';
        }

        document.getElementById('score').innerText = `Score: ${score}`;
        currentQuestion = generateQuestion();
    } else {
        document.getElementById('result').innerText = 'Будь ласка, введіть число.';
    }
}
