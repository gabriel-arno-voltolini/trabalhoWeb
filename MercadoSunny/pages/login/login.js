function setCookie() {
    var user = document.getElementById("userName").value;
    var pass = document.getElementById("password").value;
    document.cookie = "user=" + user;
    document.cookie = "password=" + pass;
    window.location.href = "home.html";
}