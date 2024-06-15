const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    name: String,
    email: String,
  })
);

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    name: String,
    price: Number,
    description: String,
    category: String,
  })
);

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    items: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
  })
);

mongoose.connect("mongodb://localhost/shopping_cart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  { userId: "user1", name: "John Doe", email: "john.doe@example.com" },
  { userId: "user2", name: "Jane Smith", email: "jane.smith@example.com" },
];

const products = [
  {
    productId: "prod1",
    name: "Laptop",
    price: 1000,
    description: "High performance laptop",
    category: "Electronics",
  },
  {
    productId: "prod2",
    name: "Headphones",
    price: 200,
    description: "Noise cancelling headphones",
    category: "Accessories",
  },
  {
    productId: "prod3",
    name: "Coffee Mug",
    price: 20,
    description: "Ceramic coffee mug",
    category: "Kitchen",
  },
];

const carts = [
  {
    userId: "user1",
    items: [
      { productId: "prod1", quantity: 1 },
      { productId: "prod2", quantity: 2 },
    ],
  },
  {
    userId: "user2",
    items: [{ productId: "prod3", quantity: 3 }],
  },
];

const seedDatabase = async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Cart.deleteMany({});

  await User.insertMany(users);
  await Product.insertMany(products);
  await Cart.insertMany(carts);

  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDatabase().catch((err) => console.error(err));
