"use strict"

var memory = {

    click: 0,
    pairs:  [],
    firstPair: 0,
    secondPair: 0,
    tiles: [],
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
            
            memory.click +=1;
            
            if(memory.click==1){
                p.classList.add("hidden");
                memory.pairs.push(picID);
                memory.tiles.push(p);
                memory.firstPair = p;
                return;
            }
            
            if(memory.click == 2){
               p.classList.add("hidden");
               memory.secondPair = p;
               memory.pairs.push(picID);
               memory.tiles.push(p);
               if(memory.pairs[0] == memory.pairs[1]){
                   
                   alert("PAR!");
               }
               memory.ComPair();
               
               memory.pairs.length = 0;
               memory.tiles.length = 0;
               memory.click = 0;
            }
            
        });

    },
    ComPair: function(){
        if(memory.pairs[0] == memory.pairs[1]){
            return;
        }
        else{
            setTimeout(function() {
            memory.firstPair.classList.remove("hidden");
            memory.secondPair.classList.remove("hidden");
            memory.firstPair = 0;
            }, 1000);
        }
    }
};

window.onload = memory.init;