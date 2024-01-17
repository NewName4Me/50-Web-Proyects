function display() {
  if(!event.target.matches('#search')){ //para que no se active cuando pulsas la barra de busqueda
    var search = document.querySelector('.search');
    var search2 = document.querySelector('p');
    search.classList.toggle('active');
    search2.classList.toggle('active');
  }
}
