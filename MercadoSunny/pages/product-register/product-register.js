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

function deleteProduct(code){
    let deletedProductList =  productsList.filter(function(element) {
    return parseInt(element.code) !== code;
  });
  localStorage.setItem("productsList", JSON.stringify(deletedProductList));
  alert("Produto excluido com sucesso!\n Id= " + code);
  window.location.reload();
}

function redirectToUpdatePage(code){
    let product =  productsList.filter(function(element) {
      return element.code === code;
    });
    localStorage.setItem("productUpdateRequest", JSON.stringify(product));
    window.location.replace("product-update-popup.html");
  }

function updateProduct(key, item) {
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