const basket = document.querySelector('.basket')
const zero = document.querySelector('span')
let favoritesCount = 0
function reloadProducts(products, place) {
    place.innerHTML = '';
    products.forEach((product) => {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const infoBlock = document.createElement('div');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const detailsBlock = document.createElement('div');
        const priceBlock = document.createElement('div');
        const priceImage = document.createElement('img');
        const price = document.createElement('p');
        const rateBlock = document.createElement('div');
        const rateImage = document.createElement('img');
        const rate = document.createElement('p');
        const quantityBlock = document.createElement('div');
        const quantityImage = document.createElement('img');
        const quantity = document.createElement('p');
        const buttonBlock = document.createElement('div');
        const button = document.createElement('button');

        // classes
        card.classList.add('card');
        image.classList.add('photo');
        infoBlock.classList.add('info');
        description.classList.add('desc');
        detailsBlock.classList.add('details');
        priceBlock.classList.add('price');
        priceImage.classList.add('size');
        price.classList.add('priceVal');
        rateBlock.classList.add('rate');
        rateImage.classList.add('size');
        rate.classList.add('rateVal');
        quantityBlock.classList.add('buys');
        quantityImage.classList.add('size');
        quantity.classList.add('quantity');
        buttonBlock.classList.add('btn');
        button.classList.add('chosen');

        // attributes
        image.setAttribute('src', product.image);
        priceImage.setAttribute('src', './images/price.png');
        rateImage.setAttribute('src', './images/rating.png');
        quantityImage.setAttribute('src', './images/quantity.png');

        // innerHTML
        title.textContent = product.title.slice(0, 50) + '...';
        description.textContent = product.description.slice(0, 200) + '...';
        price.textContent = product.price;
        rate.textContent = product.rating.rate;
        quantity.textContent = product.rating.count;
        button.textContent = 'В избранное';

        // append
        priceBlock.append(priceImage, price);
        rateBlock.append(rateImage, rate);
        quantityBlock.append(quantityImage, quantity);

        detailsBlock.append(priceBlock, rateBlock, quantityBlock);

        buttonBlock.append(button);

        infoBlock.append(title, description, detailsBlock, buttonBlock);

        card.append(image, infoBlock);

        place.append(card);
        
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
                const index = cart.findIndex((item) => item.id === product.id);
                cart.splice(index, 1);
                button.classList.remove('active');
                button.textContent = 'В избранное';
                favoritesCount--
                zero.innerHTML = favoritesCount
                return;
            }
            
            button.classList.add('active');
            button.textContent = 'Добавлено';
            cart.push(product);
            favoritesCount++
            zero.innerHTML = favoritesCount
        });
    })
}