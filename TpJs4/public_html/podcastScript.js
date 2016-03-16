window.addEventListener("load", function () {
    //the Main fucntion
    podNum = 0;
    var elementPodcast = document.getElementById("podcastContainer");
    var elementPodcastButton = document.getElementById("okBtn"); // creating button tag
    var arrayPodcast = new Array();

    initFunction();

    function initFunction() {
        /*
         this function is used to initialise the podcast gestion
         */
        elementPodcastButton.addEventListener("click", choosePodcast);
    }

    function choosePodcast() {
        /*
         * this function choose, beetween all podcast function, witch ones
         * is should take .
         */
        podNum += 1;
        addAudioPodcast("lol", podNum);

    }

    function addImagePodcast() {
        /*
         This function treat an display an Image podcast,
         retrive from an RSS flux.
         */
        var podcastListenContainer = document.createElement("div");
    }

    function addVideoPodcast() {
        /*
         This function treat an display a Video podcast,
         retrive from an RSS flux.
         */
        var podcastListenContainer = document.createElement("div");
    }
    function addAudioPodcast(podcastSource, Num) {
        /*
         This function treat an display an audio podcast,
         retrive from an RSS flux.
         */
        /*
         WHAT IT SHOULD BE IN HTML: 
         <audio controls>
         <source src="horse.ogg" type="audio/ogg">
         or
         <source src="horse.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
         </audio> 
         */

        var podcastListenContainer = document.createElement("div");
        var audioActive = document.createElement("audio");
        var sourceTag = document.createElement("source");
        var i = Num;
        var deleteBtn = document.createElement("button");

        var brTag = document.createElement("br");

        //set up the div tag
        podcastListenContainer.setAttribute("id", "pod");
        podcastListenContainer.innerHTML += "<h2>Title</h2>";

        //set up for the audio tag
        audioActive.setAttribute("preload", "auto");
        audioActive.setAttribute("controls", "");

        //set up for the source tag 
        sourceTag.setAttribute("src", "audio.mp3");
        sourceTag.setAttribute("type", "audio/mpeg");

        //set up the button tag, used to delete the current podcast
        deleteBtn.setAttribute("type", "button");
        // Indicates a dangerous or potentially negative action 
        deleteBtn.setAttribute("class", "btn btn-danger");
        deleteBtn.textContent = "delete ";



        elementPodcast.appendChild(podcastListenContainer);
        podcastListenContainer.appendChild(audioActive);
        audioActive.appendChild(sourceTag);
        podcastListenContainer.appendChild(deleteBtn);

        arrayPodcast.push(podcastListenContainer);

        elementPodcast.appendChild(brTag);


        $(function ()
        {
            $(audioActive).audioPlayer();
        });

        deleteBtn.addEventListener("click", function () {
            elementPodcast.removeChild(podcastListenContainer);
            console.log("podcast " + i + "removed");
        });


    }

    function openFeed(url) {
        /*
         * this function is used to retrive an RSS file
         * from an URL given in parameter
         */

        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://crossorigin.me/" + url, true);// http://crossorigin.me/ is a proxy used before the url to allow the web site to get the RSS file
        xhr.onload = function () {
            console.log("Received: " + xhr.responseXML.querySelectorAll("item enclosure")[0].getAttribute("url"));
        };
        xhr.onerror = function () {
            alert("Error: request failed :(");
        };
        xhr.send();//execute the request
    }
    openFeed("http://radiofrance-podcast.net/podcast09/rss_15449.xml");

});
