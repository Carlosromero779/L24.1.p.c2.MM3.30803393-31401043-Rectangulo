/*Considerando que un rectángulo varía de un cuadrado sólo
porque la altura no es igual a la base, diseñe la clase
Cl_rectangulo que herede de Cl_cuadrado, y luego haga un
programa que determine el área y el perímetro de un rectángulo
(área= base * altura, perímetro= 2*base + 2*altura).
*/ 

import Cl_Rectangulo from "./Cl_Rectangulo.js";
import Cl_Figura from "./Cl_Figura.js";


let rectangulo = new Cl_Rectangulo(4, 2);
let rectangulo2 = new Cl_Rectangulo(3, 5);
let figura = new Cl_Figura();

figura.procesarArea(rectangulo);
figura.procesarArea(rectangulo2);

let salida = document.getElementById("Salida");
salida.innerHTML = `
<br> Base del rectángulo: ${rectangulo.base}
<br> Altura:  ${rectangulo.altura}
<br> Area resultante:  ${rectangulo.area()}
<br> Perimetro: ${rectangulo.perimetro()}<br>
`;
salida.innerHTML += `
<br> Base del rectángulo: ${rectangulo2.base}
<br> Altura:  ${rectangulo2.altura}
<br> Area resultante: ${rectangulo2.area()}
<br> Perimetro:  ${rectangulo2.perimetro()}
`;