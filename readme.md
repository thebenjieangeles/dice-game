# 🎲 Dicee Game

A simple, interactive web-based dice game where two players roll virtual dice to determine the winner. Built using **HTML**, **CSS**, and **JavaScript**.

## 📌 Features

- Click the heading to roll two dice simultaneously.
- Displays the winner based on dice roll results or declares a draw.
- Fun, playful design with custom Google Fonts.
- Fully responsive and browser-friendly.

## 🖥 Demo

Open `index.html` in your browser and click the **"Refresh Me"** heading to roll the dice.

## 📂 Project Structure

.
├── index.html # Main HTML file
├── styles.css # Styling for the game
├── script.js # Game logic and interactions
├── images/ # Dice face images (dice1.png ... dice6.png)
└── README.md # Project documentation

## ⚙️ How It Works

1. **Event Trigger**: Clicking the `<h1>` heading runs the `rollDice()` function.
2. **Random Dice Roll**: Two random numbers (1–6) are generated using `Math.random()`.
3. **Image Update**: Dice images change dynamically to match the random results.
4. **Winner Display**: The heading updates to announce **Player 1**, **Player 2**, or a **Draw**.

## 🛠 Technologies Used

- **HTML5** – Structure and layout
- **CSS3** – Styling and fonts
- **JavaScript (ES6)** – Game logic and DOM manipulation
- **Google Fonts** – Indie Flower & Lobster for a playful look

## 📷 Screenshots

_(Add your own screenshots here)_

## 🚀 Getting Started

1. Clone or download this repository.
2. Ensure the `images` folder contains `dice1.png` through `dice6.png`.
3. Open `index.html` in your browser.
4. Click the heading to roll!
