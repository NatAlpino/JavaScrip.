//Utilizando o async/await

// let response = await fetch('https://fakestoreapi.com/products/1');
// let userData = await response.json();

async function getUser(productsId) {
    let response = await fetch('https://fakestoreapi.com/products/${productId}')
    let userData = await response.json();
    return userData.title
}

console.log(getUser);