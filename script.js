function addListeners(){
    if(window.addEventListener) {
          document.getElementById('eqlbtn').addEventListener("click",Calculate,false); 
    } else if (window.attachEvent){ 
          document.getElementById('eqlbtn').attachEvent("onclick", Calculate);
    
    } 
        
    function Calculate(){	
        calculator.total.value = eval(calculator.total.value)
    }
}
    window.onload = addListeners; 
