### How to install Nodejs/Socket.io

- Download Repository
-  Run ` npm install` from cmd then run `npm start`
-  You need to this line for to integrate your project<pre>
	// Our Socket.io module is here
	io.on('connection', function(socket){
	// We take our socket.io message from "chat message"
	  socket.on('chat message', function(msg){
	// Send message to server from io.emit
	io.emit('chat message', msg);
	  });
	});
</pre>
---

### How does work

> Display one> Display two.

![](https://github.com/jack5341/Socket-Project/blob/master/images/imageOne.PNG) ![](https://github.com/jack5341/Socket-Project/blob/master/images/imageTwo.PNG)



