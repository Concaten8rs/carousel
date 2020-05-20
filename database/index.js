// require mongoose
let mongoose = require("mongoose");
// connect mongoose at products
const dotenv = require('dotenv');

dotenv.config();
const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT,
} = process.env;

const dbConnectUrl = { LOCALURL: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}` };


// mongoose.connect("mongodb://localhost/fec", {useNewUrlParser: true})

mongoose.connect(dbConnectUrl.LOCALURL);

// have productModel schema
let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  // we're connected!
  console.log("db connected!");
});

let productSchema = mongoose.Schema({
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
// have a model refer to that schema
let productModel = mongoose.model("Product", productSchema);
// write data retrival process
let dataRetriver = (callback) => {
    productModel.find({}, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data)
    })
}
// export the model
module.exports = {
    productModel,
    dataRetriver
}