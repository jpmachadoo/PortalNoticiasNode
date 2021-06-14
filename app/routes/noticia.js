module.exports = function(application) {

    application.get('/noticia', (req, res) => {
        var conn = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(conn, function( error, result) {
            res.render("noticias/noticia", {noticia: result});
        })
    });
    
}
