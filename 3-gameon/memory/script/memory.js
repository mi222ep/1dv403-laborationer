"use strict"

var memory ={
    
    memoryArr: [],
    
    init: function(){
        
        
        var hello = new RandomGenerator.getPictureArray (3, 2);
        
        alert(hello);
    },
    
    
    
};

window.onload  = memory.init;