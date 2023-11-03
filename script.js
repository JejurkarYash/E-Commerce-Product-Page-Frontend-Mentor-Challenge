// Declaring Varaibles

const MainImage = document.getElementById("main-img");
const product_1 = document.getElementById("product-1");
const product_2 = document.getElementById("product-2");
const product_3 = document.getElementById("product-3");
const product_4 = document.getElementById("product-4")
const previous = document.getElementById("prev");
const next = document.getElementById("next");
const Minus = document.getElementById('minus');
const Plus = document.getElementById('plus');
const ItemNumber = document.getElementById('items')
const AddToCart = document.getElementById('Add-to-cart');
const badgeElement = document.getElementById('badgeElement');
const Cart = document.getElementById('cart');
const CartImage = document.getElementById('Cart-image');
const PreviousImage = document.getElementById('prev-image');
const NextImage = document.getElementById('next-image');
const DeleteIcon = document.getElementById('delete-icon');
const ProductInCart = document.getElementById('product-in-cart');
const EmptyMsg = document.getElementById('empyt-msg');
const ItemCount = document.getElementById('items-count');
const ItemPrice = document.getElementById('price');
const ProductPrice = document.getElementById('product-price');

console.log(ProductPrice);

// Changing the images of poduct on dekstop screen
product_1.addEventListener('click', function () {

    MainImage.setAttribute('src', './Assets/images/image-product-1.jpg');

});

product_2.addEventListener('click', function () {
    MainImage.src = './Assets/images/image-product-2.jpg';
});

product_3.addEventListener('click', function () {
    MainImage.setAttribute('src', './Assets/images/image-product-3.jpg');
});
product_4.addEventListener('click', function () {
    MainImage.setAttribute('src', './Assets/images/image-product-4.jpg');
});



// Changing the images of product on mobile screen
// Creating an array of images 

let images = ['./Assets/images/image-product-1.jpg', './Assets/images/image-product-2.jpg',
    './Assets/images/image-product-3.jpg', './Assets/images/image-product-4.jpg']
let imageIndex = 0;

// Function for previous image 
previous.addEventListener('click', function () {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
    }
    UpdateImage();
});


next.addEventListener('click', function () {
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    UpdateImage();
});

// function for next image
function UpdateImage() {
    MainImage.src = images[imageIndex];
}


// Function for adding items in cart
Minus.addEventListener('click', function () {

    ItemNumber.textContent--;
    if (ItemNumber.textContent <= 0) {
        ItemNumber.textContent = 0;
    }
});

Plus.addEventListener('click', function () {

    ItemNumber.textContent++;
})

// Function for Displaying the number of items on cart 

AddToCart.addEventListener('click', function () {
    //  Creating a badge element for displaying the items of cart






    const cartCount = parseInt(ItemNumber.textContent);
    badgeElement.textContent = cartCount;

    let num = ProductPrice.textContent;
    let price = (cartCount * num);
    console.log(price);
    if (cartCount == 0) {
        badgeElement.classList.add('hidden');

    }
    else {

        badgeElement.classList.remove("hidden");
        ItemCount.textContent = cartCount;
        ItemPrice.textContent = price;


    }





});

// Function for displaying Cart 

CartImage.addEventListener('click', function () {


    if (Cart.classList.contains('hidden')) {

        Cart.classList.remove('hidden');
        NextImage.classList.add('hidden');
        PreviousImage.classList.add('hidden');
    }
    else {
        Cart.classList.add('hidden');
        NextImage.classList.remove('hidden');
        PreviousImage.classList.remove('hidden');
    }

    if (ItemNumber.textContent > 0) {

        EmptyMsg.classList.add('hidden');
        ProductInCart.classList.remove('hidden');
    }
    else {
        EmptyMsg.classList.remove('hidden');
        ProductInCart.classList.add('hidden');
    }




});


// function for Delete Items from cart and display msg 

DeleteIcon.addEventListener('click', function () {

    ProductInCart.classList.add('hidden');
    EmptyMsg.classList.remove('hidden');
    badgeElement.classList.add('hidden');
});
