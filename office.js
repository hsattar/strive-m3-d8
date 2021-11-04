const myToken = config.TOKEN
const productId = new URLSearchParams(window.location.search).get('productId')
const url = productId ? `https://striveschool-api.herokuapp.com/api/product/${productId}` : 'https://striveschool-api.herokuapp.com/api/product'

const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    addProductToServer()
})

const createEdit = document.querySelector('.create-edit')
createEdit.addEventListener('click', () => {
    form.classList.add('submitted')
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
    const pageHeading = document.querySelector('.page-heading')
    pageHeading.innerText = 'Edit The Product'
    createEdit.innerText = 'Save'
    const deletionArea = document.querySelector('.deletion')
    deletionArea.innerHTML = `
    <button type="button" class="btn btn-danger" onclick=deleteProduct()><i class="bi bi-trash"></i></button>`
} 

const deleteProduct = async () => {
    const response = await fetch(url, {
        method: "DELETE", 
        headers: {
            "Authorization": myToken
        }
    })
    if (response.ok) {
        alert('Deleted')
        window.location.href = '/'
    }
}

const addProductToServer = async () => {
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
            <p class="text-center mb-2">${message} ${newProduct.name}<p>
            <div class="d-flex justify-content-center">
                <a href="/" class="mx-2">Return Home</a>
                <a href="./product-details.html?productId=${productId}" class="mx-2">View Product</a>
            </div>`
        }
        productId ? alertUser('Succesfully Edited The product Called') : alertUser('Succesfully Created A New Product Called')
    }
}