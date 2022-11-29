// function selectFlex to choose which flexbox option to display
function selectFlex() {
    var cont1 = document.getElementById("containerSelect1");
    var cont2 = document.getElementById("containerSelect2");
    var cont3 = document.getElementById("containerSelect3");
    var contChange = document.getElementById("changingContainer");

    if(cont1.selected){
        contChange.className = "flexContainer1";
        return false;
    }
    else if(cont2.selected){
        contChange.className = "flexContainer2";
        return false;
    }
    else if(cont3.selected){
        contChange.className = "flexContainer3";
        return false;
    }
    else{
        contChange.className = "flexContainer4";
        return false;
    }
} // end selectFlex function