var messageApp ={ 

init: function(){
    var add = new Message("hej \n \n", new Date());
    var axel = add.getHTMLText();
    alert (axel);
}
};

window.onload = messageApp.init;