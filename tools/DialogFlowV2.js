const ProyectoID = "ciberteccomunica-255fd";
var ToolsDialogFlowV2=require("./ToolsDialogFlowV2");
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();
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