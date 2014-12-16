"use strict";

window.onload = function(){
    
        var xhr = new XMLHttpRequest();
        var nextURL;
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log(xhr.responseText);
                var pers = JSON.parse(xhr.responseText);
                console.log(pers.question);
                nextURL = pers.nextURL;
                var div = document.getElementById("question");
                div.innerHTML = pers.question;
            }
        };
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        xhr.send(null);
        
        
    document.getElementById("knapp").addEventListener("click", function(){
     
     var answer = new XMLHttpRequest();
     
     answer.onreadystatechange = function(){
       if(answer.readyState === 4 && answer.status === 200){
           console.log(answer.responseText);
           
       } 
       answer.open("POST", nextURL, true);
       answer.setRequestHeader("Content-Type", "application/json");
       
       //NYTT ANROP FÖR VARJE NY POST/GET? 
       //Jag verkar inte få någon kontakt med servern nu, vad gör jag för fel?
       
       answer.send("EXAKT HUR SKALL SVARET SE UT?!");
       
     };
        
    });
    
};