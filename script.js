let totalPrice = document.getElementById('total-price');
let discount = document.getElementById('discount');
let totalPayable = document.getElementById('total-payable');
const ordersName = document.getElementById('orders-name');
const purchaseBtn = document.getElementById('purchase-btn');
const couponInput = document.getElementById('coupon-input');
const couponButton = document.getElementById('coupon-button');


const allCard = document.querySelectorAll('.card');
for (const card of allCard) {
  card.addEventListener('click', () => {
    const itemName = card.querySelector('.product-name').innerText;
    const itemPrice = card.querySelector('.product-price').innerText;
    addToCart(itemName, itemPrice);
  })
};

const addToCart = function (itemName, itemPrice) {
  const productName = document.createElement('li');
  productName.innerText = itemName;
  ordersName.appendChild(productName);
  totalPrice.innerText = parseFloat(totalPrice.innerText) + parseFloat(itemPrice);
  totalPayable.innerText = totalPrice.innerText;
  if (parseFloat(totalPrice.innerText) > 0) {
    purchaseBtn.classList.remove('hidden');
    purchaseBtn.classList.add('block');
  }
}

const addDiscount = () => {
  couponInput.addEventListener("keyup", () => {
    if (parseFloat(totalPrice.innerText) > 200 && couponInput.value == "SELL200") {
      couponButton.removeAttribute('disabled');
      couponButton.addEventListener("click", () => {
        totalPrice.innerText = parseFloat(totalPrice.innerText) - parseFloat(totalPrice.innerText) / 5;
        discount.innerText = (parseFloat(totalPrice.innerText) / 5).toFixed(2);

        totalPayable.innerText = parseFloat(totalPrice.innerText) - (parseFloat(discount.innerText)).toFixed(2);
        couponInput.value = "";
      })
    }
    else {
      couponButton.setAttribute('disabled', "")
    }
  })
}
addDiscount();