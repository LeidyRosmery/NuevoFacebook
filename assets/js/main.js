var textPost = document.getElementById("texto");
var btnPublicar = document.getElementById("botonPublicar");
var estado = document.getElementById("seleccionEstado");
var div = document.getElementById("divMostrar");
  var miPost1 = new miPost();
function miPost() {
    this.array = [];
    this.contador = 0;
    this.crearPost = function(texto1, estado1) {
        this.array.push({
            id: this.contador,
            texto: texto1,
            estado: estado1
        })
        this.contador++;
    }
    //*************************
    this.publicaPost = function() {
  console.log(this.contador);
        this.array.forEach(function(elemento) {
            var fieldset = document.createElement("fieldset");
            fieldset.style = "width : 250px";
            var textarea = document.createElement("textarea");
            textarea.cols = "60";
            textarea.innerHTML = elemento.texto;
            textarea.setAttribute("disabled", true);
            var editar = document.createElement("a");
            editar.innerHTML = "Editar";
            editar.setAttribute("href", "#");
            var cambiarBoton = 0;
            editar.addEventListener('click', function(e) {
                console.log(e.currentTarget);
                if (cambiarBoton == 0) {
                    editar.innerHTML = "Guardar";
                    textarea.disabled = false;
                    cambiarBoton = 1;
                } else {
                    editar.innerHTML = "Editar";
                    textarea.disabled = true;
                    cambiarBoton = 0;
                }
            });
            var eliminar = document.createElement("a");
            eliminar.innerHTML = "Eliminar";
            eliminar.setAttribute("href", "#");

            eliminar.addEventListener('click', function() {
                alert("Esta seguro de eliminar la publicacion");
              if (fieldset.parentNode) {
                    fieldset.parentNode.removeChild(fieldset);
                }
                console.log(miPost1.contador);
                console.log(  miPost1.array.splice(miPost1.contador-1,1));
                miPost1.array.splice(miPost1.array.id,1);
            });
            fieldset.appendChild(textarea);
            fieldset.appendChild(editar);
            fieldset.appendChild(eliminar);
            div.appendChild(fieldset);
        });
    }
}

function limpiar() {
    textPost.value = "";
}
btnPublicar.addEventListener('click', function() {
    divMostrar.innerHTML="";
    miPost1.crearPost(textPost.value, estado.value);
    miPost1.publicaPost();
    console.log(miPost1.array);
    limpiar();
})
