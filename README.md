# 🐤 Flappy Bird Clone

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Canvas-HTML5-success" />
</p>

<p align="center">
A modern recreation of the classic <b>Flappy Bird</b> game built entirely with <b>HTML5 Canvas</b>, <b>CSS3</b>, and <b>Vanilla JavaScript</b>. Fly through an endless series of pipes, avoid obstacles, and achieve the highest score possible.
</p>

---

# 🌐 Live Demo

🔗 **Play Here:** `https://flappy-bird-game-basic.vercel.app/`

---

# 📖 Project Overview

Flappy Bird Clone is a browser-based arcade game inspired by the original Flappy Bird. The game challenges players to control a bird that continuously falls due to gravity while navigating through randomly generated pipes.

The project demonstrates:

- 🎮 Real-time game loop implementation
- ⚡ Physics simulation using gravity and velocity
- 🧠 Collision detection algorithms
- 🖼️ Canvas-based rendering
- 🔄 Dynamic obstacle generation
- 📱 Responsive browser gameplay

This project is an excellent example of building interactive games using pure JavaScript without external libraries or frameworks.

---

# ✨ Features

## 🐦 Classic Flappy Bird Gameplay
- Tap the **Spacebar** to make the bird flap.
- The bird continuously falls because of gravity.
- Timing and precision are required to survive.

---

## 🌉 Infinite Procedural Pipe Generation
- Pipes are generated dynamically.
- Every playthrough is different.
- Endless gameplay experience.

---

## 🎯 Score Tracking System
- Score increases when the bird successfully passes through pipes.
- Displays current score in real time.
- Encourages replayability and high-score attempts.

---

## 💥 Collision Detection
The game accurately detects collisions with:

- Pipes
- Ground
- Ceiling

Once a collision occurs, the game ends immediately.

---

## ⚡ Smooth Animation Loop
Uses:

```javascript
requestAnimationFrame()
```

to provide:

- Smooth rendering
- Better performance
- Consistent gameplay across browsers

---

## 🎮 Game State Management

The game supports multiple states:

### ▶️ Start Screen
Waiting for the player to begin.

### 🎯 Running State
The main gameplay loop.

### 💀 Game Over State
Shows the final score and allows restarting.

---

## 🔄 Restart Functionality
Players can instantly restart after losing without refreshing the browser.

---

## 🎨 Beautiful UI
- Gradient backgrounds
- Smooth animations
- Canvas rendering
- Simple and clean interface

---

## 📱 Responsive Design
Playable on:

- 💻 Desktop
- 📱 Mobile Browsers
- 📟 Tablets

---

# 🛠️ Tech Stack

## Frontend Technologies

| Technology | Purpose |
|------------|----------|
| 🟧 HTML5 | Structure and Canvas API |
| 🟦 CSS3 | Styling and Layout |
| 🟨 JavaScript (ES6+) | Game Logic and Physics |

---

## Browser APIs Used

### 🎨 HTML5 Canvas API
Used for:

- Rendering the bird
- Drawing pipes
- Displaying score
- Handling animations

### ⏱️ requestAnimationFrame
Provides:

- Smooth game loop
- Efficient rendering
- Optimized browser performance

---


# ⚙️ Installation and Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abhishek140304/Flappy_Bird-Game
cd Flappy_Bird-Game
```

---

## 2️⃣ Run Locally

Since this is a pure frontend project, no installation is required.

Simply open:

```text
index.html
```

in your browser.

---

## Alternative Method

Using VS Code:

1. Install the **Live Server** extension.
2. Open the project folder.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

---


# 🎮 Controls

| Key | Action |
|-----|---------|
| Spacebar | Flap |
| Refresh / Restart | Start a New Game |

---

# 🧠 Concepts Demonstrated

- Game Development Fundamentals
- Canvas Rendering
- Collision Detection
- Physics Simulation
- Event Handling
- Procedural Generation
- State Management
- Animation Loops

---

# 🔄 Game Workflow

```text
Start Game
     ↓
Bird Falls Due to Gravity
     ↓
Player Presses Spacebar
     ↓
Pipes Move Across Screen
     ↓
Collision Check
     ↓
Update Score
     ↓
Game Over or Continue
```

---

# 🔮 Future Improvements

- 🏆 High Score Storage
- 🔊 Sound Effects
- 🌙 Dark Mode
- 🎵 Background Music
- 🐤 Different Bird Skins
- 📈 Difficulty Levels
- 🎮 Touch Controls
- 🌍 Multiplayer Leaderboard
