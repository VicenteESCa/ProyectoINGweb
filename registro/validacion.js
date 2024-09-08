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
    if ( !Check_Input_Is_Not_Empty("nombre") ) { return false; }
    if ( !Check_Input_Is_Not_Empty("rut") ) { return false; }
    if ( !Check_Input_Is_Not_Empty("email") ) { return false; }
    if ( !Check_Input_Is_Not_Empty("region") ) { return false; }
    if ( !Check_Input_Is_Not_Empty("contrasenya") ) { return false; }
    if ( !Check_Input_Is_Not_Empty("valcontrasenya") ) { return false; }

    let password = document.forms["registro"]["contrasenya"].value;
    let val_password = document.forms["registro"]["val_contrasenya"].value;

    // validate that "contrasenya" and "val_contrasenya" are equal.
    Validate_Element("contrasenya", ( password != val_password ));
    Validate_Element("val_contrasenya", ( password != val_password ));
    if ( password != val_password ) {
        return false;
    }

    let terms_conds = document.forms["registro"]["terms_conds"].value;
    Validate_Element(terms_conds, terms_conds);
    if ( !terms_conds ) {
        return false;
    }

    return true;
}