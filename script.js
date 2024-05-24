// Add item to the cart
function addToCart(name, price) {
  const li = document.createElement('li');
  li.innerText = name;
  console.log(li);
  orderNamePlace[0].appendChild(li);
  // orderNamePlace.appendChild(p);
}

// Collect details from clicked card and send to Cart
const cards = document.querySelectorAll('.card');
const orderNamePlace = document.getElementsByClassName('orders-name');

for (const card of cards) {
  card.addEventListener('click', function() {
    const productName = card.querySelector('.product-name').innerText;
    const productPrice = card.querySelector('.product-price').innerText;
    addToCart(productName, productPrice);
  })
}