const myToken = config.TOKEN
const productId = new URLSearchParams(window.location.search).get('productId')

const fetchProduct = async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
        method: "GET",
        headers: {
            "Authorization": myToken
        }
    })
    const product = await response.json()
    displayProduct(product)
}

const displayProduct = ({name, brand, description, imageUrl: image, price, _id: id}) => {
    const heading = document.querySelector('.product-title')
    heading.innerText = name
    const productDetailsContainer = document.querySelector('.product-details')
    productDetailsContainer.innerHTML = `
    <div class="col-12 col-md-6">
        <img src=${image} class="img-fluid">
    </div>
    <div class="col-12 col-md-6">
        <div class="row">
            <div class="col-12 text-center">
                <p>${brand}</p>
            </div>
            <div class="col-12 text-center">
                <p>${description}</p>
            </div>
            <div class="col-12 text-center">
                <p>£${price}</p>
            </div>
            <div class="col-12 text-center">
                <button class="btn btn-outline-success w-100">Add To Cart</button>
            </div>
        </div>
    </div>
    `
}

fetchProduct()