//VARIABLES
var totalSteps=5;/*determine el numero de pasos de nuestra barrita*/ 
var currentStep=0;
var progressBarInner=document.getElementById('progressBarInner');
var backButton=document.getElementById('backButton');
var nextButton=document.getElementById('nextButton');

//FUNCIONES
function updateProgressBar(){ /*donde actualizamso nuestra barra y el color de los numeros*/ 
  var percentage=(currentStep/(totalSteps-1))*100;
  progressBarInner.style.width=percentage+'%'; /*actualizamos la longitud de nuestro inner del css asi cambia de color*/
  
  backButton.disabled=currentStep===0; /*cuanto estemos en el paso cero back desactivado*/ 
  nextButton.disabled=currentStep===totalSteps-1; /*cuadno estemos en el ultimo se activa*/ 

  for(var i=1;i<=totalSteps;i++){
    var stepNumber=document.getElementById('num'+i); /*forma interesante de detectar todos nuestros numeros, ya que todos se llaman num1,num2....*/
    if(i<=currentStep+1){
      stepNumber.style.borderColor = 'darkcyan';
    }else{
      stepNumber.style.borderColor = 'grey';
    }
  }
}

function goNext(){ /*cuando pulsamos el botons de siguiente*/ 
  if(currentStep < totalSteps-1){
    currentStep++;
    updateProgressBar();
  }
}
function goBack(){ /*al pulsar el boton de ir para atras*/
  if(currentStep>0){
    currentStep--;
    updateProgressBar();
  }
}

//INICIALIZACIONES
updateProgressBar();