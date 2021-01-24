const PopularProduct = require('../models/PopularProduct');

    // @desc    Create a popular product
// @route POST /api/v1/popularproducts/
exports.createPopularProduct = async (req, res, next) => {
  try{

  
  const popularProduct = await PopularProduct.create(req.body);
  res.status(201).json({
    success: true,
    data: popularProduct
  })
} catch (err){
  next(err);
}
  };

// @desc    Get All Popular Products
// @route GET /api/v1/popularproducts
// @access  Public
exports.getPopularProducts = async (req, res,next) =>{
   try{
    const popularProduct= await PopularProduct.find();
    res.status(200).json({ success: true, count: popularProduct.length, data: popularProduct });
   } catch(err){
     next(err);
   }

  };
  