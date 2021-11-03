const myToken = config.TOKEN

const addProductToServer = async e => {
    e.preventDefault()

    const productInfo = {
        name: document.querySelector('#name').value,  
        description: document.querySelector('#description').value,
        brand: document.querySelector('#brand').value,
        imageUrl: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
    }

    const response = await fetch('https://striveschool-api.herokuapp.com/api/product', {
        method: "POST",
        body: JSON.stringify(productInfo),
        headers: {
            "Content-Type": "application/json",
            "Authorization": myToken
        }
    })
}