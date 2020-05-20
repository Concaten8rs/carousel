let path = require("path");
let productModel = require(path.join(__dirname, 'index.js')).productModel;

let randomNumberGenerator = (min, max, wantDecimal) => {
    let outputNum = min + (Math.random()*(max - min));
    if (!wantDecimal) outputNum = Math.floor(outputNum);
    return outputNum;
};



let sizeGenerator = () => {
    let outputArr = [];
    function sizeMaker (sizeStr) {
        return {
            size : sizeStr,
            availble : [true, false][Math.floor(Math.random())]
        };
    };
    outputArr.push(sizeMaker("S"));
    outputArr.push(sizeMaker("M"));
    outputArr.push(sizeMaker("L"));
    outputArr.push(sizeMaker("XL"));
    outputArr.push(sizeMaker("2XL"));
    
    return outputArr;
};
// ? sizes : [ 
    //     {
        //         size : 
        //         {
            //             type : String,
            //             enum : ["X", "M", "L", "XL", "2XL"]
            //         },
            //         availble : Boolean
//     }
// ],  

let photosGenerator = () => {
    let outputArr = [];
    function photoMaker (sizeStr) {
        return {
            phtot_id: randomNumberGenerator(1000, 9999, false),
            content : `https://fec-bucket.s3.amazonaws.com/product-photos/blacktee-${randomNumberGenerator(1, 10, false)}.jpg` ,// TODO : get the URL
            tweet : {
                tweet_id : randomNumberGenerator(1000, 9999, false),
                tweet_body : "Hi, this shirt is so comfy!" ,
                tweet_userName : "USER",
                tweet_dp : `https://fec-bucket.s3.amazonaws.com/user-photos/user.jpg`, // TODO : get the URL
            }
        };
    };
    
    for (var i = 0; i < 5; i++) {
        outputArr.push(photoMaker());
    }
    return outputArr;
};
// ? photos : [ 
    //     {
        //         photo_id : {
            //             type : Number,
            //             min : 1000,
            //             max : 9999
            //         },
            //         content : String,
            //         tweet : {
//             tweet_id : {
    //                 type : Number,
    //                 min : 1000,
    //                 max : 9999
//             },
//             tweet_content : {
    //                 type : String,
//                 minlength : 1,
//                 maxlength : 280
//             },
//             teet_userName : {
    //                 type : String,
    //                 minlength : 1,
//                 maxlength : 99
//             },
//             tweet_dp : String || 
//   "https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/Footwear/bfa5f26f-acbe-4352-a285-e9ddb3b7d558.jpeg",
//    https://airbnb-project-photos.s3.amazonaws.com/1/1-0ea2f48b"
//         }
//     }
// ]


(function () {
    let product = new  productModel({
        product_id : randomNumberGenerator(1000, 9999, false),
        //  {
        //     type : Number,
        //     min : 1000,
        //     max : 9999
        // }
        product_name : "The Cheapest BlackTee You'll Ever Get",
        price : randomNumberGenerator(0, 999999, true),
        // {
        //     type : Number,
        //     min : 0,
        //     max : 999999
        // },
        rating : randomNumberGenerator(0, 5, true),
        // {
        //     type : Number,
        //     min : 0,
        //     max : 5
        // },
        sizes : [], // ! ARRAY
        questions : false,
        favorite : false,
        photos : []// ! ARRAY 
    })
    product.sizes.push(...sizeGenerator());
    product.photos.push(...photosGenerator());
    product.save((err)=> {
        if (err) throw `Error : ${err}`;
        console.log("product saved!");
    })
})();