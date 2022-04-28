function setNormalMode() {
    document.getElementById("register-button").style.backgroundColor = "orange";
    document.getElementById("register-button").style.borderRadius = "4px";
    document.getElementById("register-button").textContent = "Registrar";
    document.getElementById("register-div").style.backgroundColor = null;
    document.getElementById("register-title").style.fontFamily = "Times New Roman";
    document.getElementById("register-title").style.color = "#FFF";
    document.getElementById("dataNascimento").style.color = "#FFF";
    document.getElementById("register-root-div").style.backgroundImage = "url('../../media/images/animeBackground.jpg')";
    document.getElementById("notification-checkbox").style.color = "#FFF";
    document.getElementById("notification-checkbox").style.fontFamily = "Times New Roman";
    var labels = document.getElementsByClassName("placeholder");
    for (i = 0; i < labels.length; i++) {
        labels[i].style.color = "#FFF";
        labels[i].style.fontSize = "12px";
        labels[i].style.fontFamily = "Times New Roman";
    }
}

function setCustomMode() {
    document.getElementById("register-button").style.backgroundColor = "#000";
    document.getElementById("register-button").style.borderRadius = "15px";
    document.getElementById("register-button").textContent = "Registrar!";
    document.getElementById("register-div").style.backgroundColor = "#FFF";
    document.getElementById("register-title").style.fontFamily = "Lucida Console";
    document.getElementById("register-title").style.color = "#000";
    document.getElementById("dataNascimento").style.color = "#000";
    document.getElementById("register-root-div").style.backgroundImage = "url('../../media/images/market.jpg')";
    document.getElementById("notification-checkbox").style.color = "#000";
    document.getElementById("notification-checkbox").style.fontFamily = "Lucida Console";
    var labels = document.getElementsByClassName("placeholder");
    for (i = 0; i < labels.length; i++) {
        labels[i].style.color = "#000";
        labels[i].style.fontSize = "1em";
        labels[i].style.fontFamily = "Lucida Console";
    }
}