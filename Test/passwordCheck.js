function checkPassword() {
    var password = document.getElementById("password").value;
    var upperCaseLetters = /[A-Z]/g;
    var digits = /[0-9]/g;

    if (password.match(upperCaseLetters) && password.match(upperCaseLetters).length >= 2 && password.match(digits) && password.match(digits).length >= 1 && password.length >= 8)  {
        alert("Valid Password")
        window.location.href = "HomePage.html";
    } else {
        alert("Wrong Password");
    }
}
