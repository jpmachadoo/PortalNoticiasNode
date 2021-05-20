module.exports = function(app) {
    app.get('/adicionar_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });
}