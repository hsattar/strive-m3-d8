const myToken = config.TOKEN
const productId = new URLSearchParams(window.location.search).get('productId')
const url = productId ? `https://striveschool-api.herokuapp.com/api/product/${productId}` : 'https://striveschool-api.herokuapp.com/api/product'

const form = document.querySelector('form')
form.addEventListener('submit', e => {
    addProductToServer(e)
})

const getProductDetails = async () => {
    const response = await fetch(url, {
        headers: {
            "Authorization": myToken
        }
    })
    const body = await response.json()
    const {name, description, brand, imageUrl : image, price} = body
    document.querySelector('#name').value = name
    document.querySelector('#description').value = description
    document.querySelector('#brand').value = brand
    document.querySelector('#image').value = image
    document.querySelector('#price').value = price
}

if (productId) {
    getProductDetails()
    const createEdit = document.querySelector('.create-edit')
    createEdit.innerText = 'Edit'
} else {
    
}

const addProductToServer = async e => {
    e.preventDefault()

    const productInfo = {
        name: document.querySelector('#name').value,  
        description: document.querySelector('#description').value,
        brand: document.querySelector('#brand').value,
        imageUrl: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
    }

    const response = await fetch(url, {
        method: productId ? "PUT" : "POST",
        body: JSON.stringify(productInfo),
        headers: {
            "Content-Type": "application/json",
            "Authorization": myToken
        }
    })

    if (response.ok) {
        const newProduct = await response.json()
        const alertUser = (message) => {
            const alertMsg = document.querySelector('.alertMsg')
            alertMsg.className = 'alert alert-success'
            alertMsg.innerHTML = `
            <p>${message} ${newProduct.name}<p>
            <a href="/">Return Home</a>`
            form.reset()
        }
        productId ? alertUser('Succesfully Edited The product Called') : alertUser('Succesfully Created A New Product Called')
    }
}