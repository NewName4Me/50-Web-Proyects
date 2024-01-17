var img = document.querySelector('img');
var progress = document.querySelector('.load');

function blur() {
  for (let i = 100; i >= 0; i--) { //desde el uno al 100 vamos cambiando el blur
    setTimeout(() => {
      img.style.filter = 'blur(' + i + 'px)'; //variamos el blue
      progress.textContent = (100 - i) + '%'; //variamos el porcentaje

      if (progress.textContent === '100%') { //cuando nuestro numero de progresion llega a 100 tras un poco desaparece
        setTimeout(() => {
          progress.textContent = '';
        }, 1000);
      }
    }, (100 - i) * 20);
  }
}

blur();
