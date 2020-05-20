// require path 
const path = require("path");
// require model from database
const dataRetriver = require(path.join(__dirname, "..", "database", "index.js")).dataRetriver;
// write the object to be exported
module.exports = {
    get : (req, res) => {
        dataRetriver((err, data) => {
            if (err) throw "Error : " + err;
            res.json(data)
        });
    }
}