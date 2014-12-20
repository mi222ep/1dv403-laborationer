"use strict";

window.onload = function(){
    
        var xhr = new XMLHttpRequest();
        var nextURL = null;
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log(xhr.responseText);
                var pers = JSON.parse(xhr.responseText);
                nextURL = pers.nextURL;
                var div = document.getElementById("question");
                div.innerHTML = pers.question;
            }
        };
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        xhr.send(null);
        
        
    document.getElementById("knapp").addEventListener("click", function(){
     console.log("DET FUNKAR!");
     //xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
     
     var answer = new XMLHttpRequest();

     answer.onreadystatechange = function(){
       
       if(answer.readyState === 4 && answer.status === 200){
           console.log(answer.responseText);
       } 
      
       
       
     };
     
     var ok = {
         answer: "2",
     };
     
     answer.open("POST", nextURL, true);
     answer.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
     answer.send(JSON.stringify(ok));
     console.log(JSON.stringify(ok));
    });
    
};