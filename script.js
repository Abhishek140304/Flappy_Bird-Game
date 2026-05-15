const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Bird object
const bird = {
    x: 50,
    y: 200,
    width: 30,
    height: 30,
    color: "#FFD700",
    velocity: 0
};

const pipes = [];
let score = 0;
let gameOver = false;

// Constants
const PIPE_GAP = 160;
const PIPE_SPACING = 300;
const GRAVITY = 0.3;

// Update bird position
function updateBird() {
    bird.velocity += GRAVITY;
    bird.y += bird.velocity;

    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        gameOver = true;
    }
}

function updatePipes() {
    pipes.forEach(pipe => {
        pipe.x -= 5;

        // Score updation
        if (!pipe.passed && pipe.x + pipe.width < bird.x) {
            pipe.passed = true;
            score++;
            document.getElementById("score").textContent = score;
        }

        // Collision
        if (
            bird.x < pipe.x + pipe.width &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.topHeight ||
                bird.y + bird.height > pipe.bottomY)
        ) {
            gameOver = true;
        }
    });

    // Adding new pipe
    if (
        pipes.length === 0 ||
        pipes[pipes.length - 1].x < canvas.width - PIPE_SPACING
    ) {
        const topHeight = Math.random() * (canvas.height - PIPE_GAP - 100) + 50;
        pipes.push({
            x: canvas.width,
            width: 50,
            topHeight: topHeight,
            bottomY: topHeight + PIPE_GAP,
            passed: false
        });
    }

    // Removing pipe
    if (pipes[0] && pipes[0].x + pipes[0].width < 0) {
        pipes.shift();
    }
}

function jump() {
    bird.velocity = -6;
}

function resetGame() {
    bird.x = 50;
    bird.y = 150;
    bird.velocity = 0;
    pipes.length = 0;
    score = 0;

    document.getElementById("score").textContent = score;

    gameOver = false;
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        if (gameOver) {
            resetGame();
        } else {
            jump();
        }
    }
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
        ctx.font = "18px Arial";

        ctx.font = "18px Arial";

        ctx.fillText(
            "Press Space to Restart",
            canvas.width / 2 - 110,
            canvas.height / 2 + 40
        );
        
    }
    else{
        updateBird();
        updatePipes();
    
        // Draw pipes
        ctx.fillStyle = "green";
        pipes.forEach(pipe => {
            ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);
            ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, canvas.height - pipe.bottomY);
        });
    
        // Draw bird
        ctx.fillStyle = bird.color;
        ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
    
        // Draw score
        ctx.fillStyle = "black";
        ctx.font = "24px Arial";
        ctx.fillText(`Score: ${score}`, 20, 30);
    }


    requestAnimationFrame(gameLoop);
}

gameLoop();