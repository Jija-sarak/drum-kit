# JavaScript Drum Kit

This is a simple interactive Drum Kit built using HTML, CSS, and JavaScript. The kit consists of clickable drum images that play sounds when clicked, and also responds to keyboard presses. It's a fun way to practice music and JavaScript events.

## Features

- Clickable drum pads with corresponding images.
- Each drum pad plays a sound when clicked.
- Keyboard interaction: Press the keys `W`, `A`, `S`, `D`, `J`, `K`, `L`, `O`, and `I` to play the sounds associated with the drum pads.
- Visuals are accompanied by sound effects to mimic a real drum kit.

## Project Structure

- `index.html`: The main HTML file containing the structure of the Drum Kit.
- `style.css`: The CSS file to style the drum kit and its elements.
- `script.js`: The JavaScript file responsible for adding interactivity (playing sounds on click or key press).
- `images/`: Folder containing the images of different drum kit parts.
- `audio/`: Folder containing the sound files for each drum kit element.

## Installation

1. Clone or download this repository to your local machine.
2. Open `index.html` in your web browser to start using the drum kit.

## Usage

1. Click on any of the drum images to play the corresponding sound.
2. Alternatively, you can press the following keys on your keyboard to play the sounds:
    - `W` for Crash Cymbal
    - `A` for Open Hi-Hat
    - `S` for Soft Closed Hi-Hat
    - `D` for Snare Drum
    - `J` for Bass Drum Kick
    - `K` for Rock Rack Tom 1
    - `L` for Drum Tom 2
    - `O` for Floor Tom
    - `I` for Ride Cymbal

## Key Concepts

- **Event Handling**: The JavaScript uses event listeners to detect clicks on drum items and keypresses on the keyboard.
- **Audio API**: The `Audio` object is used to play sound files when a user interacts with the drum kit.
- **DOM Manipulation**: The DOM is manipulated to trigger the appropriate sound and display relevant visuals when interacting with the drum pads.

## Preview

[Drum Kit Preview](https://jija-sarak.github.io/drum-kit/)

## 🔧 Future Enhancements

- Responsive design.
