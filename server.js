var http = require('http')

var server = http.createServer(function (req, res) {
  console.log('request came', req.url)
  res.writeHead(400, {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
  res.end(JSON.stringify({ name: 'Ali' }))
})

server.listen(3000)
