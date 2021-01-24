const mongoose = require('mongoose');

const ProductDetailSchema = new mongoose.Schema({
    id:{
        type: String,
        required: [true, 'Please add an id'],
        trim: true,
        unique: true,
        minlength: [5, 'Length 5 characters'],
        maxlength: [5, 'Length 5 characters'],
        dropDups: true
      
    },
    name:{
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, 'Max length 50 characters'],
      
    },
    description: String,
    original_price:{
        type: Number,
        min: [0, 'min price is zero'],
        required:  [true, 'Please add a price']
  
      },
      discounted_price:{
          type: Number,
          min:0  [0, 'min  discount price is zero']
       
      },
    discount_percentage:{
        type: Number,
        min:[0, 'min discount is 0%'],
        max:[100, 'max disocunt is 100%']

        
    },
    images:{
      type: [String],
      required: true

    },
   
 
  
});

module.exports= mongoose.model('ProductDetail', ProductDetailSchema);