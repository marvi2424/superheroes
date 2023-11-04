# Superhero Project

This project consists of HTML and JavaScript files for a Superhero search application. It allows users to search for superheroes and view detailed information about them.

## Installation

To use this project, you will need a web server to serve the HTML and JavaScript files. You can host it locally or on a web server. Here's how to set it up:

1. Clone or download the project repository to your local machine.

2. Host the project files on a web server. You can use tools like Apache, Nginx, or simply use a local development server like Live Server for Visual Studio Code.

3. Ensure that you have a stable internet connection, as the project relies on external APIs to fetch superhero data.

## Usage

The project is divided into two main components: `index.js` and `details.js`.

### `index.js`

This file contains the HTML and JavaScript code for the main page of the Superhero search application. It features a search input field that allows users to search for superheroes by name. The application fetches superhero data from an external API and displays the results in a list of cards. Users can click on a card to view more details about a superhero.

### `details.js`

The `details.js` file contains the HTML and JavaScript code for displaying detailed information about a specific superhero. Users are directed to this page when they click on a superhero card from the main page. The superhero's name, image, and additional details, such as appearance, biography, connections, and power stats, are displayed in an accordion-style layout.

### `services` Directory

The `services` directory contains JavaScript files responsible for making HTTP requests to fetch superhero data from external APIs. It includes two services:

- `services.js`: Fetches a list of all superheroes and specific superhero details.
- `ServiceResponse.js`: Defines a `ServiceResponse` class to handle responses from the API.

### `_helpers` Directory

The `_helpers` directory contains JavaScript files with helper functions used in the project. The `helper_functions.js` file defines functions to create superhero cards and display detailed information. It also includes functions for styling power stats.

## Acknowledgments

- This project uses external superhero data APIs for fetching information.
- Dependencies like Bootstrap, jQuery, and Font Awesome are included via content delivery networks (CDNs) to enhance the user interface.

