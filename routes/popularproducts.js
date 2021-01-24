
const express = require("express");
const {
    getPopularProducts,
    createPopularProduct
} = require("../controllers/popularProducts");
const router = express.Router();

router
.route("/")
.get(getPopularProducts).post(createPopularProduct)

module.exports = router;