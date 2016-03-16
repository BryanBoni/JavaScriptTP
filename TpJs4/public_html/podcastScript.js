window.addEventListener("load", function () {

    var elementPodcast = document.getElementById("podcastContainer");
    var elementPodcastButton = document.getElementById("okBtn"); // creating button tag
    var arrayPodcast = new Array();

    initDisplay();

    function initDisplay() {
        //elementClock.appendChild(elementPodcastButton);
        elementPodcastButton.addEventListener("click", addAudioPodcast);


    }

    function addAudioPodcast(podcastSource) {
        var podcastListenContainer = document.createElement("div");
        var audioActive = document.createElement("audio");
        var sourceTag = document.createElement("source");
        
        var deleteBtn = document.createElement("button");
        
        var brTag = document.createElement("br");
        
        //set up the div tag
        podcastListenContainer.setAttribute("id","pod");
        podcastListenContainer.innerHTML += "<h2>Title</h2>";
        
        //set up for the audio tag
        audioActive.setAttribute("preload", "auto");
        audioActive.setAttribute("controls", "");
        
        //set up for the source tag 
        sourceTag.setAttribute("src", "audio.mp3");
        sourceTag.setAttribute("type", "audio/mpeg");
        
        //set up the button tag, used to delete the current podcast
        deleteBtn.setAttribute("type","button");
        // Indicates a dangerous or potentially negative action 
        deleteBtn.setAttribute("class","btn btn-danger");
        deleteBtn.textContent = "delete"; 


        /*
         WHAT IT SHOULD BE : 
         <audio controls>
         <source src="horse.ogg" type="audio/ogg">
         or
         <source src="horse.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
         </audio> 
         */
        elementPodcast.appendChild(podcastListenContainer);
        podcastListenContainer.appendChild(audioActive);
        audioActive.appendChild(sourceTag);
        podcastListenContainer.appendChild(deleteBtn);
        arrayPodcast.push(podcastListenContainer);
        elementPodcast.appendChild(brTag);
        
        
        $( function()
	{
		$( audioActive ).audioPlayer();
	});
        
    }
     
        function openFeed(url) {
            xhr = new XMLHttpRequest();
            xhr.open("GET", "http://crossorigin.me/" + url, true);
            xhr.onload = function() {
                console.log("Received: " + xhr.responseXML.querySelectorAll("item enclosure")[0].getAttribute("url"));
            };
            xhr.onerror = function() {
                alert("Error: request failed :(");
            };
            xhr.send();//execute the request
        }
        openFeed("http://radiofrance-podcast.net/podcast09/rss_15449.xml");

});
