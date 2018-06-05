var SendFacebook=require('./../Models/SendFacebook');

class Quick_Replies {

static enviar(usuario,mensaje){
var msj={"recipient":{"id":usuario},
"message":{
	"text":"",
	"quick_replies":[
	]
}
	
};

msj.message.text=mensaje.title;

for(var i=0;mensaje.replies.length>i;i++){
var rp={
	"content_type":"text",
	"title":"",
	"payload":""
};
rp.title=mensaje.replies[i];
rp.payload=mensaje.replies[i];
msj.message.quick_replies.push(rp);


}


SendFacebook.enviar(msj);


// console.log(mensaje);


}

}



module.exports=Quick_Replies;