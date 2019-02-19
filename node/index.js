var http = require('http');  
var redis = require("redis");
var client = redis.createClient();
client.on('connect', function() {
    console.log('Redis client connected');
});

function getSessionID (request) {
    var list = {},
        rc = request.headers.cookie;

    var session_id;
    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        if (parts[0].trim() == 'shared_session_id') {
            session_id = parts[1].trim();
        }
    });
    return session_id;
}

http.createServer(function(req, res) {
    var session_id = getSessionID(req);
    console.log(session_id);
    if (session_id == null) {
        console.log("Cookies not set");
        res.end("Cookies not set");
    } else {
        client.get("sharing_cookies_" + session_id, function(err, reply) {
            if (err) {
                console.log(err);
                throw err;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(
                "session_id: " + session_id + "<br>" +
                "user_id: " + reply
            );
        });
    }
}).listen(8888, '127.0.0.1');
