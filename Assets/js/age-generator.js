const age = document.getElementById("age");
const ageResult = document.getElementById("ageResult");

function createAge() {
    if(age == null){
        alert("Please enter your birthdate.");
        return;
    }
    const birthDate = new Date(age.value);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        ageYears--;
    }
    
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        months += 12;
    }

    ageResult.textContent = `You are ${ageYears} years, ${months} months, and ${days} days old.`;
}