const myToken = config.TOKEN
const productId = new URLSearchParams(window.location.search).get('productId')
const url = productId ? `https://striveschool-api.herokuapp.com/api/product/${productId}` : 'https://striveschool-api.herokuapp.com/api/product'

const form = document.querySelector('form')
form.addEventListener('submit', e => {
    addProductToServer(e)
})

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
        method: "POST",
        body: JSON.stringify(productInfo),
        headers: {
            "Content-Type": "application/json",
            "Authorization": myToken
        }
    })

    if (response.ok) {
        const newProduct = await response.json()
        const alertMsg = document.querySelector('.alertMsg')
        alertMsg.className = 'alert alert-success'
        alertMsg.innerHTML = `
        <p>Successfuly Created a New Product Called ${newProduct.name}<p>
        <a href="/">Return Home</a>`
        form.reset()
    }
}