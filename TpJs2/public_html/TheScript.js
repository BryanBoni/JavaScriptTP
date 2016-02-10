
window.addEventListener("load",function (){
    
    var field1OK = 0;
    var field2OK = 0;
   
    log("loaded"); 
   
    document.getElementById("submitBtn").disabled = true;
   
    document.getElementById("field1").addEventListener("keyup",checkField1); //check when you fill the field 1
   
    document.getElementById("field2").addEventListener("keyup",checkField2); //check when you fill the field 2
   
   
    function checkField1(){

        var field1 = document.getElementById("field1").value;
        if (field1 !== "") {
            field1OK = 1;
            
        }else{
            field1OK = 0;
        }
        
        checkBtn();
    }

    function checkField2(){

        var field2 = document.getElementById("field2").value;
        if (field2 !== "") {
            field2OK = 1; 
        }else{
            field1OK = 0;
        }
        checkBtn();
    }

    function log(msg) {
        console.log(msg);
    }
    
    function checkBtn(){
        
        if(field1OK === 1 && field2OK === 1){
            document.getElementById("submitBtn").disabled = false;
        }else{
            document.getElementById("submitBtn").disabled = true;
        }
    }

});