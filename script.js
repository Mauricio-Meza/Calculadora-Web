const pantalla = document.getElementById("resultado");
const botones = document.querySelectorAll(".botones button");

let expresion = "";

// Agrega click a cada botón (excepto Limpiar que tiene otro handler)
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (valor === "=") {
      try {
        // Evalúa la expresión y muestra resultado
        expresion = eval(expresion).toString();
        pantalla.value = expresion;
      } catch {
        pantalla.value = "Error";
        expresion = "";
      }
    } else {
      // Construye la expresión agregando el valor pulsado
      expresion += valor;
      pantalla.value = expresion;
    }
  });
});

// Función para limpiar la pantalla y expresión
function limpiar() {
  expresion = "";
  pantalla.value = "";
};

function calcular() {
    // Evalúa la expresión y muestra resultado
    expresion = eval(expresion).toString();
    pantalla.value = expresion;
    
};

function borrar(){
   resultado.value = resultado.value.slice(0, -1);
   expresion = expresion.slice(0, -1);
};













