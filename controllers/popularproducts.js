const PopularProduct = require('../models/PopularProduct');

    // @desc    Create a popular product
// @route POST /api/v1/popularproducts/
exports.createPopularProduct = async (req, res, next) => {
  const popularProduct = await PopularProduct.create(req.body);
  res.status(201).json({
    success: true,
    data: popularProduct
  })
  };

// @desc    Get All Popular Products
// @route GET /api/v1/popularproducts
// @access  Public
exports.getPopularProducts = (req, res,next) =>{
    res.status(200).json({ success: true, msg: 'Show all popular products'});
  };
  