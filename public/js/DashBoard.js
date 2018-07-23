
var id ="";


window.addEventListener("load",cargando,false);
var maqueta = undefined;

function cargando(){
	const plantillas = document.querySelectorAll("#panel > div");
	for(let i = 0;i<plantillas.length;i++){
		plantillas.item(i).addEventListener("dragstart",dragStart,false);
		plantillas.item(i).addEventListener("drag",drag,false);
	}
	maqueta = document.getElementById("maqueta");
	maqueta.addEventListener("dragenter",function(e){e.preventDefault()},true);
	maqueta.addEventListener("dragover",function(e){e.preventDefault()},true);
	maqueta.addEventListener("drop",drops,true);
}

function dragStart(e){
	e.dataTransfer.setData("Text",e.target.dataset.tipo);
}

function drag(e){
	maqueta.style.boxShadow ="0px 0px 3px 0px #29B8CC";
}

function drops(e){
	maqueta.style.boxShadow ="0px 0px 3px 0px white";
	e.preventDefault();
	const tipo = e.dataTransfer.getData("Text");
	maqueta.innerHTML = plantillas[tipo];
}

function addButtons(type){
	const label = document.createElement("label");
	let html = "";
	switch (type){
		case 1 : html = 'Botón Web <input type="text" class="btn_web">';break;
		case 2 : html = 'Botón Llamar <input type="text" class="btn_llamar">';break;
		default:
				html= 'Botón Compartir <input type="text" class="btn_compartir">'
	}

	label.innerHTML = html;

	document.getElementById("botoncontent").insertBefore(label,document.getElementById("baseBtn"));
	modalToggle()
}



function modalToggle(){
	const modal = document.getElementById("botonTipo");
	debugger;
	const aplicacion = modal.dataset.estado == "none"? "flex":"none";
	modal.dataset.estado = aplicacion;
	modal.style.display = aplicacion;
}

function botonera(){
	let bt = document.getElementById("botoncontent");
	let Arrar = [];
	if(bt){
		let btw = bt.querySelectorAll('label .btn_web');
		let btl = bt.querySelectorAll('label .btn_llamar');
		let btc = bt.querySelectorAll('label .btn_compartir');
		for(let i = 0;i< btw.length;i++){
			let ar = btw.item(i).value;
			ar = ar.split(";")
				let j = {
				  "type": "web_url",
				  "url": ar[1],
				  "title": ar[0],
				};
			Arrar.push(j);
		}
		for(let i = 0;i< btc.length;i++){
			Arrar.push({
			  "type":"element_share"
			});
		}
		for(let i = 0;i< btl.length;i++){
			let ar = btl.item(i).value;
			ar = ar.split(";")
				let j = {
				  "type":"phone_number",
				  "title":ar[0],
				  "payload":ar[1]
				};
			Arrar.push(j);
		}
	}
	return Arrar;
}

function send(){
	let img = document.getElementById("img");
	let titulo = document.getElementById("title");
	let sub = document.getElementById("subtitle");
	let texto = document.getElementById("texto");
	let botones = botonera();
	let js = {};

	if(img && titulo && sub && texto){
		js = mensajeCard(titulo.value,sub.value,img.value,botones)
	}
	else if(img){
		js = mensajemulti(img.value)
	}
	else if(texto && botones.length > 0){
		js = mensajesSimples(texto.value,botones)
	}
	else if(texto){
		js = mensaje(texto.value)
	}

	var headers= new Headers();


  headers.append("Accept","application/json");
  headers.append("Content-Type",'application/json');
 debugger;
  fetch("/sendFormulario",{
  	method:"POST",
  	headers:headers,
  	body:JSON.stringify({
  		data:js,
  		fini:document.getElementById("finicio").value,
  		ffin:document.getElementById("ffin").value,
  		dir:document.getElementById("dir").value
  	})
  }).then(resp => {
   console.log(resp);
}).catch(err => {
   console.log(err);
})
    

	console.log(js);
}

function mensajesSimples(texto,botones){
	let json = {
			  "recipient":{
			    "id":id
			  },
			  "message":{
			    "attachment":{
			      "type":"template",
			      "payload":{
			        "template_type":"button",
			        "text":texto,
			        "buttons":botones
			      }
			    }
			  }
			};
	return json;
}

function mensajemulti(url){
	let json = {
	    "recipient": {
	        "id": id
	    },
	    "message": {
	        "attachment": {
	            "type": "image",
	            "payload": {
	                "is_reusable": true,
	                "url": url
	            }
	        }
	    }
	};
	return json;
}

function mensajeCard(titulo,sub,urls,botones){
	let json = {
		  "recipient":{
		    "id":id
		  },
		  "message":{
		    "attachment":{
		      "type":"template",
		      "payload":{
		        "template_type":"generic",
		        "elements":[
		           {
		            "title":titulo,
		            "image_url":urls,
		            "subtitle":sub,
		            "buttons":botones     
		          }
		        ]
		      }
		    }
		  }
		};

	return json;
}

function mensaje(texto){
	let json = {
		  "recipient":{
		    "id":id
		  },
		  "message":{
		    "text":texto
		  }
		};
	return json;
}