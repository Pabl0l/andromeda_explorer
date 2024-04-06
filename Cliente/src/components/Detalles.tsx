import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Detalles.css';
import { useParams } from 'react-router-dom';

const Detalles = () => {
  const { idNasa } = useParams(); 

  const [datos, setDatos] = useState({
    imagen: '',
    fecha: '',
    titulo: '',
    autor: '',
    descripcion: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/detalles/${idNasa}`);
        const { imagen, fecha, titulo, autor, descripcion } = response.data;
        setDatos({ imagen, fecha, titulo, autor, descripcion });
        console.log("Detalles:",response.data)
      } catch (error:any) {
        console.error('Error al obtener datos:', error.message);
      }
    };

    fetchData();
  }, [idNasa]); 

  return (
    <section className="Detalles">
      <div className="Detalles__div__img">
        <img className="Detalles__img" src={datos.imagen} alt={datos.titulo} />
      </div>
      <article className="Detalles__article">
        <h2 className="Detalles__h2">{datos.titulo}</h2>
        <h3 className="Detalles__h3">{datos.autor}</h3>
        <time className="Detalles__date">{datos.fecha}</time>
        <p className="Detalles__p">{datos.descripcion}</p>
      </article>
    </section>
  );
};

export default Detalles;
