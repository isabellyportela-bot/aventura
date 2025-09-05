let player = document.getElementById("player");
let item = document.getElementById("item");
let obstacle = document.getElementById("obstacle");

let playerPosition = { x: 20, y: 20 };
let itemPosition = { x: 200, y: 200 };
let obstaclePosition = { x: 350, y: 350 };

let itemCollected = false;

function movePlayer(direction) {
    switch (direction) {
        case "up":
            if (playerPosition.y > 0) playerPosition.y -= 10;
            break;
        case "down":
            if (playerPosition.y < 470) playerPosition.y += 10;
            break;
        case "left":
            if (playerPosition.x > 0) playerPosition.x -= 10;
            break;
        case "right":
            if (playerPosition.x < 470) playerPosition.x += 10;
            break;
    }

    // Atualizar a posição do jogador no HTML
    player.style.left = playerPosition.x + "px";
    player.style.top = playerPosition.y + "px";

    checkCollision();
}

function checkCollision() {
    if (
        playerPosition.x < itemPosition.x + 30 &&
        playerPosition.x + 30 > itemPosition.x &&
        playerPosition.y < itemPosition.y + 30 &&
        playerPosition.y + 30 > itemPosition.y
    ) {
        itemCollected = true;
        alert("Você coletou o item!");
        item.style.display = "none"; // Remover item após coleta
    }

    if (
        playerPosition.x < obstaclePosition.x + 30 &&
        playerPosition.x + 30 > obstaclePosition.x &&
        playerPosition.y < obstaclePosition.y + 30 &&
        playerPosition.y + 30 > obstaclePosition.y
    ) {
        alert("Você bateu no obstáculo! Jogo perdido.");
        resetGame();
    }
}

function resetGame() {
    playerPosition = { x: 20, y: 20 };
    itemCollected = false;
    player.style.left = playerPosition.x + "px";
    player.style.top = playerPosition.y + "px";
    item.style.display = "block"; // Reexibir item
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        movePlayer("up");
    } else if (event.key === "ArrowDown") {
        movePlayer("down");
    } else if (event.key === "ArrowLeft") {
        movePlayer("left");
    } else if (event.key === "ArrowRight") {
        movePlayer("right");
    }
});

