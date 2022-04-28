function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setUserName(name) {
    document.getElementById('logged-text').textContent = name;
}

function userIsValid() {
    var name = getCookie("user");
    var pass = getCookie("password");
    return name && pass;
}

function authenticateUser() {
    var name = getCookie("user");
    if (userIsValid()) {
        setUserName("Bem-vindo(a) " + name);
        return
    }

    document.getElementById("profile-item").style.display = "none";
}