window.addEventListener("load",function (){
    
    injectClock();
    
    
    function injectClock(){
        var d = new Date();
        document.getElementById("clockDiv").textContent = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();  
        
        setTimeout(injectClock(), 10000); // recall itself each second
    }
}); 