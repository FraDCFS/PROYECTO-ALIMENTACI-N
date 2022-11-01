function calcular() {
  let total = 0;



  // Este será nuestro elemento donde poner el valor total de la division
  let resultado = document.getElementById("resultado");

  // Aquí  los valores traídos de los input
  // encontrados por su atributo id="" parseados a un número literal
  // con la función parseInt()
  let pesos = document.getElementById("peso").value;
  let alturas = document.getElementById("altura").value;

  total = ((pesos / (alturas * alturas)) * 10000);/* llevo cm^2 a metro cuadrado*/
  total = total.toFixed(2);
  // Aquí le decimos al elemento resultado que nos muestre el resultado de la división
  // 
  resultado.innerHTML = total;

  let resultadoIMC= document.getElementById("resultadoIMC");
  if (total < 18) {
     resultadoIMC.innerText="DELGADEZ";
   /* console.log( "DELGADEZ");*/
  }
  else
    if (total >= 18 && total< 25) {
      resultadoIMC.innerText="Peso Normal";

      /*console.log( "Peso Normal");*/
    }
    else
      if (total >= 25 && total < 30) {
        resultadoIMC.innerText="SOBREPESO";

        /*console.log( "sobrepeso");*/
      }
      else
        if (total >= 30 && total < 40) {
          resultadoIMC.innerText="OBESIDAD";

          /*console.log( "Obesidad");*/
        }
        else if (total >= 40) {
          console.log( "Obesidad Grave");

        }
        else {
          console.log( "complete el peso y la altura");
        }

}




























  // me falta el condicional donde me diga de acuerdo con el
  //resultado me diga bajo peso normal el otro..y obesidad y 