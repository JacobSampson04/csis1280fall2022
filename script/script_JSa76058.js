// function runUserForm to run validateUserForm and displayUserForm
function runUserForm(form){
    validateUserForm(form);
    displayUserForm(form);
} // end runUserForm function

// function chaseTroll call functions that move the troll face image
function chaseTroll(){
    var trollImg = document.getElementById("trollImg");

    if(trollImg.style.float == 'right'){
        moveTrollBack();
    }
    else{
        moveTroll();
    }
} // end chaseTroll function