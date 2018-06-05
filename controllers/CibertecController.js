var Texto = require("./../tools/Texto")
var BD = require("./../models/cibertecModels");
var FB_GRAPH = require("./../tools/FBGraph");
var DIALOGFLOW= require("./../tools/DialogFlowV2");
var SEND_FB = require("./../tools/SendFacebook");
class Cibertec {
    static enviarNotificacion(req, res) {
      res.sendStatus(200);
     BD.enviarNotificaciones(function(data){
       

        for(let i=0;data.length>i;i++){
            let x=data[i]
             let msj= JSON.parse(x.descri_noti);
             msj.recipient.id=x.id;
             console.log(msj);
             SEND_FB.enviar(msj);
        }
     })


    }
    static inicio(req, res) {
        res.render("login");
    }
    static menu(req, res) {
        res.render("dashboard");
        BD.getUsuarios("usuario_usu", function(data) {
            console.log(data);
        })
    }
    static insertarNotificacion(req, res) {
        res.sendStatus(200);
        console.log(req.body);
        let json = {
            "fini": req.body.fini,
            "ffin": req.body.ffin,
            "dirigido": req.body.dir,
            "descri": JSON.stringify(req.body.data),
            "titulo": "Probandoo",
            "userid": 1,
            "tiponoti": 1
        }
        BD.insertarNotificaciones(json, function(data) {
            console.log(data);
        })
    }
    /*Bots Webhook*/
    static webhook(req, res) {
        res.sendStatus(200);
        console.log(req.body);
        var dato = req.body.entry[0].messaging[0];
        var id = dato.sender.id;
        BD.existeUsuario(id, function(data) {
            console.log(data);
            if (data == 1) {
                console.log("Existe Usuario");
                let config={
                    id:id,
                    text:"hola"
                }
                DIALOGFLOW.enviar(config,"")

            } else if (data == 2) {
                FB_GRAPH.consultar(id, function(dato) {
                    BD.registrarUsuario(dato, function(err, done) {
                        console.log("se registro  Usuario");
                    })
                })
            }
        })
        console.log(dato);
        // Texto.enviar(id,"Probandooooooo");
    }
}
module.exports = Cibertec;