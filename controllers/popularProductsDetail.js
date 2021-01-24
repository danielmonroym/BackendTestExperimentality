const PopularProductDetail = require('../models/PopularProductDetail');
const ErrorResponse = require('../utils/errorResponse');

    // @desc    Create a  popular product detail 
// @route POST /api/v1/popularproductdetail
exports.createPopularProductDetail= async (req, res, next) => {
  try{

  
  const popularProductDetail = await PopularProductDetail.create(req.body);
  res.status(201).json({
    success: true,
    data: popularProductDetail
  })
} catch (err){
  next(err);
}
  };

// @desc    Get a popular product detail
// @route GET /api/v1/popularproductdetail/:id
// @access  Public
exports.getPopularProductDetail = async (req, res,next) =>{
   try{
    const popularProductDetail = await PopularProductDetail.findOne({
        id: req.params.id
    });
    if (!popularProductDetail) {
        return next(
            new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
          );
    }
    res.status(200).json({ success: true, data: popularProductDetail  });
   } catch(err){
     next(err);
   }

  };
  