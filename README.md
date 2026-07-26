# Akan Name Generator

## Description
The Akan Name Generator is a web application that allows users to discover their traditional Akan name based on their date of birth and gender. The application calculates the day of the week a user was born and displays the corresponding Akan name.

## Author
Beryl Sang
GitHub: https://github.com/berylsang-code

## Features
- Enter your date of birth
- Select your gender
- Calculates the day of the week
- Displays the correct Akan name
- Input validation
- Responsive user interface
- Calculates the day of the week using the Akan naming formula.

## BDD (Behavior-Driven Dvelopment)
| Behavior | Input | Output|
|----------|-------|-------|
| User enters valid date of birth and selects Male | Date: 2000-01-01, Gender: Male | Displays the correct male Akan name. |
| User enters a valid date of birth and selects Female| Date: 2000-01-01, Gender: Female | Displays the correct female Akan name. |
| User submits the form without selecting a date | No date selected | Displays an alert asking the user to select a date.|
| User submits the form without selecting a gender | Valid  date entered, no gender selected | Displays an alert asking the user to select a gender. |
| User enters a valid date and gender | Any valid date and gender | Calculates the day of the week using the Akan formula and displays the corresponding Akan name. |

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Installation
1. Clone this repository.
```bash
git clone https://github.com/berylsang-code/akan-name-generator.git
```

2. Open the project folder.
3. Open `index.html` in your browser.

## How to use
1. Select your date of birth.
2. Choose your gender.
3. Click **Generate Akan Name**.
4. Your Akan name will be displayed.

## Project Structure
```
akan-name-generator/
│── index.html
│── styles.css
│── script.js
│── README.md
```
## Live Demo
https//berylsang-code.github.io/akan-name-generator/

## Contact Information
GitHub: https://github.com/berylsang-code

Email: berylsang@student.moringaschool.com

## License
This project is licensed under the MIT License.

Copyright © 2026 Beryl Sang
