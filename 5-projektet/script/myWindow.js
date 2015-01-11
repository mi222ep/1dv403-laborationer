console.log("ok");
var myWindow = {
    init: function(typeOfWindow, name, ID){
        
        var div  = document.createElement("div");
        var content = document.createElement("div");
        var topBar = document.createElement("div");
        var bottomBar = document.createElement("div");
        var topText = document.createElement("p");
        
        
        div.setAttribute("class", "myWindow");
        content.setAttribute("id", typeOfWindow + ID);
        div.setAttribute("class", "content");
        topBar.setAttribute("class", "topBar");
        bottomBar.setAttribute("class", "bottomBar");
        
        topBar.appendChild(topText);
        topText.innerHTML = name;
        div.appendChild(topBar);
        div.appendChild(content);
        div.appendChild(bottomBar);
        console.log(div);
        
        var page = document.getElementById("pageContent");
        console.log(page);
        page.appendChild(div);
        
        //renderImageViewer();
        
        
    }
};

window.onload = function(){ myWindow.init("imageviewer", "Bildvisaren", 1)};