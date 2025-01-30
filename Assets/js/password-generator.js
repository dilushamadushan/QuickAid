const passwordBox = document.getElementById("password");
const copyIcon = document.getElementById("copyIcon");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*.+-_";

const charAll = upperCase + lowerCase + numbers + symbols;

function createPass() {
    let password = "";
    let numberCount = 0;

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    numberCount += 3; 

    for (let i = 0; i < 3; i++) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }

    while (password.length < length - 1) {
        password += charAll[Math.floor(Math.random() * charAll.length)];
    }

    password += numbers[Math.floor(Math.random() * numbers.length)];

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passwordBox.value = password;
}

copyIcon.addEventListener("click", () => {
    if (passwordBox.value) {
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                console.error("Error copying password: ", err);
            });
    } else {
        alert("No password to copy!");
    }
});
