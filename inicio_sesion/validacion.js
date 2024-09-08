function Validate_Element(name, bool) {
    let element = document.getElementsByName(name);

    if ( bool == true ) {
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        return true;
    } else {
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
        return false;
    }
} 

function Check_Input_Is_Not_Empty(name) {
    let value = document.forms["registro"][name].value;
    Validate_Element(name, ( value != "" ));
}

function Validate_Form() {
    if ( !Check_Input_Is_Not_Empty("email") ) { return false; }
    if ( !Check_Input_Is_Not_Empty("contrasenya") ) { return false; }

    // Validate that email and contrasenya exists... 

    return true;
}