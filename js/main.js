function validateForm(){
	/* validacion de campos obligatorios */
	var x = document.getElementById("name").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
    var x = document.getElementById("lastname").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
    var x = document.getElementById("input-email").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
    var x = document.getElementById("input-password").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
    /* validacion de email*/
    var email = document.getElementById("input-email").value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
  	return false;
	};
	/* validacion de contraseña*/
	var pass = document.getElementById("input-password").value;
    if (pass.length <= 6 || pass.length == 0 || pass == "123456" || pass == "98754" || pass == "password" ) {
        alert("Contraseña no Valida");
    return false; 
     };
	
    /* validacion de mayuscula */
    /* validacion de bicis */
}