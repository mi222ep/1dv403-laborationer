window.onload = function(){
    
    var image = new XMLHttpRequest();
    
    image.onreadystatechange = function(){
        if(image.readyState === 4 && image.status === 200){
            
         var imageInfo = JSON.parse(image.responseText);
         console.log(imageInfo);
         var arrLength  = imageInfo.length;
         for(var i = 0; i< arrLength; i+=1){
             console.log(imageInfo[i].URL);
         }
        }
    };
    
    image.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    image.send(null);
    
};