var http = require('http');
var console = require('console');

var server = http.createServer(function(req, res) {
    body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
      console.log(req.headers);
      console.log(req.url);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;

      if (req.url == '/acquire') {
        console.log('acquire');
        res.end('{accepted: true, responseMessage: {message: \"Accepted!\", verbosity: 0}, }');
      }
      if (req.url == '/release')
      {
        console.log('release');
        res.statusCode = 202;
        res.end();
      }
      if (req.url == '/definitions') {
        console.log('definitions');
        res.end();
      }
      if (req.url == '/status') {
        console.log('status');
        res.end('{statusMessage: \"Bananas!\"}');
      }
      else {
        console.log('unhandled');
        res.end('{ accepted : true }');  
      }
    });
});



server.listen(8082);
