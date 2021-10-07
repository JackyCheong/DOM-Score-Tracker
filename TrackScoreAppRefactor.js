
const p1 = {
    score: 0,
    button: document.querySelector("#btnP1"),
    display: document.querySelector("#displayScoreP1")

}


const p2 = {
    score: 0,
    button: document.querySelector("#btnP2"),
    display: document.querySelector("#displayScoreP2")

}

const btnReset = document.querySelector("#btnReset");
const winLevel = document.querySelector("#winLevel");
let winScore = 3;
let isGameOver = false;

winLevel.addEventListener("change", function () {
    winScore = parseInt(this.value);
    reset();
})


function reset() {
    isGameOver = false;

    for (let p of [p1, p2]) {
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
        p2.button.disabled = false;
    }

}

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;

        }

        player.display.textContent = player.score;

    }


}

btnReset.addEventListener("click", reset);

p1.button.addEventListener("click", function () {
    updateScore(p1, p2);

});



p2.button.addEventListener("click", function () {

    updateScore(p2, p1);


});

