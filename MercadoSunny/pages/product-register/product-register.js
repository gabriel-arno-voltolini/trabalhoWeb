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
}