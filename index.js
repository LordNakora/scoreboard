
let homeScore = 0;
let guestScore = 0;

const homeDisplay = document.getElementById("score-left");
const guestDisplay = document.getElementById("score-right");

function updateDisplay() {
    homeDisplay.textContent = homeScore;
    guestDisplay.textContent = guestScore;
}

function addScore(team, points) {
    if (!Number.isInteger(points) || points < 1) return;

    if (team === "home") {
        homeScore += points;
    } else if (team === "guest") {
        guestScore += points;
    }

    updateDisplay();
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    updateDisplay();
}

// Handle all scoring buttons
document.querySelectorAll("[data-team]").forEach(button => {
    button.addEventListener("click", () => {
        const team = button.dataset.team;
        const points = Number(button.dataset.points);

        addScore(team, points);
    });
});

// Start a new game
document.getElementById("new-game").addEventListener("click", resetScores);

// Initialize scoreboard
updateDisplay();
