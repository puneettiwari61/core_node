var http = require('http');
var url = require('url')
var fs = require('fs')
var qs = require('querystring');
// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.


// var server = http.createServer((req,res) => {
//   res.write('Welcome to NodeJS');
//   res.end();
// })


// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

// var server = http.createServer((req,res)=>{
//   res.write(JSON.stringify(req.headers));
//   res.end();
// })

// server.listen(3002);

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

// var server = http.createServer(handleRequest);
// function handleRequest(req,res){
//   console.log(req.url,req.method)
// }

// server.listen(3000)

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000
  

  // var server = http.createServer(handleRequest);
  //  function handleRequest(req,res){
  //    res.setHeader('content-type','text/html');
  //    res.write('<h1>Hello from  server</h1>');
  //    res.end()
  //  }
  //  server.listen(7000)
  
  

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response

  // var server = http.createServer(handleRequest);
  //  function handleRequest(req,res){
  //    res.setHeader('content-type','text/html');
  //    fs.createReadStream('./index.html').pipe(res);
  //  }
  //  server.listen(7000)

// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file



  // var server = http.createServer(handleRequest);
  //  function handleRequest(req,res){
  //    res.setHeader('content-type','text/html');
  //    if(req.url === '/index'){
  //     fs.createReadStream('./index.html').pipe(res);
  //    }
  //    else if(req.url === '/about'){
  //     fs.createReadStream('./about.html').pipe(res);
  //    }
  //    else if(req.url === '/contact'){
  //     fs.createReadStream('./contact.html').pipe(res);
  //    }
  //    else{
  //      res.end('path not found')
  //    }
  //  }
  //  server.listen(7000)


// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response
   
  // function handleRequest(req,res){
  //   var store = '';
  //   req.on('data', (chunks) => {
  //       store += chunks;
  //   }).on('end', ()=> {
  //     res.end(store)
  //   })
  // }

  // server.listen(3000)


// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response

  // function handleRequest(req,res){
  //   var store = '';
  //   req.on('data', (chunks) => {
  //       store += chunks;
  //   }).on('end', ()=> {
  //     var parsedStore = JSON.parse(store);
  //     res.end(store);
  //   })
  // }

  // server.listen(3000)



// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response

  //  function handleRequest(req,res){
  //   var store = '';
  //   req.on('data', (chunks) => {
  //       store += chunks;
  //   }).on('end', ()=> {
  //     parsedForm = qs.parse(store)
  //     console.log(parsedForm);
  //     res.end(store);
  //   })
  // }

  // server.listen(3000)


    

// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

  // var server = http.createServer(handleRequest)
  // function handleRequest(req,res){
  //   var parsed = url.parse(req.url,true)
  //   console.log(parsed);
  //   res.end(parsed.path)
  // }
  // server.listen(7000)

  

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node


// var path = require('path');
// var theoryAbs = path.join(__dirname,'theory.md');
// console.log(theoryAbs)
// var theoryRel = path.relative(__dirname,'theory.md')
// console.log(theoryRel);