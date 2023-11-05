
//funciònn para calcular el descuento segun lo elegido en el combo
function calcularDescuento(cantidad, tipo) {
    const precioTicket = 200;
    let valorDescuento;

    switch (tipo) {
        case "estudiante":
            valorDescuento = 0.8;
            break;
        case "trainee":
            valorDescuento = 0.5;
            break;
        case "junior":
            valorDescuento = 0.15;
            break;
        default:
            valorDescuento = 0.8;
    }

    return (precioTicket * Number(cantidad) * (1-valorDescuento)).toFixed(0);
    
}


//función para calcular el resultado total de lo seleccionado
function calcularTotal(){
    const select = document.getElementById('miSelect');
    const cantidad=document.getElementById('cantidad').value;
    const seleccion = select.value;
    if (cantidad !== "" && cantidad !== "0" && !isNaN(cantidad) && cantidad >=1) {
        const resumen=calcularDescuento(Number(cantidad), seleccion);
        document.getElementById('resumen').innerHTML=`Total a pagar:$ ${resumen}`;
    } else {
        document.getElementById('resumen').innerHTML="Por favor ingrese una cantidad válida (mayor que 0 y sin letras).";
       
    }
}


//función para limpiar el formulario
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("miFormulario");
    const clearButton = document.getElementById("btnborrar");
    const total = document.getElementById("resumen");
   
    

    form.addEventListener("btnborrar", function(event) {
        event.preventDefault();

    });

    clearButton.addEventListener("click", function() {
        form.reset(); 
        total.textContent = "Total a pagar:$"; 
    });
});













