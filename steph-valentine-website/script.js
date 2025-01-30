document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("identity-screen").classList.add("hidden");
    document.getElementById("question1").classList.remove("hidden");
});

// Function to handle correct and incorrect answers
function handleAnswerClick(event) {
    let currentQuestion = event.target.parentElement;
    let isCorrect = event.target.dataset.correct === "true";
    let wrongAnswerDiv = currentQuestion.querySelector(".wrong-answer");

    if (isCorrect) {
        // Hide current question
        currentQuestion.classList.add("hidden");
        wrongAnswerDiv.classList.add("hidden");

        // Add a cute heart animation
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = `${event.clientX}px`;
        heart.style.top = `${event.clientY}px`;
        heart.style.fontSize = "30px";
        heart.style.animation = "floatUp 1s ease-out forwards";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1000);

        // Show next question or Valentine's proposal
        if (currentQuestion.id === "question1") {
            document.getElementById("question2").classList.remove("hidden");
        } else if (currentQuestion.id === "question2") {
            document.getElementById("question3").classList.remove("hidden");
        } else if (currentQuestion.id === "question3") {
            document.getElementById("valentine-screen").classList.remove("hidden");
        }
    } else {
        // Show the GIF when the wrong answer is selected
        wrongAnswerDiv.classList.remove("hidden");
    }
}


// Add event listeners to all answer buttons
document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", handleAnswerClick);
});

document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("response-message").classList.remove("hidden");
});

const noButton = document.getElementById("no-btn");

// Function to move the "No" button
function moveNoButton() {
    let randomX = Math.random() * (window.innerWidth - 100);
    let randomY = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Move the "No" button when hovered
noButton.addEventListener("mouseenter", moveNoButton);





