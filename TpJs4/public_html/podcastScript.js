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
        addAudioPodcast("lol", podNum, "title", "description");
        addImagePodcast(podNum, "Dango Family", "Dango... dango... dango...");
    }

    function addImagePodcast(num, podTitle, podDescription) {
        /*
         This function treat an display an Image podcast,
         retrive from an RSS flux.
         */
        /*
         What it should be in HTML:
         <div class="thumbnail">
            <div class = "row">
                <div class = "col-sm-6">
                    <img src="..." alt="...">
                </div>
                <div class = "col-sm-6">
                    <div class="caption">
                        <h2>Thumbnail label</h2>
                        <p>...</p>
                        <button type="button" class="btn btn-danger">Button</button>
                    </div>
                </div>
            </div>
        </div>
        */
        var i = num;
        var podcastImageContainer = document.createElement("div");
        var row = document.createElement("div");
        var col1 = document.createElement("div");
        var col2 = document.createElement("div");
        var imageActive = document.createElement("img");
        var caption = document.createElement("div");
        var deleteBtn = document.createElement("button");
        var title = document.createElement("h2");
        var description = document.createElement("p");
        var brTag = document.createElement("br");
        
        
        
        //set up the cols
        col1.setAttribute("class", "col-sm-6");
        col2.setAttribute("class", "col-sm-6");
        
        //set up the title
        title.textContent = podTitle; 
        
        //set up the description
        description.textContent = podDescription;
        
        //Set up for the div podcastImageContainer
        podcastImageContainer.setAttribute("class", "thumbnail row");
        podcastImageContainer.setAttribute("id", "pod");
        
        //Set up for the img tag
        imageActive.setAttribute("src", "dango.png");
        imageActive.setAttribute("alt", "TITLE");
        
        //Set up for the div caption
        caption.setAttribute("class", "caption");
        caption.appendChild(title);
        caption.appendChild(description);
        
        //Set up for the button tag
        deleteBtn.setAttribute("type", "button");
        // Indicates a dangerous or potentially negative action 
        deleteBtn.setAttribute("class", "btn btn-danger");
        deleteBtn.textContent = "delete ";
        
        elementPodcast.appendChild(podcastImageContainer);
        podcastImageContainer.appendChild(col1);
        podcastImageContainer.appendChild(col2);
        
        col1.appendChild(imageActive);
        col2.appendChild(caption);
        elementPodcast.appendChild(deleteBtn);
        
        arrayPodcast.push(podcastImageContainer);
        
        elementPodcast.appendChild(brTag);
        
        deleteBtn.addEventListener("click", function () {
            elementPodcast.removeChild(podcastImageContainer);
            elementPodcast.removeChild(deleteBtn);
            elementPodcast.removeChild(brTag);
            console.log("podcast " + i + " removed");
        });
    }

    function addVideoPodcast(num) {
        /*
         This function treat an display a Video podcast,
         retrive from an RSS flux.
         */
        var podcastListenContainer = document.createElement("div");
    }
    function addAudioPodcast(podcastSource, num, podTitle, podDescription) {
        /*
         This function treat an display an audio podcast,
         retrive from an RSS flux.
         */
        /*
         WHAT IT SHOULD BE IN HTML FOR THE AUDIO TAG: 
         <audio controls>
         <source src="horse.ogg" type="audio/ogg">
         or
         <source src="horse.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
         </audio> 
         */
        var i = num;
        var podcastListenContainer = document.createElement("div");
        var audioActive = document.createElement("audio");
        var sourceTag = document.createElement("source");
        var deleteBtn = document.createElement("button");
        var title = document.createElement("h2");
        var description = document.createElement("p");
        var brTag = document.createElement("br");

        //set up the title
        title.textContent = podTitle; 
        
        //set up the description
        description.textContent = podDescription;
        
        //set up the div tag
        podcastListenContainer.setAttribute("id", "pod");
        podcastListenContainer.appendChild(title);

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
        deleteBtn.textContent = "delete";

        elementPodcast.appendChild(podcastListenContainer);
        podcastListenContainer.appendChild(audioActive);
        audioActive.appendChild(sourceTag);
        
        podcastListenContainer.appendChild(description);
        elementPodcast.appendChild(deleteBtn);

        arrayPodcast.push(podcastListenContainer);

        elementPodcast.appendChild(brTag);


        $(function ()
        {
            $(audioActive).audioPlayer();
        });

        deleteBtn.addEventListener("click", function () {
            elementPodcast.removeChild(podcastListenContainer);
            elementPodcast.removeChild(deleteBtn);
            elementPodcast.removeChild(brTag);
            console.log("podcast " + i + " removed");
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
