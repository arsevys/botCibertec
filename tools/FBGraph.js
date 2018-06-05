var request = require('request');
const access_token = require("./../utils/Constantes").FB_TOKEN;
class FBGraph {
    static consultar(id, callback) {
        request({
            url: "https://graph.facebook.com/v2.6/" + id + "?access_token=" + access_token + "",
            method: "GET"
        }, (error, response, body) => {
            if (error) {
                callback(false, {})
                return;
            }
            var user = JSON.parse(body);
            return callback(user)
            // console.log(user)
        })
    }
}
module.exports = FBGraph;