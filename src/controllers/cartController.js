const Cart = require("../models/cartModel");

exports.addItemToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      // Cart exists for user
      let itemIndex = cart.items.findIndex((p) => p.productId === productId);
      if (itemIndex > -1) {
        // Product exists in the cart, update the quantity
        let productItem = cart.items[itemIndex];
        productItem.quantity = quantity;
        cart.items[itemIndex] = productItem;
      } else {
        // Product does not exist in cart, add new item
        cart.items.push({ productId, quantity });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      // No cart for user, create new cart
      const newCart = await Cart.create({
        userId,
        items: [{ productId, quantity }],
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      return res.status(200).send(cart);
    } else {
      return res.status(404).send("Cart not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.removeItemFromCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId === productId);
      if (itemIndex > -1) {
        cart.items.splice(itemIndex, 1);
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      return res.status(404).send("Cart not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
