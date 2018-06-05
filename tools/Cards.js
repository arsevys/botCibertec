/**@author arsevys
  @version 0.0.4
  @correo  andyrobersjavierreyes@gmail.com
 */
var SendFacebook = require('./SendFacebook');
class Cards {
    /*
    -idUSUARIO

    -config =config = [{
        "titulo": "",
        "imagen": "",
        "descripcion": "",
        "botones": [{
            "tipo": "postback",
            "titulo": "",
            "mensaje": ""
        }, {
            "tipo": "compartir"
        }, {
            "tipo": "llamar",
            "titulo": "",
            "numero": ""
        }, {
            "tipo": "url", "titulo": "",
            "url": ""
        }]
    }]

     */
    static enviar(idUsuario, config) {
        console.log(arguments);
        let molde = {
            "recipient": {
                "id": idUsuario || "1691387647603633"
            },
            "message": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": []
                    }
                }
            }
        }
        if (config.length > 0) {
            console.log("/////////////////////")
            let x = molde.message.attachment.payload.elements;
            for (let i = 0; config.length > i; i++) {
                let __armarCard = config[i];
                let createCard = new Object();
                if (__armarCard.titulo) {
                    createCard["title"] = __armarCard.titulo;
                }
                if (__armarCard.imagen) {
                    createCard["image_url"] = __armarCard.imagen;
                }
                if (__armarCard.descripcion) {
                    createCard["subtitle"] = __armarCard.descripcion;
                }
                if (__armarCard.botones) {
                    let botones = new Array();
                    if (__armarCard.botones.length == 0) {
                        return;
                    }
                    for (let y = 0; __armarCard.botones.length > y; y++) {
                        let o = __armarCard.botones[y];
                        if (o.tipo) {
                            switch (o.tipo) {
                                case "postback":
                                    let botonPostback = {
                                        "type": "postback",
                                        "title": "ver mi nota",
                                        "payload": "Das"
                                    }
                                    botonPostback["title"] = o.titulo;
                                    botonPostback["payload"] = o.mensaje;
                                    console.log(botonPostback, "78854");
                                    botones.push(botonPostback);
                                    break;
                                case "url":
                                    let botonUrl = {
                                        "type": "web_url",
                                        "url": "https://petersfancybrownhats.com",
                                        "title": "Visitar"
                                    }
                                    botonUrl["title"] = o.titulo;
                                    botonUrl["url"] = o.url;
                                    botones.push(botonUrl);
                                    break;
                                case "llamar":
                                    let botonLlamar = {
                                        "type": "phone_number",
                                        "title": "LLamar",
                                        "payload": "940834058"
                                    }
                                    botonLlamar["title"] = o.titulo;
                                    botonLlamar["payload"] = o.numero;
                                    botones.push(botonLlamar);
                                    break;
                                case "compartir":
                                    let botonCompartir = {
                                        "type": "element_share"
                                    }
                                    botones.push(botonCompartir);
                                    break;
                            }
                        }
                    }
                    console.log(botones, "/******/*/**/*")
                    createCard["buttons"] = botones;
                }
                x.push(createCard);
                if (config.length - 1 == i) {
                    SendFacebook.enviar(molde);
                }
            }
        }
    }
}
module.exports = Cards;