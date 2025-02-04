let correctAnswers = 0;
const questions = [
    {
        question: "What is the latest fashion trend for summer 2024?",
        options: ["Neon Colors", "Pastel Colors", "Black and White", "Earth Tones"],
        correct: 1
    },
    {
        question: "Which accessory is making a comeback in 2024?",
        options: ["Chunky Necklaces", "Belt Bags", "Bucket Hats", "Scarves"],
        correct: 2
    },
    {
        question: "What is the must-have footwear for 2024?",
        options: ["Sneakers", "Loafers", "Sandals", "Boots"],
        correct: 0
    },
    {
        question: "Which fabric is trending in 2024?",
        options: ["Linen", "Denim", "Silk", "Velvet"],
        correct: 0
    },
    {
        question: "What type of prints are popular in 2024?",
        options: ["Animal Prints", "Polka Dots", "Floral Prints", "Geometric Patterns"],
        correct: 3
    },
    {
        question: "Which color is dominating the fashion world in 2024?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correct: 2
    },
    {
        question: "What is the trending hairstyle for 2024?",
        options: ["Pixie Cut", "Long Layers", "Bob Cut", "Beach Waves"],
        correct: 3
    },
    {
        question: "What is the popular type of bag for 2024?",
        options: ["Tote Bag", "Clutch", "Backpack", "Crossbody Bag"],
        correct: 3
    },
    {
        question: "Which pattern is in vogue for 2024?",
        options: ["Stripes", "Plaid", "Paisley", "Solid"],
        correct: 1
    },
    {
        question: "What is the trending outerwear for 2024?",
        options: ["Blazer", "Bomber Jacket", "Trench Coat", "Leather Jacket"],
        correct: 2
    }
];

function startQuiz() {
    loadQuestions();
}

function loadQuestions() {
    const quizSection = document.getElementById('quiz');
    quizSection.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>Question ${index + 1}: ${q.question}</p>
            <div class="option-buttons">
                ${q.options.map((opt, i) => `<button onclick="submitAnswer(${index}, ${i}, this)">${opt}</button>`).join('')}
            </div>
        `;
        quizSection.appendChild(questionDiv);
    });
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit Quiz';
    submitButton.onclick = calculateResult;
    quizSection.appendChild(submitButton);
}

function submitAnswer(questionIndex, answerIndex, button) {
    if (questions[questionIndex].correct === answerIndex) {
        correctAnswers++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
    const buttons = button.parentNode.getElementsByTagName('button');
    for (let btn of buttons) {
        btn.disabled = true;
    }
}

function calculateResult() {
    const score = (correctAnswers / questions.length) * 100;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    if (score > 0) {
        document.getElementById('resultText').innerText = `Congratulations! You scored ${score.toFixed(2)}%. Spin the wheel for a prize!`;
        document.getElementById('spinWheel').style.display = 'block';
        document.getElementById('champagne').style.display = 'block';
    } else {
        document.getElementById('resultText').innerText = `You scored ${score.toFixed(2)}%. Please try again!`;
    }
}

// Spin the wheel logic
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const prizes = ['10% off', '20% off', '30% off', 'Free shipping', '50% off'];
const arcSize = (2 * Math.PI) / prizes.length;
let angle = 0;
let spinAngleStart = 0;
let spinTime = 0;
let spinTimeTotal = 0;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < prizes.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = getColor(i);
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, i * arcSize, (i + 1) * arcSize);
        ctx.fill();
        
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate((i + 0.5) * arcSize + angle);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "15px Arial";
        ctx.fillText(prizes[i], 120, 10);
        ctx.restore();
    }
}

function getColor(index) {
    const colors = ["#ff6666", "#66ff66", "#6666ff", "#ffcc66", "#66ccff"];
    return colors[index % colors.length];
}

function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    angle += (spinAngle * Math.PI) / 180;
    drawWheel();
    requestAnimationFrame(rotateWheel);
}

function stopRotateWheel() {
    const degrees = (angle * 180) / Math.PI + 90;
    const arcd = (arcSize * 180) / Math.PI;
    const index = Math.floor((degrees % 360) / arcd);
    document.getElementById('prizeText').innerText = `You won: ${prizes[index]}`;
}

function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
}

// Initialize the wheel when the page loads
document.addEventListener('DOMContentLoaded', () => {
    drawWheel();
    startQuiz();
});
