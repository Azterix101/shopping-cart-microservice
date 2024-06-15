const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/add", cartController.addItemToCart);
router.get("/:userId", cartController.getCart);
router.post("/remove", cartController.removeItemFromCart);

module.exports = router;
