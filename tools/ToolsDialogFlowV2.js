var Texto = require("./Texto");
var Escribiendo = require("./Escribiendo");
var Imagen = require("./Imagenes");
var Cards = require("./Cards");
/**@author arsevys
@copyright Derechos reservados de arsevys
@description tools sirve para facilitar el envio de datos de dialogflow v2
@version 0.5.0

**/
class ToolsDialogFlowV2 {
    static procesar(idUsuario, responses) {
        console.log(responses[0].queryResult.fulfillmentMessages)
        let Allmensajes = responses[0].queryResult.fulfillmentMessages;
        var contador = -1;

        function procesando(mensajes) {
            let tiempo = 0;
            if (mensajes.length > contador) {
                contador++;
                let mensaje = mensajes[contador];
                if (mensaje.message == "text") {
                    tiempo = 500;
                    // console.log(mensaje.text);
                    Texto.enviar(idUsuario, mensaje.text.text[0])
                } else if (mensaje.message == "image") {
                    tiempo = 2900;
                    Imagen.enviar(idUsuario, mensaje.image.imageUri);
                } else if (mensaje.message == "card") {
                    tiempo = 3900;
                    let config = {
                        "titulo": mensaje.card.title,
                        "descripcion": mensaje.card.subtitle,
                        "imagen": mensaje.card.imageUri
                    };
                    if (mensaje.card.buttons) {
                    	console.log(mensaje.card.buttons);
                        let h = new Array();
                        for (let i = 0; mensaje.card.buttons.length > i; i++) {
                            let t = mensaje.card.buttons[i];

                            // console.log("********////////////////")
                            // console.log(t);
                            h.push({
                                "tipo": "postback",
                                "titulo": t.text,
                                "mensaje": t.postback
                            })
                            // console.log(h);
                            if (mensaje.card.buttons.length == i + 1) {
                                config["botones"] = h;
                            }
                        }
                    }
                    Cards.enviar(idUsuario, [config]);
                }
                if (mensajes.length == contador + 1) {
                    return;
                } else {
                    Escribiendo.enviar(idUsuario);
                    setTimeout(function() {
                        procesando(Allmensajes);
                    }, tiempo)
                }
            } else {
                return;
            }
        }
        Escribiendo.enviar(idUsuario);
        setTimeout(function() {
            procesando(Allmensajes);
        }, 900)
    }
}
module.exports = ToolsDialogFlowV2;