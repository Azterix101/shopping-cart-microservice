const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/shopping_cart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use("/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
