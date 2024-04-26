const openShopping = document.querySelector('.shopping')
const closeShopping = document.querySelector('.closeShopping')
const list = document.querySelector('.list')
const listCard = document.querySelector('.listCard')
const total = document.querySelector('.total')
const body = document.querySelector('body')
const quantity = document.querySelector('.quantity')
const totalQuantity = document.querySelector('.totalQuantity')

openShopping.addEventListener('click', () => {
    body.classList.add('active')
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active')
})

let products = [
    {
        id: 1,
        name: 'T-shirt',
        price: 500,
    },
    {
        id: 2,
        name: 'T-shirt',
        price: 500,
    },
    {
        id: 3,
        name: 'T-shirt',
        price: 500,

    },
    {
        id: 4,
        name: 'T-shirt',
        price: 500,
    },
    {
        id: 5,
        name: 'T-shirt',
        price: 500,
    },

]


const listCards = []

const initApp = () => {
    products.forEach((product, index) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <div>
        <div>
        <p>${product.name}</p>
        </div>
        <div>
        <p>${product.price.toLocaleString()}</p>
        </div>
        <div>
    <button onclick="addToCard(${index})">Add to cart</button>
        </div>
        </div>
        `
        list.appendChild(newDiv)
    })
}
initApp()

const addToCard = (index) => {
    if (listCards[index] == null) {
        listCards[index] = { ...products[index], quantity: 1 };
    } else {
        listCards[index].quantity += 1;
    }

    reloadCard();
};


const changeQuantity = (index, value) => {
    listCards[index].quantity += value
    if (listCards[index].quantity <= 0) {
        listCards.splice(index, 1)

    }
    reloadCard()
}



const reloadCard = () => {

    listCard.innerHTML = ''
    let count = 0
    let totalPrice = 0

    let totalQuantityForAllProducts = 0
    listCards.forEach((product, index) => {
        totalPrice += product.price * product.quantity
        count += product.quantity

        totalQuantityForAllProducts += product.quantity

        if (product != null) {
            let newDiv = document.createElement('li')
            newDiv.classList.add('theli')
            newDiv.innerHTML = `
            <div>
            <div>
            <p>${product.name}</p>
            </div>
            <div>
            <p>${(product.quantity * product.price)}</p>
            </div>
            <div>Quantity: ${product.quantity}</div>
            <div>
            <button style="background-color:red; color:white" onclick="changeQuantity(${index},-1)">-</button>
            <button style="background-color:green; color:white;" onclick="changeQuantity(${index}, 1)">+</button>
            </div >
            </div >
    `
            listCard.appendChild(newDiv)
        }





    })


    total.innerText = `Total cost: ${totalPrice.toLocaleString()}`

    quantity.innerText = count

    totalQuantity.innerHTML = `Total quantity: ${totalQuantityForAllProducts}`
}