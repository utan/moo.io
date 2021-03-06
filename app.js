/**
 * TypeError: #<XHR> is not a function Moo server , Socket.io 1.0.0-pre
 * mootools
 * socket.io ver 1.0.0-pre
 * 
 **/
// require moo
require('mootools');
var io   = require('socket.io');
var http =   require('http');

var socketServer = new Class({
	Implements: Options,
	options   : {
		servPort			:	8080
	},
	
	initialize: function(options){
		this.setOptions(options);
		this.server	=	null;
		this.connectSocket();
	},
	connectSocket	:	function(){
		var server			= http.Server();
		this.server			= io(server);
		
		server.listen( this.options.servPort , function(){
			console.log('socket server initializaded on  port:' , this.options.servPort );
		}.bind(this));
	}
});

var app = new socketServer();