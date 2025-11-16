# Simon Says Game

This is a classic "Simon Says" memory game built with vanilla HTML, CSS, and JavaScript. It's a fun, simple project to test and improve your memory skills. The game flashes a sequence of colors, and the player must repeat the sequence in the correct order.

## Features

* **Classic Gameplay:** The game generates a random color sequence that grows longer with each level.
* **Increasing Difficulty:** Each time you successfully complete a sequence, the level increases, and a new color is added.
* **Visual Feedback:**
    * The game's sequence is shown with a "flash" effect on the buttons.
    * The player's clicks have their own unique "flash" effect.
    * The screen flashes red on a "Game Over."
* **Score Tracking:** The game displays your current score (level).
* **High Score:** It saves and displays your highest score during your session.
* **Game Over & Restart:** If you make a mistake, the game ends and allows you to restart by pressing any key.

## Technologies Used

* **HTML:** For the basic structure and content of the game.
* **CSS:** For all styling, layout, and button flash animations.
* **JavaScript (Vanilla):** For all game logic, including:
    * Event handling (key presses, button clicks)
    * Generating random sequences
    * Tracking game state (level, scores)
    * DOM manipulation to provide feedback

## How to Run

Since this project is built with static files (HTML, CSS, JS), you can run it locally without any special server.

1.  **Clone the repository:**
    ```bash
   git clone https://github.com/aditya060414/Simon-says.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd Simon-Says
    ```
3.  **Open the game:**
    Simply open the `index.html` file in your favorite web browser (like Chrome, Firefox, or Edge).

That's it! Enjoy the game.
