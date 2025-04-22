const main = document.querySelector('main')
const span =  document.querySelector('span')
const buttons = document.querySelectorAll('.buttons button')
const products = document.querySelector('.product')



let favoritesCount = 0

function draw(array) {
    for (let item of array) {
        const card = document.createElement('div')
        card.classList.add('card')
        
        const windowWH = document.createElement('div')
        windowWH.classList.add('window')
        
        
        const product = document.createElement('div')
        product.classList.add('product')
        
        const stat = document.createElement('div')
        stat.classList.add('stat')
        
        const info = document.createElement('div')
        info.classList.add('info')
        
        const image = document.createElement('img')
        const title = document.createElement('h3')
        const description = document.createElement('p')
        const price = document.createElement('h3')
        const button = document.createElement('button')
        const rate = document.createElement('h3')
        const count = document.createElement('h3')
        const dollar = document.createElement('img')
        const star = document.createElement('img')
        const box = document.createElement('img')
        
        dollar.src = './image/Group\ 7.png'
        star.src = './image/Group\ 10.png'
        box.src = './image/Group\ 9.png'
        image.src = item.image
        
        description.innerHTML = item.description
        title.innerHTML = item.title
        button.innerHTML = 'В избранное'
        
        price.prepend(dollar)
        price.append(item.price)
        rate.prepend(star)
        rate.append(item.rating.rate)
        count.prepend(box)
        count.append(item.rating.count)
        info.append(price, rate, count)
        stat.append(title, description, info)
        product.append(stat)
        windowWH.append(image)
        card.append(windowWH, product, button)
        main.append(card)

        button.addEventListener('click', () => {
            if (button.innerHTML !== 'Добавлено') {
                favoritesCount++
                span.textContent = favoritesCount
                button.style.backgroundColor = '#1F86FF'
                button.style.color = 'white'
                button.innerHTML = 'Добавлено'
            } else {
                favoritesCount--
                span.textContent = favoritesCount
                button.style.backgroundColor = 'white'
                button.style.color = 'black'
                button.innerHTML = 'В избранное'
            }

            if (favoritesCount === 1) {
                products.innerHTML = 'товар';
            } else if (favoritesCount >= 2 && favoritesCount <= 4) {
                products.innerHTML = 'товара';
            } else {
                products.innerHTML = 'товаров';
            }
        })
    }

    buttons[0].addEventListener('click', () => {
        const sliceCard = document.querySelectorAll('.card')
        const cardArray = [...sliceCard].slice(5)

            for (let i of cardArray) {
            i.style.display = 'none'
        }
    })

    buttons[1].addEventListener('click', () => {
        const sliceCard = document.querySelectorAll('.card')
        const cardArray = [...sliceCard].slice(5)

            for (let i of cardArray) {
            i.style.display = 'flex'
        }
    })
}