"use strict"

window.onload = function(){
    document.getElementById("knapp").addEventListener("click", function(){
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log(xhr.responseText);
                var pers = JSON.parse(xhr.responseText);
                console.log(pers.question);
                
                var div = document.getElementById("question");
                div.innerHTML = pers.question;
            }
        };
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        xhr.send(null);
        
        
        
    });
    
};