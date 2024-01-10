function expand(clickedImage) {
  clickedImage.classList.add("expand"); //activa la funcion expandir a la imagen que cliqueamos
  
  let allImages = document.querySelectorAll("img"); //para eliminar las imagenes seleccionadas una vez una de ellas ya lo esta
  allImages.forEach(function (image) {
    if (image !== clickedImage) {
      setTimeout(function () { //hace que las imagenes que se encojen lo hagan despacito
        image.classList.remove("expand");
      }, 50); 
    }
  });
}
