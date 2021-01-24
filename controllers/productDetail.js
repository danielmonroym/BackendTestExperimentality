const ProductDetail = require('../models/ProductDetail');
const ErrorResponse = require('../utils/errorResponse');

    // @desc    Create a product detail 
// @route POST /api/v1/productdetail
exports.createProductDetail= async (req, res, next) => {
  try{

  
  const productDetail = await ProductDetail.create(req.body);
  res.status(201).json({
    success: true,
    data: productDetail
  })
} catch (err){
  next(err);
}
  };

// @desc    Get a product detail
// @route GET /api/v1/productdetail/:id
// @access  Public
exports.getProductDetail = async (req, res,next) =>{
   try{
    const productDetail = await ProductDetail.findOne({
        id: req.params.id
    });
    if (!productDetail) {
        return next(
            new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
          );
    }
    res.status(200).json({ success: true, data: productDetail });
   } catch(err){
     next(err);
   }

  };