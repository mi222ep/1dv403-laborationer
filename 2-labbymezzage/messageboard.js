var messageApp ={ 
    
    messages: [],

init: function(){
    
    var test = new Message("test 1", new Date());
    messageApp.messages.push(test);
    
    var test2 = new Message("test 2", new Date());
    messageApp.messages.push(test2);
    
    var test3 = new Message("test 3", new Date());
    messageApp.messages.push(test3);
    
    var hej = messageApp.messages[1].getText();
    alert(hej);
}
};

window.onload = messageApp.init;