var app = require("./config/server");

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormAddNoticias = require('./app/routes/form_add_noticias')(app);

app.listen(3000, console.log('Servidor ON'));