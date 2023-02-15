'use strict'

//using on-click when the button is pressed
document.querySelector('#addtolist').onclick = function (){

    //alerts when nothing is typed
    if(document.querySelector('#font input').value.length == 0){
        alert("You don't have anything to do?")
    }

    //copies the input to the to do section
    else{
        document.querySelector('#todotasks').innerHTML += `
                <div class = "todotasks">
                    ${document.querySelector('#font input').value}
                <button class="addtodone">✔</button>&nbsp;
                <button class="delete">X</button>&nbsp;
                </button>
                </div>
            </div>
        `;

        //when pressed the tick mark, sends the done task to completed
        var donetasks = document.querySelectorAll(".addtodone");
        for(var i=0; i<donetasks.length; i++){
            donetasks[i].onclick = function(){
                document.querySelector('#addtodone').innerHTML += `
                <div class = "addtodone">
                ${document.querySelector('#font input').value}
                </div>
                `;
            }   
           
        }

        ////when pressed the cross mark, deletes that tasks
        var tasks = document.querySelectorAll(".delete");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.parentNode.remove();
            }
                
        }
}
}

    