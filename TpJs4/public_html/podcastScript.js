window.addEventListener("load", function () {

    var elementPodcast = document.getElementById("podcastContainer");
    var elementPodcastButton = document.getElementById("okBtn"); // creating button tag
    var arrayPodcast = new Array();

    initDisplay();

    function initDisplay() {
        //elementClock.appendChild(elementPodcastButton);
        elementPodcastButton.addEventListener("click", addPodcast);


    }

    function addPodcast(podcastSource) {
        var podcastListenContainer = document.createElement("div");
        var audioActive = document.createElement("audio");
        var sourceTag = document.createElement("source");
        var brTag = document.createElement("br");
        audioActive.setAttribute("preload", "auto");
        audioActive.setAttribute("controls", "");
        sourceTag.setAttribute("src", "audio.mp3");

        sourceTag.setAttribute("type", "audio/mpeg");

        //var selectHour = document.createElement("select");
        //var selectMinute = document.createElement("select");
        //audioActive.setAttribute("type", "checkbox");

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
        arrayPodcast.push(podcastListenContainer);
        elementPodcast.appendChild(brTag);
        
        $( function()
	{
		$( audioActive ).audioPlayer();
	});
        
    }
     
        function openFeed(url) {
            xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function() {
                alert("Received: " + xhr.responseXml);
            };
            xhr.onerror = function() {
                //alert("Error: is your browser compatible with CORS?");
            };
            xhr.send();
        }
        openFeed("http://radiofrance-podcast.net/podcast09/rss_15449.xml");


        
});
