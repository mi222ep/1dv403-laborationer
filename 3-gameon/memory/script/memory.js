"use strict"

var memory = {

    click: 0,
    firstPair: 0,
    memoryArr: [],

    init: function() {

        var row = 4;
        var column = 4;
        
        memory.memoryArr = RandomGenerator.getPictureArray(row, column);
        memory.RenderTable(row, column);



    },
    RenderTable: function(rows, cols) {

        var count = 0;


        var table = document.createElement("table");

        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            table.appendChild(tr);

            for (var j = 0; j < cols; j++) {
                var td = document.createElement("td");
                var a = document.createElement("a");
                var div = document.createElement("div");
                var img = document.createElement("img");
                img.setAttribute("src", "pics/" + memory.memoryArr[count] + ".png");
                a.setAttribute("class", "unmatched");
                a.setAttribute("href", "#");
                a.appendChild(div);
                div.appendChild(img);
                td.appendChild(a);
                tr.appendChild(td);
                count += 1;
            }
        }

        var memorySpace = document.querySelector("#memorySpace");
        memorySpace.appendChild(table);

        var memoryTiles = document.getElementsByClassName("unmatched");
        Array.prototype.forEach.call(memoryTiles, function(tile, tileID) {
            memory.TurnTile(tile, tileID);
        });
         
    },
    TurnTile: function(tile, tileID) {


        tile.addEventListener("click", function() {
            var p = tile.parentNode.querySelector(".unmatched");
            var picID = memory.memoryArr[tileID];
            p.classList.add("hidden");
            
            if(memory.firstPair === 0){
                memory.firstPair = picID;
                memory.click = p;
            }
            else if (memory.firstPair == 1){
                var picID2 = p;
                memory.ComPair(picID, picID2);
            }
            
        });

    },
    ComPair: function(picID, p){
        if(picID == memory.firstPair){
            
        }
        else{
            
            setTimeout(function() {
            p.classList.remove("hidden");
            memory.click.classList.remove("hidden");
            memory.firstPair = 0;
            }, 1000);
            
        }
        
    }
};

window.onload = memory.init;