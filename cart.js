


const addProduct = () =>{
 const productField = document.getElementById('product');
 const quantityField = document.getElementById('quantity');
 const product = productField.value;
 const quantity = quantityField.value;
 productField.value = '';
 quantityField.value = '';
 console.log(product,quantity);
 displayProduct(product, quantity);
 saveProductLocalStorage(product, quantity);
}

const displayProduct = (product,quantity)=>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}  ${quantity}`;
    productContainer.appendChild (li);
}


// try to get shopping cart from local storage if its exist or not over there
const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
         cart = JSON.parse(storedCart);
    }
    return cart;
}


const saveProductLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}


const displayProductFromLocalStorage = () =>{
    const savedProduct = getStoredShoppingCart();
    console.log(savedProduct); 
    for(const product in savedProduct){
        const value = savedProduct[product]
        console.log(product, value);
        displayProduct(product, value);
    }
}

displayProductFromLocalStorage();