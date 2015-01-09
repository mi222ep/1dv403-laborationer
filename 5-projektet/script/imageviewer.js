var width = 0;
var height = 0;

function renderImageViewer(){
    
    
    
    var image = new XMLHttpRequest();
    
    image.onreadystatechange = function(){
        if(image.readyState === 4 && image.status === 200){
            
         var imageInfo = JSON.parse(image.responseText);
         console.log(imageInfo);
         var arrLength  = imageInfo.length;
         for(var i = 0; i< arrLength; i+=1){
             console.log(imageInfo[i].URL);
             getMaxWidthAndLength(imageInfo[i].thumbWidth, imageInfo[i].thumbHeight);
             renderImage(imageInfo[i].thumbURL);
         }
         console.log(width);
         console.log(height);
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
function renderImage(URL){
    var a = document.createElement("a");
    var frame = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", URL);
    frame.style.width = width+'px';
    frame.style.height = height+'px';
    
    frame.setAttribute("class",  "thumbImg");
    a.setAttribute("href", "#");
    a.appendChild(frame);
    
    frame.appendChild(img);
    
    var imageSpace = document.getElementById("imageSpace");
    imageSpace.appendChild(a);
    
}
window.onload = renderImageViewer();