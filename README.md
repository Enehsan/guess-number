# Guess The Number Game

## Overview
This project is a web-based game where players try to guess a randomly generated number between 0 and 999. The game provides visual feedback in the form of heart images that represent the player's remaining health. Each incorrect guess results in a loss of one heart, and the game continues until the player guesses the correct number or loses all their health.

## Features
- **Random Number Generation**: At the start of each game, a random number is generated and stored.
- **User Interaction**: Players input their guess through a number field in the HTML document.
- **Health System**: Players start with five hearts. Each incorrect guess decreases their health by one.
- **Game Feedback**: Textual hints guide the player to guess higher or lower based on their input.
- **Game Reset**: After the game concludes, whether by guessing correctly or running out of health, players can choose to restart the game.

## Technologies Used
- HTML5
- CSS3
- JavaScript

## How to Play
1. Enter a number between 0 and 999 in the input field.
2. Click the 'Guess' button or press Enter to submit your guess.
3. Use the hints provided to adjust your next guess.
4. Try to guess the number before you run out of health!

## Project Structure
- `index.html`: The main HTML document that structures the game interface.
- `main.css`: Contains the styles for the game's interface.
- `main.js`: Includes all the game logic, random number generation, and DOM manipulation.

## Future Enhancements
- Improve user experience with better end-game modals instead of browser confirm dialogs.
- Add sound effects for correct/incorrect guesses and heart loss.
- Implement a scoring system based on the number of guesses taken to reach the correct answer.
- Create difficulty levels by adjusting the range of the random number and the amount of health.

Feel free to clone this repository, and enjoy the game!
