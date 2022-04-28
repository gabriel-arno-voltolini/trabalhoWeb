function setCookie() {
    var user = document.getElementById("userName").value;
    var pass = document.getElementById("password").value;
    document.cookie = "user=" + user + "; path=/";
    document.cookie = "password=" + pass + "; path=/";
    window.location.href = "home.html";
}