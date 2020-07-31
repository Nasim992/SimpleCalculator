
document.getElementById('calculator').addEventListener('click',function(e){
        
    let calculation = document.getElementById('output');
    
    if(calculation.innerText.length<12){
        if(e.target.innerText!="=" && e.target.innerText!="AC" && e.target.innerText!="DEL"){
        calculation.innerText += e.target.innerText;
    }
    }
    if(e.target.id == 'equal'){
        calculation.innerText = eval(calculation.innerText)
    }
    else if(e.target.id == 'delete'){
        calculation.innerText = calculation.innerText.slice(0,-1)
    }
   else if (e.target.id == 'clear'){
       calculation.innerText = '';
   }
   
})