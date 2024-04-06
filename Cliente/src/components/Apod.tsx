import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Apod.css'

const Apod = () => {
    const [esHorizontal, setEsHorizontal] = useState(false);
    const [datos, setDatos] = useState({
        imagen:'',
        fecha:'',
        titulo:'',
        autor:'',
        descripcion:'',
    })

    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/apod');
                const {    imagen,fecha, titulo, autor, descripcion } = response.data;
                setDatos({imagen, fecha,titulo,autor,descripcion})
            } catch (error:any) {
                console.error('Error al obtener datos:', error.message);
            }
        };

        fetchData();
    }, []); 


  useEffect(() => {
    // Función para evaluar las dimensiones de la imagen
    const evaluarDimensionesImagen = (urlImagen:any) => {
      const imagen = new Image();
      imagen.src = urlImagen;
      imagen.addEventListener('load', () => {
        const anchoImagen = imagen.naturalWidth;
        const altoImagen = imagen.naturalHeight;
        if (anchoImagen > altoImagen) {
          setEsHorizontal(true); 
        } else if (anchoImagen < altoImagen) {
          setEsHorizontal(false); 
        } else {
          setEsHorizontal(false); 
          console.log('La imagen es cuadrada (igual ancho y alto).');
        }
      });
      imagen.addEventListener('error', () => {
        console.error('Error al cargar la imagen.');
      });
    };

    // Llamar a la función para evaluar la imagen al cargar el componente
    evaluarDimensionesImagen(datos.imagen);
  }, [datos.imagen]);
      
              return (
          <section className={esHorizontal ? "apod__h": "apod"}>
            <div className={esHorizontal ? "apod__div__img__h": "apod__div__img"}>
              <img className={esHorizontal ? 'apod__img__h': 'apod__img'} src={datos.imagen} alt="Fotografía Astronómica del Día" />
            </div>
            <article className={esHorizontal ? "apod__article__h": "apod__article"}>
              <h2 className="apod__h2">{datos.titulo}</h2>
              <h3 className="apod__h3">{datos.autor}</h3>
              <time className="apod__date">{datos.fecha}</time>
              <p className="apod__p">{datos.descripcion}</p>
            </article>
          </section>
        );
      
    }

export default Apod;
