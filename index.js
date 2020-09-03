var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ejs = require("ejs")

var port = process.env.PORT || 3000;

app.set("ejs", "view-engine");

app.get('/', function(req, res){
  res.render(__dirname + '/index.ejs');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
