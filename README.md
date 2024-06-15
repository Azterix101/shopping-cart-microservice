### README.md

# Shopping Cart Microservice

This is a simple shopping cart microservice built with Node.js and Express. The service supports basic cart operations such as adding items to a cart, removing items from a cart, and retrieving the cart details for a user. It also includes dummy data to seed the database for testing purposes.

## Features

- Add items to cart
- Remove items from cart
- Get cart details

## Requirements

- Node.js
- MongoDB

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/shopping-cart-microservice.git
   cd shopping-cart-microservice
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB:**
   Ensure that MongoDB is running on your local machine. You can start it with the following command if it's installed locally:
   ```bash
   mongod
   ```

4. **Seed the database:**
   Insert dummy data into MongoDB:
   ```bash
   node seed.js
   ```

5. **Start the server:**
   ```bash
   npm start
   ```
   The service will be available at `http://localhost:3000`.

## API Endpoints

- `POST /cart/add`
  - Description: Add an item to the cart.
  - Body Parameters:
    - `userId`: The ID of the user.
    - `productId`: The ID of the product.
    - `quantity`: The quantity of the product.
  - Example Request:
    ```json
    {
      "userId": "user1",
      "productId": "prod1",
      "quantity": 1
    }
    ```

- `GET /cart/:userId`
  - Description: Get the cart details for a user.
  - URL Parameters:
    - `userId`: The ID of the user.
  - Example Request: `GET /cart/user1`

- `POST /cart/remove`
  - Description: Remove an item from the cart.
  - Body Parameters:
    - `userId`: The ID of the user.
    - `productId`: The ID of the product.
  - Example Request:
    ```json
    {
      "userId": "user1",
      "productId": "prod1"
    }
    ```

## Project Structure

```
shopping-cart-microservice/
├── src/
│   ├── controllers/
│   │   └── cartController.js
│   ├── models/
│   │   └── cartModel.js
│   ├── routes/
│   │   └── cartRoutes.js
│   └── index.js
├── .gitignore
├── README.md
├── package.json
├── nodemon.json
└── seed.js
```

## Dummy Data

The project includes a `seed.js` script that seeds the database with the following dummy data, run npm seed:

- **Users:**
  ```json
  [
    {
      "userId": "user1",
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "userId": "user2",
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ]
  ```

- **Products:**
  ```json
  [
    {
      "productId": "prod1",
      "name": "Laptop",
      "price": 1000,
      "description": "High performance laptop",
      "category": "Electronics"
    },
    {
      "productId": "prod2",
      "name": "Headphones",
      "price": 200,
      "description": "Noise cancelling headphones",
      "category": "Accessories"
    },
    {
      "productId": "prod3",
      "name": "Coffee Mug",
      "price": 20,
      "description": "Ceramic coffee mug",
      "category": "Kitchen"
    }
  ]
  ```

- **Carts:**
  ```json
  [
    {
      "userId": "user1",
      "items": [
        {
          "productId": "prod1",
          "quantity": 1
        },
        {
          "productId": "prod2",
          "quantity": 2
        }
      ]
    },
    {
      "userId": "user2",
      "items": [
        {
          "productId": "prod3",
          "quantity": 3
        }
      ]
    }
  ]
  ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.