function submitForm() {
    // Obtener los valores de los campos de entrada
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;

    // Crear un objeto JSON con los datos del formulario
    var userData = {
      "user-mail": email,
      "password": password,
      "nickname": "", 
      "id": ""
    };

  }