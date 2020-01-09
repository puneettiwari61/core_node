

var http = require('http');
var fs = require('fs');

var initPAth = __dirname + '/' + 'public/' ;

var server = http.createServer(requestHandler);

function requestHandler(req, res) {
  console.log(req.url,req.method);
  // handle all html file together
  if(req.url === '/' || req.url === '/index') {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(initPAth+'index.html').pipe(res);
    // for all css files
  }
  else if(req.url === '/about') {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(initPAth+'about.html').pipe(res);
    // for all css files
  }

  else if(req.url === '/service') {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(initPAth+'service.html').pipe(res);
    // for all css files
  }

  else if(req.url === '/contact') {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(initPAth+'contact.html').pipe(res);
    // for all css files
  }
  
  else if(req.url.includes('css')) {
    //handle css file here
    // first set headers ie. 'text/css'
    res.setHeader('Content-Type', 'text/css')
    // read css file and send it in response using createReadStream
    fs.createReadStream(initPAth+'assets/stylesheet/style.css').pipe(res);
    // for handling images
  } else if(['png', 'jpg', 'jpeg'].indexOf(req.url.split('.').pop())>-1) {
    //send images here with appropraite content type
    var type = req.url.split('.').pop()
    if(req.url.includes(type)){
      res.setHeader('Content-Type', 'img/'+type)
    }
    fs.createReadStream(initPAth+req.url).pipe(res);
  }
  else {
    res.statusCode = 400;
    res.end('Page not found')
  }
}

server.listen(3000);
