# VALIDACION DE FORMULARIO

![imga](http://i65.tinypic.com/24l4t9h.png)

- Todos los campos son obligatorios, excepto los dos últimos.

```javascript
var x = document.getElementById("name").value;  /*cambiando nombre del id */
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
```

- Los campos nombre y apellido sólo deben permitir caracteres de la A-Z. 
- Para los campos nombre y apellido la primera letra debe ser mayúscula. 
- Validar que el campo email tenga un formato válido. Ej: name@domain.com 

```javascript
var email = document.getElementById("input-email").value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
  	return false;
	};
```

- El campo password debe tener al menos 6 caracteres.
- El campo password no puede ser igual a "password" ó "123456" ó "098754".

```javascript
var pass = document.getElementById("input-password").value;
    if (pass.length <= 6 || pass.length == 0 || pass == "123456" || pass == "98754" || pass == "password" ) {
        alert("Contraseña no Valida");
    return false; 
     };
```

- El valor seleccionado de bicis, debe ser una de las opciones presentadas.
- Si algún campo presenta error debe informarse al usuario por medio de un alert.
