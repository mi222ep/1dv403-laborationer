console.log("ok");
var myWindow = {
    
    init: function(){
        document.getElementById("imageviewer").addEventListener("click", function() {
        myWindow.renderWindow("imageviewer", "Bildvisaren", 1);  
        });
    },
    
    renderWindow: function(typeOfWindow, name, ID){
        
        var div  = document.createElement("div");
        var content = document.createElement("div");
        var topBar = document.createElement("div");
        var bottomBar = document.createElement("div");
        var topText = document.createElement("p");
        var a = document.createElement("a");
        var img =document.createElement("img");
        var windowID = typeOfWindow + ID;
        
        div.setAttribute("class", "myWindow");
        content.setAttribute("id", windowID);
        content.setAttribute("class", "content");
        topBar.setAttribute("class", "topBar");
        img.setAttribute("src", "pics/close.png");
        img.setAttribute("alt", "cross, press here to close");
        img.setAttribute("class", "close");
        img.setAttribute("id", "close");
        topText.setAttribute("class", "topText");
        a.setAttribute("href", "#");
        a.addEventListener("click", function(){myWindow.closeWindow(windowID)});
        bottomBar.setAttribute("class", "bottomBar");
        bottomBar.setAttribute("id", "bottombar"+windowID)
        topText.innerHTML = name;
        topBar.appendChild(topText);
        topBar.appendChild(a);
        a.appendChild(img);
        div.appendChild(topBar);
        div.appendChild(content);
        div.appendChild(bottomBar);
        var page = document.getElementById("pageContent");
        page.appendChild(div);
        
        renderImageViewer(windowID);
        
        
    },
    closeWindow: function(windowID){
        var closingWindow = document.getElementById(windowID).parentNode;
        closingWindow.parentNode.removeChild(closingWindow);
    }
};

window.onload = function(){ myWindow.init()};