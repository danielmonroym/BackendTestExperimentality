
const express = require("express");

const {
    getProductDetail,
    createProductDetail
} = require("../controllers/productDetail");
const router = express.Router();

router
.route("/")
.post(createProductDetail)

router
.route("/:id")
.get(getProductDetail)

module.exports = router;