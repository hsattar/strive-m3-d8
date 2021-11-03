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
    productContainer.innerHTML = body.map(({name, imageUrl: image, description, price, brand, _id: id}) => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <a class="text-dark" href="product-details.html?productId=${id}">
            <div class="card">
                <img src=${image} class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">£${price}</p>
                    </div>
                    <p class="card-text">${brand} - ${description}</p>
                </div>
            </div>
        </a>
    </div>
    `).join('')
}

loadData()