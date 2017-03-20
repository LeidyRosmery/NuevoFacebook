var textPost = document.getElementById("texto");
var btnPublicar = document.getElementById("botonPublicar");
var estado = document.getElementById("seleccionEstado");
var div= document.getElementById("divMostrar");
var array = [];

function Post(texto, estado) {
    this.texto = texto;
    this.estado = estado;
}

function publicaPost(miArray) {
  divMostrar.innerHTML="";
  miArray.forEach(function(elemento){
    var fieldset=document.createElement("fieldset");
    var p=document.createElement("p");
    p.innerHTML=elemento.texto;
    var editar=document.createElement("a");
    editar.innerHTML="Editar";
    editar.setAttribute("href","#");
    editar.addEventListener('click',function(){
      editar.innerHTML="Guardar";
      editar.readOnly = true
;
    });
   var eliminar=document.createElement("a");
   eliminar.innerHTML="Eliminar";
   eliminar.setAttribute("href","#");

      eliminar.addEventListener('click',function(){

        console.log("esta seguro de eliminar");
      });
fieldset.appendChild(p);
    fieldset.appendChild(editar);
  fieldset.appendChild(eliminar);

    div.appendChild(fieldset);

    var editar = document.createElement('a');
    editar.setAttribute('href',"#");
    editar.setAttribute('data-edit-mode',false);
    editar.innerHTML = "Editar";

  });
}

function limpiar() {
    textPost.value = "";
}
btnPublicar.addEventListener('click', function() {
    var miPost = new Post(textPost.value, estado.value);
    array.push(miPost);
    limpiar();
    publicaPost(array);
})
