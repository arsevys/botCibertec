var request = require('request');
var token = require("./../utils/Constantes").FB_TOKEN;
class SendFacebook {
    static enviar(mensaje) {
        request({
            url: "https://graph.facebook.com/v2.6/me/messages?access_token=" + token,
            json: true,
            body: mensaje,
            timeout: 60000,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }, function(err, response, body) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(body, mensaje)
            console.log("mensaje enviado");
        });
    }
}
module.exports = SendFacebook;
/*
 {
  "recipient":{
    "id":"1359485604118975"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
           {
            "title":"Welcome!",
            "subtitle":"We have the right hat for everyone.fdfgksiudhfsdhfksbglsd sid sdho guods hdfuohd  ",
           
          }
        ]
      }
    }
  }
}



*/