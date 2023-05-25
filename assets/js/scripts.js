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
    //let planes = document.getElementById("planes"); Obtenemos el objeto select
    //let plan = planes.options[planes.selectedIndex].innerText; de esta forma obtenemos lo q se visualiza en el select
    let plan = document.getElementById("planes").value;
    let total_a_pagar = 0;

    if (plan === "0") {
        total_a_pagar = cant_meses * (valor_mensual - valor_mensual * 1);
    } else if (plan === "1") {
        total_a_pagar = cant_meses * (valor_mensual - valor_mensual * 0.8);
    } else if (plan === "2") {
        total_a_pagar = cant_meses * (valor_mensual - valor_mensual * 0.5);
    } else if (plan === "3") {
        total_a_pagar = cant_meses * (valor_mensual - valor_mensual * 0.15);
    }
    document.getElementById("total").value += total_a_pagar;
    DeshabilitarResumen(true);
};

function DeshabilitarResumen( deshabilitar ){
    btn_resumen.disabled = deshabilitar;
};
/*
//Validar que se llenen los campos del formulario
function ValidarCampos(){

};*/
