var button = document.getElementById('start-button');
var inputBox = document.getElementById('input-box');
var currentDiv = document.querySelector('.current-num');
var nextDiv = document.querySelector('.next-num');

currentDiv.innerHTML = "0";
button.addEventListener('click', function(){
    if(inputBox.value< 0 || inputBox.value > 9 || inputBox.value.length == 0){
        window.alert("Wrong input");
        return;
    }
    else{
        let currentNum = 0;
        let id = setInterval(function(){
            if(currentNum+1 > parseInt(inputBox.value)) {
                clearInterval(id);
                window.alert("Counter has stopped");
                currentDiv.innerHTML = "0";
                inputBox.value = ' ';
                return;
            }
            currentDiv.innerHTML = currentNum;
            nextDiv.innerHTML = currentNum + 1;
            nextDiv.classList.add("animate");
            setTimeout(function(){
                nextDiv.classList.remove("animate");
                currentDiv.innerHTML = nextDiv.innerHTML;
            }, 500);
            currentNum++;
        }, 1000);
    }        
})


