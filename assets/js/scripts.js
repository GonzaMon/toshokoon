/*
//Menu se desplega cuando se scrollea para arriba
let posicionPrincipal = window.scrollY;
window.addEventListener("scroll", function(e){
    var desplazamientoActual = window.scrollY;
    var elemento = this.document.getElementsByClassName('navbar');
    if (posicionPrincipal >= desplazamientoActual){
        elemento[0].classList.add("fixed-top");
    }
    else{
        elemento[0].classList.remove("fixed-top");
    }
    posicionPrincipal = desplazamientoActual;
});
*/
const valor_mensual = 2000;
const btn_resumen = document.getElementById("resumen");

function MontoAPagar(){
    let cant_meses = Number(document.getElementById("cantMeses").value);
    let planes = document.getElementById("planes");
    let plan = planes.options[planes.selectedIndex].innerText;
    let totalAPagar = 0;

    if (plan === "Fierro") {
        totalAPagar = cant_meses * (valor_mensual - valor_mensual * 1);
    } else if (plan === "COBRE") {
        totalAPagar = cant_meses * (valor_mensual - valor_mensual * 0.8);
    } else if (plan === "PLATA") {
        totalAPagar = cant_meses * (valor_mensual - valor_mensual * 0.5);
    } else if (plan === "ORO") {
        totalAPagar = cant_meses * (valor_mensual - valor_mensual * 0.15);
    }
    document.getElementById("total").value += totalAPagar;
    btn_resumen.disabled = true;
};

function Restaurar(){
    btn_resumen.disabled = false;
};

//Validar que se llenen los campos del formulario
function ValidarCampos(){

};
