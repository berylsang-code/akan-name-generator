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

    const date = new Date(birthday);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayOfWeek = date.getDay();

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