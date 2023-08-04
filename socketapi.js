const io = require( "socket.io" )();
const socketapi = {
    io: io
};

var allUsers =[];

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    allUsers.push(socket.id);
    
socket.on( "disconnect", function() {
    console.log( "A user disconnect" );
    allUsers.push(socket.id );

});


    socket.on('allusers',function(){
        io.emit('allusers',allUsers)
    });
    socket.on("msg",function(data){
    io.emit("msg",data);
    })
});
 
    
// end of socket.io logic

module.exports = socketapi;