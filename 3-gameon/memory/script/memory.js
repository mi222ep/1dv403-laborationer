"use strict"

var memory = {

    click: 0,
    firstPair: 0,
    memoryArr: [],

    init: function() {

        var row = 4;
        var column = 4;
        var guesses = 0;
        var clicks = 0;
        var pairs = 0;

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
                var img = document.createElement("img");
                img.setAttribute("src", "pics/" + memory.memoryArr[count] + ".png");
                a.setAttribute("class", "unmatched");
                a.setAttribute("href", "#");
                a.appendChild(img);

                td.appendChild(a);
                tr.appendChild(td);
                count += 1;
            }
        }

        var memorySpace = document.querySelector("#memorySpace");
        memorySpace.appendChild(table);

        var memoryTiles = document.getElementsByTagName("a");
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
                memory.firstPair= picID;
            }
            else{
                memory.ComPair(picID);
            }
            
        });

    },
    ComPair: function(picID){
        if(picID == memory.firstPair){
            alert("Match");
        }
        else{
            alert("Fail");
        }
        memory.firstPair = 0;
    }
};

window.onload = memory.init;