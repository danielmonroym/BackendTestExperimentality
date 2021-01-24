const Product = require('../models/Product');

// @desc    Get All Products
// @route GET /api/v1/products
// @access  Public
exports.getProducts = async (req, res, next) => {
  try {
    let query;
    const reqQuery= {...req.query};
    let queryStr = JSON.stringify(reqQuery.name)
    console.log(req.query);
    console.log(queryStr);
    const products = await Product.find(req.query);

    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a product
// @route POST /api/v1/products/

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};
