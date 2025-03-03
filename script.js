function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Τοπικά διαπιστευτήρια (θα τα αλλάξεις όπως θες)
    const validUsername = "admin";
    const validPassword = "1234";

    // Έλεγχος σύνδεσης
    if (username === validUsername && password === validPassword) {
        message.innerHTML = "Επιτυχής σύνδεση!";
        // Ανακατεύθυνση στη welcome page μετά από 1 δευτερόλεπτο
        setTimeout(() => {
            window.location.href = "welcome.html";
        }, 1000);
    } else {
        message.innerHTML = "Λάθος όνομα χρήστη ή κωδικός!";
    }
}