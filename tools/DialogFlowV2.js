const ProyectoID = "ciberteccomunica-255fd";
var ToolsDialogFlowV2=require("./ToolsDialogFlowV2");

const serviceAccount = require("./../CibertecComunica--144731563808.json"); 
const dialogflow = require('dialogflow');

let config = {
    credentials: {
       private_key: serviceAccount.private_key,
        client_email: serviceAccount.client_email

    }
}
const sessionClient = new dialogflow.SessionsClient(config);
const languageCode = 'es-US';
class DialogFlowV2 {
    static enviar(x, callback) {


        const sessionPath = sessionClient.sessionPath(ProyectoID, x.id);
        // The text query request.
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: x.text,
                    languageCode: languageCode,
                },
            }
        };
        console.log(request);
        sessionClient.detectIntent(request).then(responses => {
        	console.log(responses);
            console.log('Detected intent');
            const result = responses[0].queryResult;
            console.log(`  Query: ${result.queryText}`);
            console.log(`  Response: ${result.fulfillmentText}`);

                ToolsDialogFlowV2.procesar(x.id,responses);
            if (result.intent) {
                console.log(`  Intent: ${result.intent.displayName}`);
            } else {
                console.log(`  No intent matched.`);
            }
        }).catch(err => {
            console.error('ERROR:', err);
        });
    }
}
module.exports = DialogFlowV2;

// DialogFlowV2.enviar({id:'73456123564234',text:"hola"},()=>{

// })