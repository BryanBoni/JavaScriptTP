window.addEventListener("load",function (){
    injectClock();
    
    function injectClock(){
        document.getElementById("clockDiv").textContent = date("hours")+ " : " + date("minutes") + " : " + date("second");  
        setTimout(injectClock, 1000); // recall itself each second
    }
    
}); 