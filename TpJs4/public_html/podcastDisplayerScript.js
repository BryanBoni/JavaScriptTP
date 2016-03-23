//window.addEventListener("load", function () {
    //the Main fucntion
    /*
    this function will be used to split the code and containing 
    only methodes for displaying podcasts
    */
    console.log("ffffffff");
    
    var arrayPodcast = new Array();
    
    function podListScan(podList, num){
        var i;
        var elementPodcast = document.getElementById("podcastContainer");
        for(i = 0; i< podList.lenght; i++){
            switch(podList[i].type){
                case "audio":
                    addAudioPodcast(elementPodcast, num, podList[i].title, podList[i].description, podList[i].type, podList[i].url);
                    break;
                case "video":
                    addVideoPodcast(elementPodcast, num, podList[i].title, podList[i].description, podList[i].type, podList[i].url);
                    break;
                case "image":
                    addImagePodcast(elementPodcast, num, podList[i].title, podList[i].description, podList[i].type, podList[i].url);
                    break;
            }
        }
    }
    
    function addImagePodcast(elementPodcast,num, podTitle, podDescription, podType, podUrl) {
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

    function addVideoPodcast(elementPodcast,num, podTitle, podDescription, podType, podUrl) {
        /*
         This function treat an display a Video podcast,
         retrive from an RSS flux.
         */
        /*
         What it should be in HTML:
         <div class="thumbnail">
         <div class = "row">
         <div class = "col-sm-6">
         <video width="320" height="240" controls>
         <source src="movie.mp4" type="video/mp4">
         <source src="movie.ogg" type="video/ogg">
         Your browser does not support the video tag.
         </video> 
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
        var col1 = document.createElement("div");
        var col2 = document.createElement("div");
        var videoActive = document.createElement("video");
        var sourceTag = document.createElement("source");
        var caption = document.createElement("div");
        var deleteBtn = document.createElement("button");
        var title = document.createElement("h2");
        var description = document.createElement("p");
        var brTag = document.createElement("br");



        //set up the cols
        col1.setAttribute("class", "row");
        col2.setAttribute("class", "row");

        //set up the title
        title.textContent = podTitle;

        //set up the description
        description.textContent = podDescription;

        //Set up for the div podcastImageContainer
        podcastImageContainer.setAttribute("class", "thumbnail row");
        podcastImageContainer.setAttribute("id", "pod");

        //set up for the video tag
        videoActive.setAttribute("controls","");
        videoActive.setAttribute("preload","auto");
        videoActive.setAttribute("poster","dango.png");

        //Set up for the sourcetag
        sourceTag.setAttribute("src", "angel.mp4");
        sourceTag.setAttribute("type", "video/mp4");
        sourceTag.setAttribute("src", "angel.ogg");
        sourceTag.setAttribute("type", "video/ogg");

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

        col1.appendChild(videoActive);
        videoActive.appendChild(sourceTag);
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
    function addAudioPodcast(elementPodcast, num, podTitle, podDescription, podType, podUrl) {
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
        //sourceTag.setAttribute("src", "audio.ogg");
        //sourceTag.setAttribute("type", "audio/ogg");
        
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

    
//});