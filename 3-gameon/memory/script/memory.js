"use strict"

var memory ={
    
    memoryArr: [],
    
    init: function(){
        
        
        memory.memoryArr = RandomGenerator.getPictureArray (3, 2);
        
        memory.RenderTable(3, 2);
        alert(memory.memoryArr);
    },
    RenderTable: function(rows, cols){
        
        var count = 1;
        var table = document.createElement("table");
        
        for (var i = 0; i < rows; i++){
            var tr = document.createElement("tr");
            table.appendChild(tr);
            
            for (var j = 0; j < cols; j++){
            var td =  document.createElement("td");
            var cellText = document.createTextNode("Cell nummer "+count);
            td.appendChild(cellText);
            tr.appendChild(td);
            count+=1;
            }
        }
        
        var memorySpace = document.querySelector("#memorySpace");
        memorySpace.appendChild(table);
    },
    
    
    
    
};

window.onload  = memory.init;