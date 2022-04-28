function setUserName(name) {
    document.getElementById('logged-text').textContent = name;
}

function userIsValid() {
    return true;
}

function authenticateUser() {
    if (userIsValid()) {
        setUserName("Bem-vido(a) " + "marquinhos");
    } else {
        setUserName("Usuário inválido");
    }
}