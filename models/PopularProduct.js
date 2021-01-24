const mongoose = require('mongoose');

const PopularProductSchema = new mongoose.Schema({

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
        maxlength: [50, 'Max length 50 characters']
    },
    slug: String,
    original_price:{
      type: Number,
      min:[0, 'min price is zero'],
      required:  [true, 'Please add a price']

    },
    discounted_price:{
        type: Number,
        min: [0, 'min discount price is zero']
     
    },
    discount_percentage:{
        type: Number,
        min:[0, 'min discount is 0%'],
        max:[100, 'max disocunt is 100%']
        
    },
    front_image:{
        type: String,
        required:  [true, 'Please add a front image'],
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            "Please use a valid URL with HTTP or HTTPS",
          ],

    },
    back_image:{
        type: String,
        required:  [true, 'Please add a front image'],
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            "Please use a valid URL with HTTP or HTTPS",
          ],

    }
  
});

module.exports= mongoose.model('PopularProduct', PopularProductSchema);