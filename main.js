const u = "MatteoResurreccion";
const p = "012811";

function login() {

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    if (usernameInput === "MatteoResurreccion" && passwordInput === "012811") {
        alert("Access granted!");
    }

    else{
        alert("Incorrect username or password.");
    }

}