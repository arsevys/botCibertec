
var SendFacebook=require('./../Models/SendFacebook');
class PayloadCard{

static enviar(usuario,objeto){

	var ok={
		"recipient":{"id":usuario},
		"message":objeto
	};
SendFacebook.enviar(ok);

}



}



module.exports=PayloadCard;