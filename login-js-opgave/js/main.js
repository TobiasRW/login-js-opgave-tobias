var username = "eaaa123";
var password = "mdu123";

const submit = document.getElementById("submit-btn");


//Her laves en click-event som giver en alert alt efter input
submit.addEventListener("click", () => {
    if (this.document.login.user.value == username && this.document.login.pass.value == password) {
        window.location.href = "correct.html";
    }
    else if(this.document.login.user.value != username && this.document.login.pass.value == password) {
        window.alert("Brugernavn eksisterer ikke");
    }
    else if(this.document.login.user.value == username && this.document.login.pass.value != password) {
        window.alert("Koden er forkert");
    }
    else if(this.document.login.user.value != username && this.document.login.pass.value != password) {
        window.alert("Alt er forkert my guy");
    }
});

// Her tilføjes en class i HTML strukturen som derefter styles i CSS, hvilket gør knappen enten grøn eller rød
submit.addEventListener("mouseover", () => {
    if (this.document.login.user.value == username && this.document.login.pass.value == password) {
        submit.classList.toggle("correct");
    }
    else if(this.document.login.user.value != username && this.document.login.pass.value == password) {
        submit.classList.toggle("incorrect");
    }
    else if(this.document.login.user.value == username && this.document.login.pass.value != password) {
        submit.classList.toggle("incorrect");
    }
    else if(this.document.login.user.value != username && this.document.login.pass.value != password) {
        submit.classList.toggle("incorrect");
    }
});






