var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render("home/index");
    });    
}
