//our work
window.addEventListener("load",function (){
    startTime(); 
    var i = 0;
    document.getElementById("addBtn").addEventListener('click', addAlarm);
    
    function addAlarm(){
        var hours; // int
        var minutes; // int
        var alarmName; // String
        var sounds; // Object
        
        newAlarm = document.createElement("DIV");
        newAlarm.setAttribute("class", "alarm");

        btngroup = document.getElementById("btnGroup");
        newAlarm.innerHTML = "<br /><input type = \"checkbox\" name = \"alarmChkNo"+ i +"\" class = \"alarmChk\" /> " 
                + "<input type = \"number\" name = \"alarmHNo"+ i +"\" class = \"alarmH\" min = \"0\"  max = \"23\"/> " 
                + "<input type = \"number\" name = \"alarmMNo"+ i +"\" class = \"alarmM\" min = \"0\"  max = \"59\"/> " 
                + "<input type = \"text\" name = \"alarmNameNo"+ i +"\" class = \"alarmName\"/> " 
                + "<input type = \"\" name = \"\" class = \"\"/> " 
                + "<button type = \"button\" class = \"suppBtn\" name = \"suppBtn\" onclick = \"suppAlarm(" + i +")\">[-]</button>"
                + "<br /><br />";
        i++
        btngroup.appendChild(newAlarm);
    }
    
    function suppAlarm(id){
        alarm = document.getElementsByClassName("suppBtn")[id];
        btngroup = document.getElementById("btnGroup");
        btngroup.removeChild(alarm);
    }
    
    
    function startTime() {
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        // add a zero in front of numbers<10
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        document.getElementById("clockDiv").innerHTML = hours + ":" + minutes + ":" + seconds;
        var t = setTimeout(function(){ startTime() }, 500);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
});
/* The correction
 * html :
 * 
 * <div id = "clock"></div>
 * 
 * JavaScript :
 * 
 */
window.addEventListener("load",function(){
    var elementClock = document.getElementById("clock");
    var elementDisplay = document.createElement("display"); // creating display tag
    var elementAddAlarmButton = document.createElement("button"); // creating button tag
    var objCurrentTime = new Date();
    var arrayAlarm =new Array();
    
    initClock();
    
    function initClock() {
        elementAddAlarmButton.textContent = "+";
        
        elementClock.appendChild(elementDisplay);
        elementClock.appendChild(elementAddAlarmButton);
        
        elementAddAlarmButton.addEventListener("click",addAlarm);
        
        refreshDisplay();
        addAlarm();
    }
    
    function addAlarm(){
        var alarmContainer = document.createElement("div");
        var checkboxActive = document.createElement("input");
        var selectHour = document.createElement("select");
        var selectMinute = document.createElement("select");
        
        checkboxActive.setAttribute("type","checkbox");
        checkboxActive.checked = true;
        
        for(i = 0; i < 24; i++){
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            selectHour.appendChild(opt);
        }
        
        for(i = 0; i < 60; i++){
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            selectMinute.appendChild(opt);
        }
        
        alarmContainer.appendChild(checkboxActive);
        alarmContainer.appendChild(selectHour);
        alarmContainer.appendChild(selectMinute);
        
        elementClock.insertBefore(alarmContainer,elementAddAlarmButton);
        
        arrayAlarm.push(alarmContainer);
        
    }
    
    function refreshDisplay(){
        objCurrentTime.setTime(Date.now());
        elementDisplay.textContent = objCurrentTime.toLocaleTimeString();
        checkAlarm();
        setTimeout(refreshDisplay,250);
    }
    
    function checkAlarm(){
        for(alarm of arrayAlarm){
            if(!alarm.childNodes[0].checked){
                continue;
            }
            if(alarm.childNodes[1].value != objCurrentTime.getHours()){
                continue;
            }
            
            if(alarm.childNodes[2].value != objCurrentTime.getMinutes()){
                continue;
            }
            
            if(objCurrentTime.getSeconds() < 0 || objCurrentTime.getSeconds() >= 1){
                continue;
            }
            
            //document.body.style.backgroundColor = "red"; //replace it with the audio file
            console.log("lol\n");
            alarm.childNodes[0].addEventListener("click",stopAlarm);
        }
    }
    
    function stopAlarm(){
        document.body.style.backgroundColor("white"); //replace it with the audio file
        this.checked = false;
        this.removeEventListener("click",stopAlarm);
    }
    
});