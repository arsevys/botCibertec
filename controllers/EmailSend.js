var nodemailer=require('nodemailer');
var buffer=require("buffer");

var nodeoutlook = require('nodejs-nodemailer-outlook')
// var ConectBD=require('./ConectBD');
class EmailSend{
static enviarCo(usuario,correo){
// console.log("Enviandoooooooooooooooooooooo------------------")
nodeoutlook.sendEmail({
    auth: {
        user: "andy.javier@mdp.com.pe",
        pass: "Nodejs1997"
    }, from: 'mdp-virtual-assistant@mdp.com.pe',
    to: correo,
     bcc: "mdp-virtual-assistant@mdp.com.pe",
    subject: 'Evento MDP : Muchas gracias por registrarte    !',
   
     html:`
                                               <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>MDP</title>
  <style type="text/css">
    *{
      font-family: 'Gothic A1', sans-serif;
    }

    h1{
      text-aling:center;
          font-size: 2.2em;
    }

    
  
  </style>
</head>
<body bgcolor="#F0F0F0" >
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#F0F0F0">
    <tr align="center">
      <td width="100%" height="20"></td>
    </tr>
    <tr align="center">
      <td width="600">
        <table cellpadding="0" cellspacing="0" border="0" width="600">
          <tr>
            <td height="10"></td>
          </tr>
          <tr align="left" width="100%">
            <td>
             
            </td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
          <tr align="left" width="100%">
            <td>
              <img width="600" height="150" src="https://scontent.flim17-1.fna.fbcdn.net/v/t1.15752-9/32271766_912617305583946_6786907424218415104_n.png?_nc_cat=0&oh=66528271ebe7be8fa572925249b29dc6&oe=5B50041D">
            </td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
          <tr align="left" width="100%">
            <td>
              <p>Hola ${usuario}</p>
              <p>Muchas gracias por registrarte a nuestro Evento MDP: Asistentes virtuales – Muchos más que sólo chatbots.
                               </p>
                               <p>Te esperamos el 28/05 a las 06:45 pm en La Carreta para compartir un momento agradable junto a expertos en el mundo de Asistentes Virtuales.
</p>
              <p>Nos vemos! <br/> El Equipo de MDP</p>
            </td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr align="center">
      <td width="100%" height="20"></td>
    </tr>
  </table>

</body>
</html>

     ` , attachments: [
            {
        filename: 'Agenda del evento.png',
        path:  __dirname+"/p1.png" 
    }]

});

}


static enviarICS(usuario,correo){

nodeoutlook.sendEmail({
    auth: {
        user: "andy.javier@mdp.com.pe",
        pass: "Nodejs1997"
    }, from: 'mdp-virtual-assistant@mdp.com.pe',
    to: correo,
     bcc: "mdp-virtual-assistant@mdp.com.pe",
    subject: 'Evento MDP : Agregar el evento a tu calendario',
   
     html: `
     <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>MDP</title>
  <style type="text/css">
    *{
      font-family: 'Gothic A1', sans-serif;
    }

    h1{
      text-aling:center;
          font-size: 2.2em;
    }

    
  
  </style>
</head>
<body bgcolor="#F0F0F0" >
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#F0F0F0">
    <tr align="center">
      <td width="100%" height="20"></td>
    </tr>
    <tr align="center">
      <td width="600">
        <table cellpadding="0" cellspacing="0" border="0" width="600">
          <tr>
            <td height="10"></td>
          </tr>
          <tr align="left" width="100%">
            <td>
        
            </td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
          <tr align="left" width="100%">
            <td>
              <img width="600" height="150" src="https://scontent.flim17-1.fna.fbcdn.net/v/t1.15752-9/32271766_912617305583946_6786907424218415104_n.png?_nc_cat=0&oh=66528271ebe7be8fa572925249b29dc6&oe=5B50041D">
            </td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
          <tr align="left" width="100%">
            <td>
              <p>Hola ${usuario}</p>
              <p>Gracias por registrarte. Adjunto encontrarás el archivo ics para que puedas agendar el evento en tu calendar de Outlook.</p>
              <p>Nos vemos! <br/> El Equipo de MDP</p>
            </td>
          </tr>
          <tr>
            <td height="10"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr align="center">
      <td width="100%" height="20"></td>
    </tr>
  </table>

</body>
</html>

     `

     , attachments: [
              {
                        filename: 'Agendar.ics',
                        path: __dirname+"/Reu.ics" ,
                        contentType: 'text/calendar'// optional, would be detected from the filename
                    }]

});

}




}



module.exports=EmailSend;