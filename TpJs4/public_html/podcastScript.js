window.addEventListener("load", function () {
    //the Main fucntion
    podNum = 0;
    var elementPodcast = document.getElementById("podcastContainer");

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

        openFeed("http://radiofrance-podcast.net/podcast09/rss_15449.xml");
        podNum += 1;
        addAudioPodcast(elementPodcast, podNum, "title", "description", "audio/mp3", "audio.mp3");
        addVideoPodcast(elementPodcast, podNum+1, "title", "description", "video/ogg", "angel.ogg");
        addImagePodcast(elementPodcast, podNum+2, "title", "description", "type", "dango.png");
        
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
            parseFeed(xhr.responseXML); 
        };
        xhr.onerror = function () {
            alert("Error: request failed :(");
        };
        xhr.send();//execute the request
    }
    
    function parseFeed(feed) {
        var items = feed.querySelectorAll("item");
        var itemArray = new Array();
        for (var i = 0 ; i < items.length ; i++) {
            var enclosure = items[i].querySelectorAll("enclosure")[0];
            var currentItem = {
                title : items[i].getElementsByTagName("title")[0].innerHTML,
                description : items[i].getElementsByTagName("description")[0].innerHTML,
                type : enclosure.getAttribute("type"),
                url : enclosure.getAttribute("url"),
            };
            itemArray.push(currentItem);
        }
    }
    

    

});
