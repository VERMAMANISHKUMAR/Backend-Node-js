const http = require('http');

const server=http.createServer((req,res)=>{
          res.end('hello word');
});
const PORT =3000
server.listen(PORT,()=>{
          console.log('Server runing at http: 3000')
})