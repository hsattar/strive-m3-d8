const myToken = config.TOKEN
const productId = new URLSearchParams(window.location.search).get('productId')

const fetchProduct = async () => {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: "GET",
            headers: {
                "Authorization": myToken
            }
        })
        const product = await response.json()
        displayProduct(product)
    } catch (error) {
        console.error(error)
    }
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
                <p><strong>Brand - </strong>${brand}</p>
            </div>
            <div class="col-12 text-center">
                <p><strong>Description - </strong>${description}</p>
            </div>
            <div class="col-12 text-center">
                <p><strong>Price - </strong>£${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            <div class="col-12 text-center">
                <a class="btn btn-outline-success w-100" href="./back-office.html?productId=${id}"><i class="bi bi-pencil mr-2"></i>Edit Product</a>
            </div>
        </div>
    </div>`
}

fetchProduct()