var width = 0;
var height = 0;

function renderImageViewer(windowID){
    
    var bottombar = document.getElementById("bottombar"+windowID);
    var img = document.createElement("img");
    img.setAttribute("src", "pics/ajax-loader.gif");
    img.setAttribute("class", "ajaxLoad");
    img.setAttribute("id", "loadBottombar"+windowID);
    
    bottombar.appendChild(img);
    console.log(bottombar);
    console.log(img);
    var image = new XMLHttpRequest();
    
    image.onreadystatechange = function(){
        
        if(image.readyState === 4 && image.status === 200){
        
        var removeLoad = document.getElementById("loadBottombar"+windowID);
        console.log(removeLoad);
        removeLoad.setAttribute("display", "none");
        
         var imageInfo = JSON.parse(image.responseText);
         var arrLength  = imageInfo.length;
         for(var i = 0; i< arrLength; i+=1){
             getMaxWidthAndLength(imageInfo[i].thumbWidth, imageInfo[i].thumbHeight);
             renderImage(imageInfo[i]);
         }
        }
    };
    
    image.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    image.send(null);
    
}
function getMaxWidthAndLength(picWidth, picHeight){
    if(picWidth>width){
        width = picWidth;
    }
    if(picHeight>height){
        height = picHeight;
    }
    
}
function renderImage(imgObject){
    var a = document.createElement("a");
    var frame = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", imgObject.thumbURL);
    frame.style.width = width+'px';
    frame.style.height = height+'px';
    
    frame.setAttribute("class",  "thumbImg");
    a.setAttribute("href", "#");
    a.appendChild(frame);
    
    a.addEventListener("click", function() {clickingA(imgObject.URL)});
    
    frame.appendChild(img);
    
    var imageSpace = document.getElementById("imageviewer1");
    imageSpace.appendChild(a);
    
}
function clickingA(imgURL){
    document.body.style.background = 'url(\"'+imgURL+'\")';
}
//window.onload = renderImageViewer();