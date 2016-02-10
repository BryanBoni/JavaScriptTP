window.addEventListener("load",function (){
   log("loaded"); 
   
   document.getElementById("submitBtn").disabled = true;
   
   document.getElementById("field1").addEventListener("keyup",checkField1); //check when you fill the field 1
   
   document.getElementById("field2").addEventListener("keyup",checkField2); //check when you fill the field 2
   
   
});


function checkField1(){
    
    var field1 = document.getElementById("field1").value;
    if (field !== "") {
        
    }
}

function checkField2(){
    log(document.getElementById("field2").value);
}

function log(msg) {
    console.log(msg);
}
