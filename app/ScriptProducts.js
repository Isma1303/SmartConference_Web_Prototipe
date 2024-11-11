// Carrito
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

products = [];

cartIcon.onclick = () => {
    cart.classList.add('active');
    // Verifica que exista `shop` o define `shop` antes de usar esta línea
    // shop.classList.add('active-cart');
};

closeCart.onclick = () => {
    cart.classList.remove('active');
};

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItems);
    }
    var quantity = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantity.length; i++) {
        var input = quantity[i];
        input.addEventListener('change', quantityChanged);
    }
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

function removeCartItems(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var img = shopProducts.getElementsByClassName('product-img')[0].src; // Asegúrate de tener una clase 'product-img' en la imagen
    addProductToCart(title, price, img);
    updateTotal();
}

function addProductToCart(title, price, img) {
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');

    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("Ya tienes este producto en el carrito");
            return;
        }
    }

    var cartBoxContent = `
        <div class="cart-box">
            <img src="${img}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity" min="1">
            </div>
            <i class="cart-remove" name='trash-alt' type='solid'>🗑️</i>
        </div>
    `;
    cartItems.innerHTML += cartBoxContent;

    var cartBox = cartItems.lastElementChild;
    cartBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItems);
    cartBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function updateTotal() {
    var cartBoxes = document.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("Q", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-price')[0].innerText = 'Q ' + total;
}
