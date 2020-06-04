const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  product_id : {
      type : Number,
      min : 1000,
      max : 9999
  },
  product_name : {
      type : String,
      minlength : 1,
      maxlength : 100
  },
  price : {
      type : Number,
      min : 0,
      max : 999999
  },
  rating : {
      type : Number,
      min : 0,
      max : 5
  },
  sizes : [ // ! ARRAY
      {
          size : {
              type : String,
              enum : ["S", "M", "L", "XL", "2XL"]
          },
          availble : Boolean
      }
  ],
  questions : Boolean,
  favorite : Boolean,
  photos : [// ! ARRAY
      {
          photo_id : {
              type : Number,
              min : 1000,
              max : 9999
          },
          content : String,
          tweet : {
              tweet_id : {
                  type : Number,
                  min : 1000,
                  max : 9999
              },
              tweet_body : {
                  type : String,
                  minlength : 1,
                  maxlength : 280
              },
              teet_userName : {
                  type : String,
                  minlength : 1,
                  maxlength : 99
              },
              tweet_dp : String
          }
      }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;