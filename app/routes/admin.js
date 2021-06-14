
module.exports = function(application) {
    application.get('/adicionar_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;
        var conn = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, conn, function( error, result) {
            res.redirect('/noticias');
        });
    });

    
}