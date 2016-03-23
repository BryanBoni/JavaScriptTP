window.addEventListener("load", function () {
    //the Main fucntion
    podNum = 0;
    var elementPodcast = document.getElementById("podcastContainer");
    var arrayPodcast = new Array();

    var elementPodcastButton = document.getElementById("okBtn"); // creating button tag


    initFunction();
    
        

    function initFunction() {
        /*
         this function is used to initialise the podcast management
         */
        
        elementPodcastButton.addEventListener("click", choosePodcast);
        
    }


    function choosePodcast() {
        /*
         * this function choose, beetween all podcast function, witch ones
         * is should take .
         */
        podNum += 1;
        $.getScript("podcastDisplayerScript.js", function (data, textStatus, jqxhr) {
            console.log(data); // Data returned
            console.log(textStatus); // Success
            console.log(jqxhr.status); // 200
            console.log("Load was performed.");
            data.
            addAudioPodcast("lol", podNum, "title", "description");
            addImagePodcast(podNum + 1, "Dango Family", "Dango... dango... dango...");
            addVideoPodcast(podNum + 2, "Angel Beat", "Great feffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffzzfezrgRGEGQERGERQU9GSITUBHBYRTGNIUQERYHBGEIU9GVBUISERGJQERQSRUEIGHNETUGZERIOubgfrigbergbisersgreibgquguerdghbeurbgdrgdubhrghdrhbdurgnuhdqnrisrhgbdrhgbdigbgdrbg");

        });
    }


    function openFeed(url) {
        /*
         * this function is used to retrive an RSS file
         * from an URL given in parameter
         * 
         * Returns an object of the followning form:
         * 
         *     title : "",
         *     description : "", 
         *     type : "",
         *     url : "",
         * 
         *
         */

        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://crossorigin.me/" + url, true);// http://crossorigin.me/ is a proxy used before the url to allow the web site to get the RSS file
        xhr.onload = function () {
            console.log("Received: " + xhr.responseXML.querySelectorAll("item enclosure")[0].getAttribute("url"));

            parseFeed(xhr.responseXML); 
        };
        xhr.onerror = function () {
            alert("Error: request failed :(");
        };
        xhr.send();//execute the request
    }
    
    function parseFeed(feed) {
        var podcastArray = new Array();

    }
    

    openFeed("http://radiofrance-podcast.net/podcast09/rss_15449.xml");

});
