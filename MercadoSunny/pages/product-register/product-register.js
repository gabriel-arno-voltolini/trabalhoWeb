function saveProduct() {
    var code = parseFloat(document.getElementById("code").value);
    var name = document.getElementById("name").value;
    var quantity = parseFloat(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);

    var data = {
        code: code,
        name: name,
        quantity: quantity, 
        price: price
    }

    var list = JSON.parse(localStorage.getItem("productsList"))

    if(list == null) {
        list = [];
    }

    list.push(data);

    localStorage.setItem("productsList", JSON.stringify(list));

    window.location.href = ""
}

function updateProduct(key, item){
    objStr = JSON.stringify(item);
    localStorage.setItem(key, objStr);
}

function alternateToTable() {
    document.getElementById("register-div").className = "col-lg-3 position-absolute top-50 start-50 translate-middle d-none";
    document.getElementById("register-buttons").className = "container d-none";
    document.getElementById("table-div").className = "table-responsive";
    document.getElementById("table-buttons").className = "container";
}

function alternateToRegister() {
    document.getElementById("register-div").className = "col-lg-3 position-absolute top-50 start-50 translate-middle";
    document.getElementById("register-buttons").className = "container";
    document.getElementById("table-div").className = "table-responsive d-none";
    document.getElementById("table-buttons").className = "container d-none";
}