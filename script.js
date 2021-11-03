const myToken = config.TOKEN
 
const loadData = async () => {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/product', {
        method: "GET",
        headers: {
            "Authorization": myToken
        }
    })
    const body = await response.json()
    displayData(body)
}

const displayData = async body => {
    console.log(body)
    const productContainer = document.querySelector('.product-container')
    productContainer.innerHTML = body.map(({name, imageUrl: image, description, price, brand, id}) => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <a class="text-dark" href="product-details.html?productId=${id}">
                <img src=${image} class="card-img-top product-image" alt="Image Of ${name}"
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                    <p class="card-text">${brand}</p>
                    <p class="card-text">${price}</p>
                </div>
            </a>
        </div>
    </div>
    `).join('')
}

loadData()