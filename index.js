const express = require('express')
const app = express()
var router = express.Router();
const port = 3000

var path = __dirname + '/src/views/';
console.log("this is the path:  " + path)
console.log("this is the directory:  " + __dirname)

app.use('/',router);
app.use(express.static(__dirname + '/public'));
  
router.get('/',function(req, res){
  res.sendFile(path + 'index.html');
});
  
router.get('/test',function(req, res){
  res.sendFile(path + 'test.html');
});

router.get('/product',function(req, res){
  res.sendFile(path + 'product.html');});
  
router.get('/about',function(req, res){
  res.sendFile(path + 'about.html');
});
  
app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
  
app.listen(3000,function(){
  console.log('Server running at Port 3000');
});