// function validateUserForm to run all validations
function validateUserForm(form){
    if(validateFirstName(form) && validateLastName(form) && validateExperience(form) && validateComfort(form)){
        return false;
    }
} // end validateUserForm function

// function validateFirstName to validate first name
function validateFirstName(form){
    var firstName = form.elements["firstName"];

    if(firstName.validity.valueMissing){
        firstName.setCustomValidity("Please enter your first name");
        return false;
    }
    else if(firstName.validity.patternMismatch){
        firstName.setCustomValidity("Please enter you real name");
        return false;
    }
    else{
        firstName.setCustomValidity("");
        return true;
    }
} // end validateFirstName function

// function validateLastName to validate last name
function validateLastName(form){
    var lastName = form.elements["lastName"];

    if(lastName.validity.valueMissing){
        lastName.setCustomValidity("Please enter your last name");
        return false;
    }
    else if(lastName.validity.patternMismatch){
        lastName.setCustomValidity("Please enter you real name");
        return false;
    }
    else{
        lastName.setCustomValidity("");
        return true;
    }
} // end validateLastName function

// function validateExperience to validate that the user has checked the experience box
function validateExperience(form){
    var experience = document.getElementById("experienceYes");

    if(document.getElementById("experienceYes").checked){
        experience.setCustomValidity("");
        return true;
    }
    else if(document.getElementById("experienceNo").checked){
        experience.setCustomValidity("");
        return true;
    }
    else{
        experience.setCustomValidity("Please select an option");
        return false;
    }
} // end validateHeight function

// function validateComfort to validate that the user has checked the comfort zone box
function validateComfort(form){
    var comfort = document.getElementById("comfortZoneYes");

    if(document.getElementById("comfortZoneYes").checked){
        comfort.setCustomValidity("");
        return true;
    }
    else if(document.getElementById("comfortZoneNo").checked){
        comfort.setCustomValidity("");
        return true;
    }
    else{
        comfort.setCustomValidity("Please select an option");
        return false;
    }
} // end validateComfort function