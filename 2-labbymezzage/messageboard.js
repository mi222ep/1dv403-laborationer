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
    //Writes message counter
    var messageCount = document.querySelector("#messageNumber");
    messageCount.innerHTML = "Antal meddelanden:" +(messageID + 1);
    //Writes new message
    var message = messageApp.messages[messageID].getHTMLText();
    var time = messageApp.messages[messageID].getDateText();
    var div = document.createElement("div");
    var em = document.createElement("em");
    var p = document.createElement("p");
    var removeLink = document.createElement("a");
    var showTimeLink = document.createElement("a");
    var remove = document.createElement("img");
    var showTime = document.createElement("img");
    
    remove.setAttribute("src", "pics/delete.png");
    remove.setAttribute("height", "30");
    remove.setAttribute("width", "30");
    remove.setAttribute("id", "remove");
    remove.setAttribute("class", "smallLogo");
    remove.setAttribute("alt", "Papperskorg - tryck här för att radera meddelandet");
    
    showTime.setAttribute("src", "pics/time.png");
    showTime.setAttribute("height", "30");
    showTime.setAttribute("width", "30");
    showTime.setAttribute("id", "remove");
    showTime.setAttribute("class", "smallLogo");
    showTime.setAttribute("alt", "Klocka - tryck här för att se tid och datum då meddelandet skapades");
    
    removeLink.setAttribute("href", "#");
    showTimeLink.setAttribute("href", "#");
    
    removeLink.appendChild(remove);
    showTimeLink.appendChild(showTime);
    
    div.appendChild(removeLink);
    div.appendChild(showTimeLink);
    div.appendChild(em);
    div.appendChild(p);
    
    p.innerHTML = message;
    em.innerHTML = time;
    
    var di = document.querySelector("#messagearea");
    di.appendChild(div);
},

};




window.onload = messageApp.init;