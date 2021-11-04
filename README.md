YOU WILL NEED TO USE YOUR OWN TOKEN AND CREATE A config.js FILE WITH THE FOLLOWING TO USE THE WEBSITE:

const config = {
TOKEN: 'YOUR_TOKEN_GOES_HERE'
}

---

🛍️Strivazon
You are building the frontend for an online shopping business. In particular, you are responsible for the back-office, where admins can add and edit products.

Today's task is to build a system to add new products.

Here is the API: https://striveschool-api.herokuapp.com/api/product/

Here is the product model:

{
"\_id": "5d318e1a8541744830bef139", //SERVER GENERATED
"name": "app test 1", //REQUIRED
"description": "somthing longer", //REQUIRED
"brand": "nokia", //REQUIRED
"imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
"price": 100, //REQUIRED
"userId": "admin", //SERVER GENERATED
"createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
"updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
"\_\_v": 0 //SERVER GENERATED
}
EVERY API CALL SHOULD BE AUTHENTICATED! Every request to the API should use Token Based Authentication to secure access to the contents. Without it, you cannot access the API. You can get your token by registering on: strive.school/studentlogin The token should go in the Authorization header.

Tokens duration is set to 14 days. Whenever you'll need to obtain a new one you can send the following request:

POST https://striveschool-api.herokuapp.com/api/account/login
{ "username": "testusername@yourmail.com", "password":"pass" }

🎯GOALS:
A back-office page, where you can insert the product by specifying the parameters
A front page, where the user can see the available products
On the back-office page:
Add a button and the functionality to edit a single product (use PUT on /product/product_id)
Add a button and the functionality to delete a single product (use DELETE on /product/product_id)
Add validation to the product creation/edit form
Display an error message if something goes wrong (use bootstrap's components)
On the front page:
Add a loader while waiting for the products to load
Add a link to each item to go to the detail page
Create the detail page! You can use GET on /product/product_id

🔴PROBLEM SOLVING CENTER / FAQ:
Learning how to read errors is very important! ✨

I am getting an empty array, why?

The API send you only the products YOU add. Try to POST something.

I am getting a 500 error, is something wrong with the server?

Probably not, check the preview of your response in the network tab. The response will give you the answer you are looking for. Usually:

You are missing a field in your body
You have a "duplicate key", which means something with that name already exists
You sent the wrong type of data (eg. a string instead of a number on the price property)
