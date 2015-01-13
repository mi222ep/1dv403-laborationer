{"changed":true,"filter":false,"title":"myWindow.js","tooltip":"/5-projektet/script/myWindow.js","value":"\"use strict\";\n\nvar myWindow = {\n    \n    init: function(){\n        document.getElementById(\"imageviewer\").addEventListener(\"click\", function() {\n            \n        myWindow.renderWindow(\"imageviewer\", \"Bildvisaren\", 1);  \n        });\n    },\n    \n    renderWindow: function(typeOfWindow, name, ID){\n        \n        var div  = document.createElement(\"div\");\n        var content = document.createElement(\"div\");\n        var topBar = document.createElement(\"div\");\n        var bottomBar = document.createElement(\"div\");\n        var topText = document.createElement(\"p\");\n        var a = document.createElement(\"a\");\n        var img =document.createElement(\"img\");\n        var topIMG = document.createElement(\"img\");\n        var windowID = typeOfWindow + ID;\n        \n        div.setAttribute(\"class\", \"myWindow\");\n        content.setAttribute(\"id\", windowID);\n        content.setAttribute(\"class\", \"content\");\n        topBar.setAttribute(\"class\", \"topBar\");\n        topIMG.setAttribute(\"src\", \"pics/logo.png\");\n        topIMG.setAttribute(\"class\", \"topIMG\");\n        \n        img.setAttribute(\"src\", \"pics/close.png\");\n        img.setAttribute(\"alt\", \"cross, press here to close\");\n        img.setAttribute(\"class\", \"close\");\n        img.setAttribute(\"id\", \"close\");\n        topText.setAttribute(\"class\", \"topText\");\n        a.setAttribute(\"href\", \"#\");\n        a.addEventListener(\"click\", function(){myWindow.closeWindow(windowID)});\n        bottomBar.setAttribute(\"class\", \"bottomBar\");\n        bottomBar.setAttribute(\"id\", \"bottombar\"+windowID);\n        topText.innerHTML = name;\n        topBar.appendChild(topIMG);\n        topBar.appendChild(topText);\n        topBar.appendChild(a);\n        a.appendChild(img);\n        div.appendChild(topBar);\n        div.appendChild(content);\n        div.appendChild(bottomBar);\n        var page = document.getElementById(\"pageContent\");\n        page.appendChild(div);\n        \n        renderImageViewer(windowID);\n        \n        \n    },\n    closeWindow: function(windowID){\n        var closingWindow = document.getElementById(windowID).parentNode;\n        closingWindow.parentNode.removeChild(closingWindow);\n    }\n};\n\nwindow.onload = function(){ myWindow.init()};","undoManager":{"mark":99,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":27},"end":{"row":26,"column":29},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":28},"end":{"row":26,"column":30},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":33},"end":{"row":26,"column":34},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":34},"end":{"row":26,"column":35},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":35},"end":{"row":26,"column":37},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":38},"end":{"row":26,"column":39},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":38},"end":{"row":26,"column":39},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":39},"end":{"row":26,"column":40},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":40},"end":{"row":26,"column":41},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":41},"end":{"row":26,"column":42},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":42},"end":{"row":26,"column":43},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":43},"end":{"row":26,"column":44},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":44},"end":{"row":26,"column":45},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":45},"end":{"row":26,"column":46},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":46},"end":{"row":26,"column":47},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":47},"end":{"row":26,"column":48},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":48},"end":{"row":26,"column":49},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":8},"end":{"row":28,"column":0},"action":"insert","lines":["",""]},{"start":{"row":28,"column":0},"end":{"row":28,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":12},"end":{"row":27,"column":13},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"insert","lines":["G"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":18},"end":{"row":27,"column":19},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":19},"end":{"row":27,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":21},"end":{"row":27,"column":22},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":22},"end":{"row":27,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":15},"end":{"row":27,"column":23},"action":"remove","lines":["setAttri"]},{"start":{"row":27,"column":15},"end":{"row":27,"column":29},"action":"insert","lines":["setAttribute()"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":28},"end":{"row":27,"column":30},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":29},"end":{"row":27,"column":31},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":29},"end":{"row":27,"column":31},"action":"remove","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":28},"end":{"row":27,"column":30},"action":"remove","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":28},"end":{"row":27,"column":30},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":30},"end":{"row":27,"column":31},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":31},"end":{"row":27,"column":32},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":31},"end":{"row":27,"column":32},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":31},"end":{"row":27,"column":32},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":32},"end":{"row":27,"column":33},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":33},"end":{"row":27,"column":34},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":35},"end":{"row":27,"column":36},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":36},"end":{"row":27,"column":37},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":36},"end":{"row":27,"column":37},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":35},"end":{"row":27,"column":36},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":35},"end":{"row":27,"column":36},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":36},"end":{"row":27,"column":37},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":37},"end":{"row":27,"column":38},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":38},"end":{"row":27,"column":40},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":39},"end":{"row":27,"column":40},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":40},"end":{"row":27,"column":41},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":41},"end":{"row":27,"column":42},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":42},"end":{"row":27,"column":43},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":43},"end":{"row":27,"column":44},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":44},"end":{"row":27,"column":45},"action":"insert","lines":["G"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":33},"end":{"row":39,"column":0},"action":"insert","lines":["",""]},{"start":{"row":39,"column":0},"end":{"row":39,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":16},"end":{"row":39,"column":17},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":18},"end":{"row":39,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":20},"end":{"row":39,"column":21},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":15},"end":{"row":39,"column":21},"action":"remove","lines":["append"]},{"start":{"row":39,"column":15},"end":{"row":39,"column":28},"action":"insert","lines":["appendChild()"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":27},"end":{"row":39,"column":29},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":27},"end":{"row":39,"column":29},"action":"remove","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":27},"end":{"row":39,"column":28},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":28},"end":{"row":39,"column":29},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":29},"end":{"row":39,"column":30},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":30},"end":{"row":39,"column":31},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":31},"end":{"row":39,"column":32},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":32},"end":{"row":39,"column":33},"action":"insert","lines":["G"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":34},"end":{"row":39,"column":35},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":47},"end":{"row":27,"column":48},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":36},"end":{"row":27,"column":37},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":85},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":12},"action":"insert","lines":["            "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":12},"end":{"row":6,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1421072807000}