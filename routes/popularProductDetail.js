
const express = require("express");

const {
    getPopularProductDetail,
    createPopularProductDetail
} = require("../controllers/popularProductsDetail");
const router = express.Router();

router
.route("/")
.post(createPopularProductDetail)

router
.route("/:id")
.get(getPopularProductDetail)

module.exports = router;