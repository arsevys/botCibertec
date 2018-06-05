var SendFacebook=require('.//SendFacebook');

class Escribiendo {

static enviar(usuario){

	var es={
       "recipient":{"id":usuario},
       "sender_action":"typing_on"

	}
	SendFacebook.enviar(es)
}

}


module.exports=Escribiendo;