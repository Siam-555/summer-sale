// Add item to the cart
function addToCart(name, price) {
  console.log(name, price)
  document.querySelector('.ordered-products').appendChild = name;
}

// Added id to the clicked card and send to Cart
const cards = document.querySelectorAll('.card');
for (const card of cards) {
  card.addEventListener('click', function() {
    const productName = card.querySelector('.product-name').innerText;
    const productPrice = card.querySelector('.product-price').innerText;
    addToCart(productName, productPrice);
  })
}