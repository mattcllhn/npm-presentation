//pull in express
var express = require('express');
//app is an instance of express
var app = express();


//makes your 'public' folder the root of your app
app.use(express.static('public'));

//tell app what port to listen on
app.listen(3000, function(){
  console.log('listening on 3000');
});

//when get request hits the root url, it responds by sending index.html
app.get('/',function(req,res){
  console.log('base url hit');
  res.send('index.html');
});

//when get request hits the about url, it responds by sending a string
app.get('/about',function(req,res){
  console.log('about route hit');
  res.send('<h1>All about me, yo</h1>');
});
