const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const adminData = require('./admin')

router.get("/", (req, res, next) => {
  const products = adminData.products
  res.render("shop", {
    products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss:true
  });
});

module.exports = router;
