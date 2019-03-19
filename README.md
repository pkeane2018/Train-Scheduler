# Train Scheduler
This webpage allows users to add trains to a schedule. 

## How to run site on local machine
The repository can be cloned by clicking the Clone or Download button on the main repository page, then clicking the button next to the url which appears below. Then open a Terminal or Git Bash window, navigate to the location where you want to place the cloned repository, then type 'git clone' and then paste the repository that was just copied. The site can then be opened by clicking on the index.html file and opening it in a web browser.

## Repository organization
The main directory file contains the index.html file, Readme.md file, and the assets folder. Within the assets folder, there are two subfolders - the 'css' and 'javascript' folders. The 'css' folder contains the style.css file, with determines how the html elements in the 'index.html' file are styled, as well as reset.css, which contains code to ensure that the styling of the html elements appears consistent across different web browsers. Within the 'javascript' folder is 'main.js', which contains code that determines the logic of the game, such as using Momentjs to calculate the time until the train arrives next, using the current time and the initial departure time and frequency entered by the user. It also saves the the train information that user inputs to the Firebase database. 'Index.html' contains all the html code for the site, as well as links to style.css, reset.css, game.js, to the jQuery, CSS Boostrap, and Momentjs CDNs, and to the Firebase database.

## How to use
The user inputs the name, destination, first arrival time, and frequency of the train. A jQuery function then updates the current train schedule with the new train information every time the user clicks the submit button. This information is stored in a Firebase database, and is loaded and displayed in the current train schedule every time a user opens the page. The page also utilizes Moment.js, along with the first train arrival time and frequency information provided by the user, to determine what time the next train will arrive and how many minutes until then from the time that the page loads. 

## Technology used
* HTML
* CSS
* CSS Bootstrap
* JavaScript
* jQuery
* Momentjs
* Firebase

## Link to deployed Github webpage 
https://pkeane2018.github.io/Train-Scheduler/
