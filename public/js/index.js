
const id ="1359485604118975";


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
}
function addImgen(){
	let cnt = document.getElementById("imgcontent").innerHTML = '<img src="http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg"><input onclick="link(this)" type="text" id="img">'
}

function link(x){
	document.getElementById("imgcontent").querySelector("img").src = x.value;
}

function addText(){
	const label = document.createElement("label");
	label.innerHTML = 'Texto <input type="text" id="texto">';
	document.getElementById("bodycontent").insertBefore(label,document.getElementById("basetexto"));
}


function addTitle(){
	const label = document.createElement("label");
	label.innerHTML = 'Titulo <input type="text" id="title">';
	document.getElementById("bodycontent").insertBefore(label,document.getElementById("basetitle"));
}


function addSubTitle(){
	const label = document.createElement("label");
	label.innerHTML = 'SubTitulo <input type="text" id="subtitle">';
	document.getElementById("bodycontent").insertBefore(label,document.getElementById("basesubtitle"));
}



function botonera(){
	let bt = document.getElementById("botoncontent");
	let btw = bt.querySelectorAll('label .btn_web');
	let btl = bt.querySelectorAll('label .btn_llamar');
	let btc = bt.querySelectorAll('label .btn_compartir');
	let Arrar = [];
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
	console.log(Arrar);
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
	else if(img && botones.length > 0){
		js = mensajemulti(img.value,botones)
	}
	else if(texto && botones.length > 0){
		js = mensajesSimples(texto.value,botones)
	}
	else if(texto){
		js = mensaje(texto.value)
	}

	console.log(js);
var headers = new Headers();

headers.append('Accept', 'application/json'); // This one is enough for GET requests
headers.append('Content-Type', 'application/json'); // This one sends body
 
  fetch('/sendFormulario', {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'include',
    redirect: 'follow',
    headers: headers,
    body: JSON.stringify({
        data:js
    }),
}).then(resp => {
   console.log(resp);
}).catch(err => {
   console.log(err);
})

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


function mensajemulti(url,botones){
	let json = {
		  "recipient":{
		    "id":id
		  },
		  "message":{
		    "attachment": {
		      "type": "template",
		      "payload": {
		         "template_type": "media",
		         "elements": [
		            {
				      "media_type": "image",
				      "url": url,
				      "buttons": botones
				   }
		         ]
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