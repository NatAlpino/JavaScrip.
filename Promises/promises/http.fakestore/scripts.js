const ul = document.getElementById('products');
const url = "https://fakestoreapi.com/products";

fetch(url)
.then((resp) => resp.json()) 
.then(function (data) {
    console.log(data);
    
    return data.map(function (product) {
        let li = document.createElement("li");
        li.innerHTML = `${product.title} ($product.title)`
        ul.appendChild(li)
    })
})
.catch((error) => {
    console.log("Ops!" + error);
})
