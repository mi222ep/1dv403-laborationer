"use strict";

//Get question and posts it to page
window.onload = function() {


    var firstQ = new XMLHttpRequest();
    var firstURL = null;
    var score = 0;
    var tries = 0;
    firstQ.onreadystatechange = function() {
        //If answer is right
        if (firstQ.readyState === 4 && firstQ.status === 200) {
            var firstRespons = JSON.parse(firstQ.responseText);
            firstURL = firstRespons.nextURL;
            //Find space for question and posts question there
            var div = document.getElementById("question");
            div.innerHTML = firstRespons.question;
        }
    };
    firstQ.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
    firstQ.send(null);
    //Restart the game by reloading page    
    document.getElementById("restart").addEventListener("click", function() {
        location.reload();

    });
    document.getElementById("knapp").addEventListener("click", function() {

        var postAnswer = new XMLHttpRequest();
        var answerText = document.getElementById("answer").value;
        //Empties answer textarea
        document.getElementById("answer").value = "";
        postAnswer.onreadystatechange = function() {

            //If the answer is wrong
            var rightOrWrong = document.getElementById("bajs");
            if (postAnswer.readyState === 2 && postAnswer.status === 400) {

                rightOrWrong.innerHTML = "Fel svar, försök igen";
                tries += 1;
                document.getElementById("tries").innerHTML = tries;
            }

            //If the answer is right

            if (postAnswer.readyState === 4 && postAnswer.status === 200) {


                tries += 1;
                score += 1;
                rightOrWrong.innerHTML = "Rätt svar. bra jobbat";
                
                console.log("Rätt svar");
                var correctAnswer = JSON.parse(postAnswer.responseText);
                console.log(correctAnswer);
                var nextQ = new XMLHttpRequest();
                var nextURL = correctAnswer.nextURL;
                console.log(nextURL);

                document.getElementById("tries").innerHTML = tries;
                document.getElementById("score").innerHTML = score;

                if (nextURL === undefined) {
                    document.getElementById("question").innerHTML = "Spelet är slut. Du fick " + score + " poäng på totalt "+ tries + " försök";
                    document.getElementById("inputArea").innerHTML = " ";

                }
                else {
                    nextQ.onreadystatechange = function() {

                        if (nextQ.readyState === 4 && nextQ.status === 200) {
                            var nextResponse = JSON.parse(nextQ.responseText);
                            var Qarea = document.getElementById("question");
                            Qarea.innerHTML = nextResponse.question;
                            firstURL = nextResponse.nextURL;
                            console.log(nextResponse);
                        }
                    };
                    nextQ.open("GET", nextURL, true);
                    nextQ.send(null);




                }
            }
            //end of if(correct answer)



        };

        var answerToServer = {
            answer: answerText,
        };

        postAnswer.open("POST", firstURL, true);
        postAnswer.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        postAnswer.send(JSON.stringify(answerToServer));
        console.log(postAnswer.responseText);

    });

};