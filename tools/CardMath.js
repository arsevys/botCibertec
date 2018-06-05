const ConectBD=require('./../Models/ConectBD');
var SendFacebook=require('./../Models/SendFacebook');

class CardMath {

constructor(dato){
	this.id=dato.id;
	this.localidad=dato.localidad;
	this.duracion=dato.duracion;
	this.horario=dato.horario;
	this.doble_titulacion=dato.doble_titulacion;
	this.dv=null;
}
set ms(x){
this.dv=x;
}

consultar(){
var self=this;
var template={
	"recipient":{"id":self.id},
	"message" : {
  "attachment":{
  	"type":"template",
  	"payload":{
  	"template_type":"generic",
  	"elements":[]	
  	}
  }
  }};
  
ConectBD.CardMath(self.localidad,self.duracion,self.horario,self.doble_titulacion,(err,dato)=>{

// console.log(self.localidad +" "+self.duracion+" "+self.horario+" "+self.doble_titulacion)
// console.log(dato);
// console.log(dato.rows[0])
for (var i=0;dato.rows.length>i;i++){
  // console.log("generando......")
var f=dato.rows[i];
var constructor={
 "title":'',
 "subtitle":'',
 "image_url":'',
 "buttons" :[
{
                "type":"postback",
                "title":"Eligir Esta Opcion",
                "payload":""
              } ,
             {
                "type": "web_url",
                "url": "http://centrum.pucp.edu.pe/centrum/asuntos-internacionales/escuelas-y-convenios//",
                "title": "Testimonios"
              },
               {
                "type": "web_url",
                "url": "http://centrum.pucp.edu.pe/centrum/nuestras-fortalezas/reconocimiento-internacional/",
                "title": "Ver Rankings"
              }
                     ]
};
constructor.title=f.titulo;
constructor.subtitle=f.subtitulo;
constructor.image_url=f.imagen;
constructor.buttons[0].payload=f.payload;

template.message.attachment.payload.elements.push(constructor);
if(i==dato.rows.length-1){
	// console.log(template)
SendFacebook.enviar(template);
}

}
});
// console.log("vamos ...")


return template;
}




obtener(){
	return this.dv;
}
}

module.exports=CardMath;