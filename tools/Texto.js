
var SendFacebook=require('./SendFacebook');

class Texto {

static enviar(usuario,mensaje){
	console.log(usuario + " "  + mensaje)
var _mensaje={
	"recipient":{
    "id":usuario
   },
   "message":{text:mensaje}
}

SendFacebook.enviar(_mensaje);



}



}


module.exports=Texto;