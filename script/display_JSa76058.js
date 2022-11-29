// function displayUserForm to display data taken from form
function displayUserForm(form){
    var strFirstName = document.getElementById("firstName").value;
    var strLastName = document.getElementById("lastName").value;
    var experienceYes = document.getElementById("experienceYes");
    var experienceNo = document.getElementById("experienceNo");
    var comfortZoneYes = document.getElementById("comfortZoneYes");
    var comfortZoneNo = document.getElementById("comfortZoneNo");

    var fullName = strFirstName + " " + strLastName;

    if(experienceYes.checked){
        if(comfortZoneYes.checked){
            document.getElementById("userLevel").textContent = "Wow " + fullName + " you must be pretty good at coding, you should check out the expert video below!";
            return false;
        }
        else if(comfortZoneNo.checked){
            document.getElementById("userLevel").textContent = fullName + ", you should check out the intermediate video below, as you've already got some experience.";
            return false;
        }
        return false;
    }
    else if(experienceNo.checked){
        if(comfortZoneYes.checked){
            document.getElementById("userLevel").textContent = "You like a challenge, " + fullName + ", that is respectable. You should check out the intermediate video below.";
            return false;
        }
        else if(comfortZoneNo.checked){
            document.getElementById("userLevel").textContent = "So, " + fullName + ", you are quite new to coding. That's totally fine! The intro video below should help!";
            return false;
        }
        return false;
    }
    return false;
} // end displayUserForm function