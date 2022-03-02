import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

  const [ cantidad, setCantidad ] = useState(0);
  const [ plazo, setPlazo ] = useState('');
  const [ total, setTotal ] = useState(0);
  const [ cargando, setCargando ] = useState(false);

  const [ formModificado, setFormModificado ] = useState(false);


  useEffect( ()=>{
    setFormModificado(true);
  },[cantidad, plazo]);


  return (
    <>
      <Header 
        title = "Cotizador de Prestamos"
      />

      <div className='container'>

        <Formulario 
          cantidad = { cantidad}
          setCantidad = { setCantidad }
          plazo = { plazo }
          setPlazo = { setPlazo }
          total = { total }
          setTotal = { setTotal }
          setCargando = { setCargando }
          setFormModificado = { setFormModificado }
        />
        { (cargando)
            ? <Spinner />
            : (
              <div className='mensajes'>
                { ( !formModificado ) 
                      ? <Resultado
                          total = { total }
                          plazo = { plazo }
                          cantidad = { cantidad }
                        />
                      : <Mensaje /> 
                }
              </div>
            )
        }


      </div>

      

    </>
  );
}



export default App;
