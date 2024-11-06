//carrito
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

cartIcon.onclick = () => {
    cart.classList.add('active')
}
closeCart.onclick = () => {
    cart.classList.remove('active')
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded')

} else {
    ready()
}
function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItems)
    }
    var quantity = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantity.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChange)
    }
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[I]
        button.addEventListener('click', addCartClicked)
    }
    //funcionalidad para que el boton "comprar" imprima el pdf con la factura y el codigo aleatorio 
}
function removeCartItems(event) {
    var buttonClicked = event.target
    buttonClicked.paren
    tElement.remove()
    updateTotal()
}
function addCartClicked(event) {
    var button = event.target
    var shopProducts = button.parentElemet
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText
    var price = shopProducts.getElementsByClassName('price')[0].innerText
    var img = shopProducts.getElementsByClassName('product-img')[0].src
    addProductToCart(title, price, img)
    updateTotal()
}
function addProductToCart(title, price, img) {
    var cartShopBox = document.getElementsByClassName('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')
    var cartItems = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemsName.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("Ya tienes este producto en el carrito")
            return
        }
    }

    var cartBoxContent = `
                            <img src=${img} alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-product-title">${Title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <i name='trash-alt' type='solid'></i>
    `
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)


}


function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = document.getElementsByClassName('cart-box')
    var total = 0
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("Q", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        total = Math.round(total * 100) / 100
        DocumentTimeline.getElementsByClassName('total-price')[0].innerText = 'Q ' + total

    }
}