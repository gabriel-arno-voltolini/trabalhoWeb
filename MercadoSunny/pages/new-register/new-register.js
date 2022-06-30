// 28/04/2022
// Gabriel Arno Voltolini
// Lucas Mota de Oliveira
// Victor do Amaral

class user {
    constructor(pId, pNome, pDepartamento, pEndereco, pEmail) {
        this.id = pId;
        this.nome = pNome;
        this.departamento = pDepartamento;
        this.endereco = pEndereco;
        this.email = pEmail;
    }

    getNome() {
        return this.nome;
    }

    getEmail() {
        return this.email;
    }
}

function search() {
    var id = parseFloat(document.getElementById("id").value);

    fetch("https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/" + id)
        .then((x) => x.json())
        .then((info) => {
            var userObj = new user(info.id, info.nome, info.departamento, info.endereco, info.email)
            document.getElementById("name").value = userObj.nome
            document.getElementById("email").value = userObj.email
        })
}

function exclusion() {
    let fetchData = {
        method: "delete",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    var id = parseFloat(document.getElementById("id").value);

    fetch("https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/" + id, fetchData)
        .then((x) => x.json())
        .then((info) => {
            if (info.status == "Ok") {
                document.getElementById("alert").className = "alert alert-success mb-3 mt-3"
            } else {
                document.getElementById("alert").className = "alert alert-danger mb-3 mt-3"
            }

            document.getElementById("alert").innerHTML = info.mensagem
        })
}

function update() {
    var id = parseInt(document.getElementById("id-put").value);
    var name = document.getElementById("name-put").value;
    var department = document.getElementById("department-put").value;
    var address = document.getElementById("address-put").value;
    var email = document.getElementById("email-put").value;

    var data = {
        id: id,
        nome: name,
        departamento: department,
        endereco: address,
        email: email
    }

    var fetchData = {
        method: "put",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch("https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/", fetchData)
        .then((x) => x.json())
        .then((info) => {
            if (info.status == "Ok") {
                document.getElementById("alert-put").className = "alert alert-success mb-3 mt-3"
            } else {
                document.getElementById("alert-put").className = "alert alert-danger mb-3 mt-3"
            }

            document.getElementById("alert-put").innerHTML = info.mensagem
        })
}

function alternateToExclusion() {
    document.getElementById("exclusion").className = "container p-5 bg-light rounded";
    document.getElementById("update").className = "container p-5 bg-light rounded d-none";
}

function alternateToUpdate() {
    document.getElementById("exclusion").className = "container p-5 bg-light rounded d-none";
    document.getElementById("update").className = "container p-5 bg-light rounded";
}