window.addEventListener("load",function (){
    startTime();    
    document.getElementById("addBtn").addEventListener('click', addAlarm);
    
    function addAlarm(){
        var hours; // int
        var minutes; // int
        var alarmName; // String
        var sounds; // Object
        
        
    }
    
    function startTime() {
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
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