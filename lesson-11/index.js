const cards = document.querySelector('.cards');
const showPart = document.querySelector('header button[data-show="part"]');
const showAll = document.querySelector('header button[data-show="all"]');
const buttonBasket = document.querySelector('.basketButton')
const slicedCart = cart.slice(0, 0);
console.log(basket);


showPart.onclick = () => {
    const slicedArray = productsArray.slice(0, 5);
    reloadProducts(slicedArray, cards);
    reloadProducts(slicedCart, basket)
    basket.style.display = 'none'
}

showAll.onclick = () => {
    reloadProducts(slicedCart, basket)
    reloadProducts(productsArray, cards);
    basket.style.display = 'none'
}

buttonBasket.onclick = () => {
    const slicedArray = productsArray.slice(0, 0);
    basket.style.display = 'grid'
    reloadProducts(slicedArray, cards);
    reloadProducts(cart, basket);
}


reloadProducts(productsArray, cards);