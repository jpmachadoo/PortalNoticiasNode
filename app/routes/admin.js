
module.exports = function(application) {
    application.get('/adicionar_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;
        res.send(noticia);
    });

    
}