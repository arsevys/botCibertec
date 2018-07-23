var request = require("request")
var BD = require("./../models/cibertecModels");
class WebServiceCibertec {
    static ValidarCodigoAlumno(id,codigo, callback) {
        if (codigo.toUpperCase() == "I201610096") {
        	/*aqui consultar WS Cibertec*/
        	BD.actualizarUsuarioWS(id,{sede:1,carrera:1,correo:"andyrobersjavierreyes@gmail.com"},function(t){
              callback(true);

        	})
        	
        } 
        	else {
        		callback(false)
        	}
    }
}
module.exports = WebServiceCibertec;