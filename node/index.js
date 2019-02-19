var http = require('http');  
var redis = require("redis");
var client = redis.createClient();
client.on('connect', function() {
    console.log('Redis client connected');
});

http.createServer(function(req, res) {
    var query = require('url').parse(req.url,true).query;
    console.log(query);
    client.get("sharing_cookies_" + query.session_id, function(err, reply) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(
            "session_id: " + query.session_id + "\n" +
            "user_id: " + reply + "\n"
        );
    });
}).listen(8888, '127.0.0.1');
