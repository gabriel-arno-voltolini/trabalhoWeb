function setCookie() {
    var user = document.getElementById("userName").value;
    var pass = document.getElementById("password").value;
    document.cookie = "user=" + user + "; path=/";
    document.cookie = "password=" + pass + "; path=/";
    if(user && pass){
        window.location = "../home/home.html";
        return false;
    }
    else{
        alert("Usuário ou senha inválidos");
    }
}