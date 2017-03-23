  var btnPublicar = document.getElementById("botonPublicar");
  var miPost1 = new miPost();

  function miPost() {
      this.array = [];
      this.contador = 0;
      this.crearPost = function(texto, estado) {
          this.array.push({
              id: this.contador,
              texto: texto,
              estado: estado
          })
          this.contador++;
      }

      //****************
      this.creaPost = function(parent) {
          parent.innerHTML = "";
          this.array.forEach(function(elemento) {
              parent.appendChild(this.publicaPost(elemento.texto, elemento.id));
          }, this);
      }
      //*************************
      this.publicaPost = function(text, id) {
          var fieldset = document.createElement("fieldset");
          fieldset.style = "width : 250px";
          fieldset.setAttribute("data-id", id);
          var textarea = document.createElement("textarea");
          textarea.cols = "60";
          textarea.innerHTML = text;
          textarea.setAttribute("disabled", true);
          var editar = document.createElement("a");
          editar.innerHTML = "Editar";
          editar.setAttribute("href", "#");
          var cambiarBoton = 0;
          editar.addEventListener('click', function(e) {
              if (cambiarBoton == 0) {
                  editar.innerHTML = "Guardar";
                  textarea.disabled = false;
                  cambiarBoton = 1;
              } else {
                  editar.innerHTML = "Editar";
                  textarea.disabled = true;
                  cambiarBoton = 0;
                  var postId = e.target.parentNode.getAttribute('data-id');
                  miPost1.array[postId].texto = textarea.value
              }
          });
          var eliminar = document.createElement("a");
          eliminar.innerHTML = "Eliminar";
          eliminar.setAttribute("href", "#");
          eliminar.addEventListener('click', function(e) {
              alert("Esta seguro de eliminar la publicacion");
              if (fieldset.parentNode) {
                  fieldset.parentNode.removeChild(fieldset);
              }
              var postId = e.target.parentNode.getAttribute('data-id');
              miPost1.array.splice(postId, 1);
          });
          fieldset.appendChild(textarea);
          fieldset.appendChild(editar);
          fieldset.appendChild(eliminar);
          return fieldset;
      }
  }
  btnPublicar.addEventListener('click', function() {
      var textPost = document.getElementById("texto");
      var estado = document.getElementById("seleccionEstado");
      var div = document.getElementById("divMostrar");
      miPost1.crearPost(textPost.value, estado.value);
      miPost1.creaPost(div);
      textPost.value = "";
  });
