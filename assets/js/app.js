var micontador=-1;
  function handleFileSelect(evt) {
console.log(micontador);
    var files = evt.target.files; // FileList object
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
      // Only process image files.
      if (!f.type.match('image.*')) {
        alert("esto no es una imagen");
        continue;
      }
      var reader = new FileReader();
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.setAttribute("id",micontador);
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('imagenDiv').insertBefore(span, null);
        };
      })(f);
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  micontador++;
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
