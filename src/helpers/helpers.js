export function calcularTotal(cantidad, plazo) {
    
    // Cantidades
    //   0     - 1,000   = 25%
    //   1,001 - 5,000   = 20%
    //   5,001 - 10,000  = 15%
    //   +10,000  = 10%

    let totalCantidad = 0;

    if( cantidad <= 1000 ){
        totalCantidad = cantidad * 0.25;
    }else if( cantidad > 1000 && cantidad <= 5000){

        totalCantidad = cantidad * 0.20;

    }else if( cantidad >5000 && cantidad <= 10000 ){
        totalCantidad = cantidad * 0.15;
    }else{
        totalCantidad = cantidad * 0.10;
    }

    // Calcular el plazo
    //   3 meses  = 5%
    //   6 meses  = 10%
    //   12 meses = 15%
    //   24 meses = 20%

    let totalPlazo = 0;

    switch (plazo) {
        case 3:
            totalPlazo = cantidad * 0.05;
            break;
        case 6:
            totalPlazo = cantidad * 0.10;
            break;
        case 12:
            totalPlazo = cantidad * 0.15;
            break;
        case 24:
            totalPlazo = cantidad * 0.20;
            break;
    
        default:
            break;
    }

    return cantidad + totalCantidad + totalPlazo;
}