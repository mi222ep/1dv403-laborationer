"use strict";

//Get question and posts it to page
window.onload = function(){
    
        var firstQ = new XMLHttpRequest();
        var firstURL = null;
        firstQ.onreadystatechange = function(){
            if(firstQ.readyState === 4 && firstQ.status === 200){
                
                var firstRespons = JSON.parse(firstQ.responseText);
                firstURL = firstRespons.nextURL;
                var div = document.getElementById("question");
                div.innerHTML = firstRespons.question;
            }
        };
        firstQ.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        firstQ.send(null);
        
        
    document.getElementById("knapp").addEventListener("click", function(){
     
     var postAnswer = new XMLHttpRequest();
     var answerText = document.getElementById("answer").value;
     document.getElementById("answer").value = "";
     postAnswer.onreadystatechange = function(){
       
       if(postAnswer.readyState === 2 && postAnswer.status  === 400){
           alert("Du svarade "+ answerText +" och det var fel. Försök igen!");
       }
       if(postAnswer.readyState === 4 && postAnswer.status === 200){
           
           
           
           console.log("Rätt svar");
           var hej = JSON.parse(postAnswer.responseText);
           var nextQ  = new XMLHttpRequest();
           var nextURL = hej.nextURL;
           console.log(nextURL);
           nextQ.onreadystatechange = function(){
               if(nextQ.readyState === 4 && nextQ.status  === 200){
                var nextResponse = JSON.parse(nextQ.responseText);
                var halloj = document.getElementById("question");
                halloj.innerHTML = nextResponse.question;
                firstURL = nextResponse.nextURL;
                console.log(nextResponse);
               }
           };
           nextQ.open("GET", nextURL, true);
           nextQ.send(null);
           
           
           
           
       }//end of if(correct answer)
      
       
       
     };
     
     var ok = {
         answer: answerText,
     };
     
     postAnswer.open("POST", firstURL, true);
     postAnswer.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
     postAnswer.send(JSON.stringify(ok));
     console.log(JSON.stringify(ok));
     console.log(postAnswer.responseText);
     
     
    });
    
};