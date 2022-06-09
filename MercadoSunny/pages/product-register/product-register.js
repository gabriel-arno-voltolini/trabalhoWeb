// 28/04/2022
// Gabriel Arno Voltolini
// Lucas Mota de Oliveira
// Victor do Amaral

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

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

    let localStorageStr = localStorage.getItem("productsList");

    if (localStorageStr === null | localStorageStr == '' | !isJsonString(localStorageStr)) {
        list = [];
    }
    else {
        list = JSON.parse(localStorageStr);
    }

    list.push(data);
    localStorage.setItem("productsList", JSON.stringify(list));
    window.location.href = ""
}

function deleteProduct(code) {
    var productsList = JSON.parse(localStorage.getItem('productsList'));
    let deletedProductList = productsList.filter(function (element) {
        return parseInt(element.code) !== parseInt(code);
    });
    localStorage.setItem("productsList", JSON.stringify(deletedProductList));
    alert("Produto excluido com sucesso!\n Id= " + code);
    window.location.reload();
}

function fillUpdateForm() {
    var product = JSON.parse(localStorage.getItem('productUpdateRequest'))[0];
    document.getElementById('code').value = product.code;
    document.getElementById('name').value = product.name;
    document.getElementById('quantity').value = product.quantity;
    document.getElementById('price').value = product.price;
}

function updateProduct() {
    var product = {
        code: document.getElementById('code').value,
        name: document.getElementById('name').value,
        quantity: document.getElementById('quantity').value,
        price: document.getElementById('price').value
    };
    var products = JSON.parse(localStorage.getItem('productsList'));
    var index = products.map(object => parseInt(object.code)).indexOf(parseInt(product.code));
    products[index] = product;
    localStorage.setItem('productsList', JSON.stringify(products));
    returnToRegisterPage();
}

function returnToRegisterPage() {
    window.location.replace("product-register.html");
}

function redirectToUpdatePage(code) {
    var productsList = JSON.parse(localStorage.getItem("productsList"));
    let product = productsList.filter(function (element) {
        return parseInt(element.code) === parseInt(code);
    });
    localStorage.setItem("productUpdateRequest", JSON.stringify(product));
    window.location.replace("product-update-popup.html");
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

function loadProducts() {
    var productsList = JSON.parse(localStorage.getItem("productsList"));
    productsList.forEach((element) => {
        document.getElementById("productsBody").innerHTML +=
            `<tr>
                        <th scope="row">${element.code}</th>
                        <td>${element.name}</td>
                        <td>${element.quantity}</td>
                        <td>R$ ${element.price}</td>
                        <td><button onClick="return deleteProduct(${element.code})">⨉</button></td>
                        <td><button onClick="return redirectToUpdatePage(${element.code})">⨆</button></td>
                    </tr>`;
    });
}