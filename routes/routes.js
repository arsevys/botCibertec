var CibertecController = require("./../Controllers/CibertecController");

exports.asignandoEnrutador = function(app) {


    app.get("/", CibertecController.inicio);
    app.get("/menu", CibertecController.menu);
    app.get("/webhook", function(req, res) {
        if (req.query['hub.mode'] && req.query['hub.verify_token'] === "cibertec") {
            console.log("Enlazado con facebook");
            res.status(200).send(req.query['hub.challenge']);
        } else {
            console.error("Failed validation. Make sure the validation tokens match.");
            res.sendStatus(403);
        }
    })
    app.post("/sendFormulario", CibertecController.insertarNotificacion);;
    app.post("/enviar", () => {})
    app.post("/webhook", CibertecController.webhook);
    app.post("/enviarNotificacion", CibertecController.enviarNotificacion);
}