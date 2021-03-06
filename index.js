var http = require('http');

const CONTENT = process.env.CONTENT
if (!CONTENT) throw new Error('CONTENT env var not specified');

const CONTENT_TYPE = process.env.CONTENT_TYPE || 'text/plain'

const TOKEN = process.env.TOKEN
const FILENAME = process.env.FILENAME  // .well-known/acme-challenge/example_token

if (!TOKEN && !FILENAME) throw new Error('TOKEN or FILENAME env var must be specified');

const PORT = process.env.PORT || 8080

http.createServer(function (req, res) {

  if (req.url == "/health")
  {
    res.write("OK");
  }
  else if ((FILENAME && req.url == `/${FILENAME}`) || req.url == `/.well-known/acme-challenge/${TOKEN}`)
  {
    res.writeHead(200, { 'Content-Type': CONTENT_TYPE });
    res.write(CONTENT);
  }
  else {
    res.writeHead(404);
    res.write("Not found");
  }
  res.end(); //end the response
}).listen(PORT);
