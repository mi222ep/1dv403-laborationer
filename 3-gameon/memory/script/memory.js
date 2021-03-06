"use strict"

var memory = {

    numberOfPairs: 0,
    click: 0,
    pairs: [],
    firstPair: 0,
    secondPair: 0,
    pairCounter: 0,
    tiles: [],
    memoryArr: [],

    init: function() {

        var row = 4;
        var column = 4;
        
        memory.memoryArr = RandomGenerator.getPictureArray(row, column);
        memory.RenderTable(row, column);
        memory.numberOfPairs = row*column/2;


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
            
            //Om klick är mer än 2, returnera bara allt
            
            if(memory.click==1){
                console.log("1 click");
                 if (p.classList.contains("hidden")) { 
                memory.click = 0; 
                return;
                 }
                p.classList.add("hidden");
                memory.pairs.push(picID);
                memory.firstPair = p;
                return;
            }
            
            if(memory.click == 2){
                console.log("2 click");
                if (p.classList.contains("hidden")) { 
                memory.click = 1; 
                return;
                 }
               p.classList.add("hidden");
               memory.secondPair = p;
               memory.pairs.push(picID);
               memory.ComPair();
               memory.pairs.length = 0;
               if(memory.pairCounter == memory.numberOfPairs){
            alert("Grattis, du vann!");
        }
            }
            else{
                console.log("more than 2");
                return;
            }
            
        });

    },
    ComPair: function(){
        if(memory.pairs[0] == memory.pairs[1]){
            memory.pairCounter += 1;
            memory.click = 0;
            return;
        }
        else{
            
            setTimeout(function() {
            memory.firstPair.classList.remove("hidden");
            memory.secondPair.classList.remove("hidden");
            memory.firstPair = 0;
            memory.click = 0;
            }, 1000);
        }
        
    }
};

window.onload = memory.init;