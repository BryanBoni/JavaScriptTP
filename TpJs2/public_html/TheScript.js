window.addEventListener("load",function (){
    startTime(); 
    var i = 0;
    document.getElementById("addBtn").addEventListener('click', addAlarm);
    
    function addAlarm(){
        var hours; // int
        var minutes; // int
        var alarmName; // String
        var sounds; // Object
        
        
        document.getElementById("btnGroup").innerHTML += 
                "<br /><input type = \"checkbox\" name = \"alarmChkNo"+ i +"\" class = \"alarmChk\" /> " 
                + "<input type = \"number\" name = \"alarmHNo"+ i +"\" class = \"alarmH\" min = \"0\"  max = \"23\"/> " 
                + "<input type = \"number\" name = \"alarmMNo"+ i +"\" class = \"alarmM\" min = \"0\"  max = \"59\"/> " 
                + "<input type = \"text\" name = \"alarmNameNo"+ i +"\" class = \"alarmName\"/> " 
                + "<input type = \"\" name = \"\" class = \"\"/> " 
                + "<button type = \"button\" class = \"suppBtn\" name = \"suppBtn\">[-]</button> "
                + "<br />";
        return i++;
    document.getElementById("suppBtn").addEventListener('click', suppAlarm);    
    }
    
    function suppAlarm(){
        
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
