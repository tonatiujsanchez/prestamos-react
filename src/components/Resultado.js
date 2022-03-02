
const Resultado = ({ total, plazo, cantidad }) =>{ 
    
    const pagoMensual = (total / plazo).toFixed(2);
    
    return( 
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: $ { cantidad.toFixed(2) }</p>
            <p>A pagar en { plazo } meses</p>
            <p>Su pago mensual es de { pagoMensual }</p>
            <p>Total a pagar: $ { total.toFixed(2) }</p>
        </div>            
    )
};
 
export default Resultado;

