let homeScore = 0;
let guestScore = 0;

const homeDisplay = document.getElementById("score-left");
const guestDisplay = document.getElementById("score-right");

// Check that scoreboard elements exist
if (!homeDisplay || !guestDisplay) {
    throw new Error("Scoreboard elements not found!");
}

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
    } else {
        return;
    }

    updateDisplay();
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    updateDisplay();
}

document.querySelectorAll("[data-team]").forEach(button => {
    button.addEventListener("click", () => {
        const team = button.dataset.team;
        const points = Number(button.dataset.points);

        addScore(team, points);
    });
});

document.getElementById("new-game").addEventListener("click", resetScores);

updateDisplay();
