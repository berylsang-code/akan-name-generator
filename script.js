const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

const form = document.getElementById("akanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!document.getElementById("birthday").value) {
        alert("Please select your date of birth");
        return;
    }

    const birthday = document.getElementById("birthday").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const parts = birthday.split("-");

    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    let dayOfWeek = (
        Math.floor(CC / 4) -
        (2 * CC) -
        1 +
        Math.floor((5 * YY) / 4) +
        Math.floor((26 * (month + 1)) /10) +
        day
    )   %7;

    if (dayOfWeek < 0){
        dayOfWeek += 7;
    }

    let akanName;

    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = `Your Akan name is <strong>${akanName}</strong>!`;

    form.reset();
    
});