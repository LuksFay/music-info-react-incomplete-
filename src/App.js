import React, {useState, useEffect} from 'react'
import Formulario from './components/Formulario';
import axios from 'axios'
import Cancion from './components/Cancion';
function App() {

  const [busquedaLetra, setBusquedaLetra] = useState('');
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});
  
  useEffect(()=>{
    if(Object.keys(busquedaLetra).length === 0) return;
    const consultarApiLetra = async () =>{

      const {artista, cancion} = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      console.log(letra.data.lyrics);
      console.log(informacion.data.artist);
      
      // setLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  },[busquedaLetra]);
  return (
    <>
    <Formulario setBusquedaLetra={setBusquedaLetra}/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">

        </div>
        <div className="col-md-6">
          <Cancion letra={letra}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
