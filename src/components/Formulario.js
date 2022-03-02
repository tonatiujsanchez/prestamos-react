import { useState } from "react";
import { calcularTotal } from './../helpers/helpers';



const Formulario = ( props ) => {

    const { cantidad, setCantidad, plazo, setPlazo, setTotal, setCargando, setFormModificado } = props;

    const [ error, setError ] = useState(false);

    const calcularPrestamo = ( e ) =>{
        e.preventDefault();

        // Validar
        if( cantidad <= 0 || plazo === 0 ){
            setError( true );
            return;
        }
        
        setError( false )
        setFormModificado( false );
        setCargando( true );

        setTimeout(() => {
            
            // Realizar la cotizacíon
            const totalAPagar = calcularTotal( cantidad, plazo );
            setTotal( totalAPagar );

            setCargando(false);
        }, 2000);


    }

    return ( 
        <>      
            <form onSubmit={ calcularPrestamo }>
              <div className="row">
                  <div>
                      <label>Cantidad Prestamo</label>
                      <input 
                          className="u-full-width" 
                          type="number" 
                          placeholder="Ejemplo: 3000"
                          onChange={ (e) => setCantidad( parseInt( e.target.value ) ) }
                      />
                  </div>
                  <div>
                      <label>Plazo para Pagar</label>
                      <select 
                          className="u-full-width"
                          value={ plazo }
                          onChange={ (e) => setPlazo(parseInt( e.target.value )) }
                      >
                          <option value="0">Seleccionar</option>
                          <option value="3">3 meses</option>
                          <option value="6">6 meses</option>
                          <option value="12">12 meses</option>
                          <option value="24">24 meses</option>
                      </select>
                  </div>
                  <div>
                      <input 
                          type="submit" 
                          value="Calcular" 
                          className="button-primary u-full-width" 
                      />
                  </div>
              </div>
            </form>

            { error && (
                <p className="error">Todos los campos son obligatorios</p>
            ) }
        </>
     );
}
 
export default Formulario;
