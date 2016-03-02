window.addEventListener("load", function() {
        //on load do :0
        window.addEventListener("hashchange", display, false);
        display();
        function display(){
            var CheminComplet = document.location.href;
            if("index.html" !== CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 ) ){
                var CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "#" ) );
                var chapNum  = CheminComplet.substring(CheminComplet.lastIndexOf( "#" )+1 );
                ajaxCall(chapNum);
            }else{
                ajaxCall(1);
            }
            function ajaxCall(chapNum){
                var req = new XMLHttpRequest();
                var i = 0;
                var choices = "";
                req.open("GET", "json/chapitre"+ chapNum +".json");
                req.onreadystatechange = function() {
                    if (req.readyState === 4) {
                        if (req.status === 200) { //http status
                            jsonObj = JSON.parse(req.responseText);
                            console.log(jsonObj.txt);
                            console.log(jsonObj.links);
                            document.getElementById("quest").innerHTML = jsonObj.txt;
                            while(i < jsonObj.links.length){
                                 choices += "<div class = \"choices\"><a href = \""+ jsonObj.links[i].link +"\"> " + jsonObj.links[i].txt + "</a></div>" ;
                                i++;
                            }
                            document.getElementById("choice").innerHTML = choices;
                        } else {
                            handleError(req);
                        }
                    }
                };
                req.send();
            }
    }
});
