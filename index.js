var http = require('http');

const CONTENT = process.env.CONTENT
if (!CONTENT) throw new Error('CONTENT env var not specified');

const TOKEN = process.env.TOKEN
if (!TOKEN) throw new Error('TOKEN env var not specified');

const PORT = process.env.PORT || 8080

http.createServer(function (req, res) {
  if (req.url == `/.well-known/acme-challenge/${TOKEN}`)
  {
    res.write(CONTENT);
  }
  else {
    res.writeHead(404);
    res.write("Not found");
  }
  res.end(); //end the response
}).listen(PORT);
