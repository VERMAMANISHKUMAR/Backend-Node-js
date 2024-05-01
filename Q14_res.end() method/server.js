const http= require('http')
const server=http.createServer((req,res)=>{
          res.write('This is coding from coding ninja nodejs server. ');

          console.log(req.url);

          if(req.url == '/first'){

              res.end('This is my first response');
          }else
          {
                    res.end('This is my deault response');
          }         
});

server.listen(3200,(req,res)=>{
console.log('server is listening at 3200');
});