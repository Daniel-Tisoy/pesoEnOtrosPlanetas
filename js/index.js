// gravedad de los planetas
    const gMarte = 3.721;
    const gJupiter = 24.79;
    const gTierra = 9.807;

// obtener parrafo para mostrar el resultado
let muestraPeso = document.getElementById("muestraResultado");
muestraPeso.innerText = "";

function calcularPesoUsuario(){
// obtener datos del usuario
    let pesoUsuario = document.getElementById("peso").value;
    let gPlaneta = document.getElementById("planeta").value;
    pesoUsuario = parseFloat(pesoUsuario);
    gPlaneta = parseFloat(gPlaneta);
// obtener peso en el planeta
    let pesoCalculado = calcularPeso(pesoUsuario, gPlaneta)
// obtener nombre del planeta
    let nombrePlaneta = obtenerPlaneta(gPlaneta);
// mostrar resultado en pantalla
    muestraPeso.innerText = `Tu peso en ${nombrePlaneta} es: ${pesoCalculado} kgs`
}

function calcularPeso(peso, gPlaneta){
    let resultado = (peso * gPlaneta)/gTierra;
    return resultado.toFixed(2)
}

function obtenerPlaneta(gravedadPlaneta){
    if (gJupiter === gravedadPlaneta){
        return "Jupiter";
    } else if (gravedadPlaneta == gMarte){
        return "Marte";
    }
}
