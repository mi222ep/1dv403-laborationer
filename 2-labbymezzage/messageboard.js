var messageApp ={ 
    
    messages: [],

init: function(){
    
    //If submit button is clicked
    var submit = document.getElementById("send");
    var text = document.getElementById("meddelande");
    submit.onclick = messageApp.CreateMessage;
    
    //Posts message if enter is pressed + new line if enter+shift is pressed
    text.onkeydown = function(e){
            if (e.keyCode == 13 && !e.shiftKey) {
            messageApp.CreateMessage();
            return false;
            }
    };
},
CreateMessage: function(){
    var text = document.getElementById("meddelande").value;
    var mess = new Message(text, new Date());
    messageApp.messages.push(mess);
    messageApp.RenderMessages();
    
}, 
RenderMessages: function(){
    //Clears messagearea
    document.getElementById("meddelande").value = "";
    //Remove all messages
    document.getElementById("messagearea").innerHTML = "";
    //Writes message counter
    var messageCount = document.querySelector("#messageNumber");
    messageCount.innerHTML = "Antal meddelanden: " +(messageApp.messages.length);
    
    //Render all messages
    for(var i=0; i < messageApp.messages.length; ++i){
        messageApp.RenderMessage(i);
    }
},
RenderMessage: function(messageID){
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
    
    //Sets attribute for delete image
    remove.setAttribute("src", "pics/delete.png");
    remove.setAttribute("class", "smallLogo");
    remove.setAttribute("alt", "Papperskorg - tryck här för att radera meddelandet");
    
    //Sets attribute for time image
    showTime.setAttribute("src", "pics/time.png");
    showTime.setAttribute("class", "smallLogo");
    showTime.setAttribute("alt", "Klocka - tryck här för att se tid och datum då meddelandet skapades");
    
    //Sets attribute for links surrounding the images
    removeLink.setAttribute("href", "#");
    showTimeLink.setAttribute("href", "#");
    removeLink.onclick = function() {
        messageApp.RemoveMessage(messageID);
    };
    showTime.onclick = function() {
        messageApp.ShowTime(messageID);
    };
    
    //Organize message elements within each other
    removeLink.appendChild(remove);
    showTimeLink.appendChild(showTime);
    div.setAttribute("class", "message");
    div.appendChild(removeLink);
    div.appendChild(showTimeLink);
    div.appendChild(p);
    div.appendChild(em);
    
    //Posts current message and time in the element
    p.innerHTML = message;
    em.innerHTML = ("Mottogs kl " +time);
    
    //Find the #messagearea and put the new div there
    var di = document.querySelector("#messagearea");
    di.appendChild(div);
    
    //Scroll to bottom of page
    window.scrollTo(0,document.body.scrollHeight);
},
ShowTime: function(messageID){
    var timeObject = messageApp.messages[messageID].getDate();
    var day = timeObject.toLocaleDateString();
    var time = timeObject.toLocaleTimeString();
    alert("inlägget skapades "+ day+ " klockan " + time);
    
},
RemoveMessage: function(messageID){
    var confirmRemove  = confirm ("Vill du verkligen radera?");
    if (confirmRemove){
    messageApp.messages.splice(messageID, 1);
    messageApp.RenderMessages();
    }
    },

};
window.onload = messageApp.init;

