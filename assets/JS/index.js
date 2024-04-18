// const div = document.querySelector('.apidesk')
// const count = document.querySelector('.marketBox')


// let db

// function getAllData() {
//     axios.get('https://dummyjson.com/products').then(res => {
//             db = res.data.products
//             db.forEach(item => {
//                 let box = document.createElement("div");
//                 box.className = "productsCard";
//                 box.innerHTML = `
//                 <img src=${item.thumbnail} alt="">
//                         <div class="cardDesc">
//                         <h3>${item.title}</h3>
//                         <span>${item.brand}</span>
//                         <strong>${item.price}</strong>
//                         <button class="productBtn" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>ㅤADD TO CART</button>
//                         </div>
//                 `
//                 div.appendChild(box)
//             })
//         })
// }



// let cart = JSON.parse(localStorage.getItem('cart'))
// if(cart.length != 0){
//   count.innerHTML = cart.length
// } else {
//   count.style.display = 'none'
// }

// function addToCart(id) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || []
//     cart.push(db.find(item => item.id == id))
//     localStorage.setItem('cart', JSON.stringify(cart))
// }

// getAllData();

function basket() {
    // Get the product name and price
    var productName = document.querySelector('.saleBox span:first-child').innerText;
    var productPrice = document.querySelector('.saleBox span:last-child').innerText;

    // Display an alert with the product details
    alert("Product: " + productName + "\nPrice: " + productPrice + "\nAdded to basket!");
}
