"use strict"

var memory ={
    
    memoryArr: [],
    
    init: function(){
        
        var row = 4;
        var column = 4;

    
        memory.memoryArr = RandomGenerator.getPictureArray (row, column);
        memory.RenderTable(row, column);
        
        
        
    },
    RenderTable: function(rows, cols){
        
        var count = 0;
        var table = document.createElement("table");
        
        for (var i = 0; i < rows; i++){
            var tr = document.createElement("tr");
            table.appendChild(tr);
            
            for (var j = 0; j < cols; j++){
            var td =  document.createElement("td");
            var a = document.createElement("a");
            var img = document.createElement("img");
            img.setAttribute("src", "pics/"+memory.memoryArr[count]+".png");
            a.setAttribute("href", "#");
            a.appendChild(img);
            
            td.appendChild(a);
            tr.appendChild(td);
            count+=1;
            a.onclick = function() {
                memory.TurnTile();
            };
            
                }
        }
        
        var memorySpace = document.querySelector("#memorySpace");
        memorySpace.appendChild(table);
        
        var memoryTiles = document.querySelectorAll("a");
        memoryTiles.onclick = function() {
            memory.TurnTile();
        };
    },
    TurnTile: function(){
        alert("hejhej");
    }

};

window.onload  = memory.init;