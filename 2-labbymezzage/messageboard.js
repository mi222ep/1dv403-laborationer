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
    var message = messageApp.messages[messageID].getHTMLText();
    var time = messageApp.messages[messageID].getDateText();
    var div = document.createElement("div");
    var em = document.createElement("em");
    var p = document.createElement("p");
    
    div.appendChild(em);
    div.appendChild(p);
    
    p.innerHTML = message;
    em.innerHTML = time;
    var di = document.querySelector("#messagearea");
    di.appendChild(div);
},

};




window.onload = messageApp.init;