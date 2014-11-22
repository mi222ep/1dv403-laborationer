var messageApp ={ 
    
    messages: [],

init: function(){
    
    var submit = document.getElementById("send");
    submit.onclick = messageApp.CreateMessage;

},
CreateMessage: function(e){
    var text = document.getElementById("meddelande").value;
    var mess = new Message(text, new Date());
    messageApp.messages.push(mess);
    messageApp.RenderMessages();
    
}, 
RenderMessages: function(){
    //Remove all messages
    document.getElementById("messagearea").innerHTML = "";
    
            //Render all messages
    for(var i=0; i < messageApp.messages.length; ++i){
        messageApp.RenderMessage(i);
    }
},
RenderMessage: function(messageID){
    var axel = messageApp.messages[messageID].getHTMLText();
    document.getElementById("messagearea").innerHTML = axel;
},

};




window.onload = messageApp.init;