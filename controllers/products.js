const Product = require("../models/Product");

// @desc    Get All Products
// @route GET /api/v1/products
// @access  Public
exports.getProducts = async (req, res, next) => {
  try {
    let query;

    //Copy of req.query
    const reqQuery = { ...req.query };

    //Fields to exclude
    const removefields = ["page", "limit"];

    //Loop over remofields and delete them from reqQuery
    removefields.forEach((param) => delete reqQuery[param]);
    query = Product.find({
      name: { $regex: new RegExp(req.query.name, "ig") },
    });

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;   
    const limit = parseInt(req.query.limit, 10) || 10;   
    const startIndex= (page-1)*limit;
    const endIndex= page*limit;
    const total = await Product.countDocuments();

    query= query.skip(startIndex).limit(limit);

    // Executing query
    const products = await query;

    //Pagination result
    const pagination ={};

      if(endIndex < total){
        pagination.next ={
          page: page + 1,
          limit

        }
      }

      if(startIndex > 0){
        pagination.prev ={
          page: page - 1,
          limit

        }
      }
    
    res
      .status(200)
      .json({ success: true, count: products.length, pagination, data: products });
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
