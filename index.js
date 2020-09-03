var app = require('express')();
var http = require('http').Server(app);
// Import Socket.io module
var io = require('socket.io')(http);
var ejs = require("ejs")

var port = process.env.PORT || 3000;

app.set("ejs", "view-engine");

app.get('/', function(req, res){
  res.render(__dirname + '/index.ejs');
});

// Our Socket.io module is here
io.on('connection', function(socket){
// We take our socket.io message from "chat message"
  socket.on('chat message', function(msg){
// Send message to server from io.emit
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
