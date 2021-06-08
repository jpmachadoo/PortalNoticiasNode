
module.exports = function(app) {

    app.get('/noticias', (req, res) => {
        var conn = app.config.dbConnection();

        conn.query('select * from noticias', function( error, result) {
            res.render("noticias/noticias", {noticias: result});
        });
    });
    
}
