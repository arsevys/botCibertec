var express = require("express");
var app = express();
var BD = require("./models/cibertecModels");
var SEND_FB = require("./tools/SendFacebook");
var ejs = require("ejs");
var path = require('path');
var bodyParser = require("body-parser");
var routes = require('./routes/routes');
let puerto = process.env.PORT || 3100;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/public");
app.use(express.static(path.join(__dirname, "public"))); //especifica 
routes.asignandoEnrutador(app);
app.listen(puerto, () => {
    console.log("Servidor ejecutando")
});



setInterval(function() {
    BD.enviarNotificaciones(function(data) {
        // console.log(data);
        for (let i = 0; data.length > i; i++) {
            let x = data[i];
            let msj = JSON.parse(x.descri);
            msj.recipient.id = x.id_usu;
            SEND_FB.enviar(msj);
        }
    })
}, 5000)