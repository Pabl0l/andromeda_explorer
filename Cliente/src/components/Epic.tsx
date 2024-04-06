import './css/Epic.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Epic = () =>{
    // const [fecha, setFecha] = useState('')
    // function obtenerFechaAyer() {
    //     // Obtener la fecha actual
    //     let fechaActual = new Date();
        
    //     // Restar un día a la fecha actual
    //     fechaActual.setDate(fechaActual.getDate() - 1);
        
    //     // Obtener el año, mes y día
    //     let año = fechaActual.getFullYear();
    //     let mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    //     let dia = String(fechaActual.getDate()).padStart(2, '0');
        
    //     let fechaAyer = `${año}-${mes}-${dia}`;
        
    //     return fechaAyer;
    // }
    // setFecha(obtenerFechaAyer())

    // const [datos, setDatos] = useState({
    //     imagen:'',
    //     tierra_luna:'',
    //     epic_luna:'',
    //     tierra_sol:'',
    //     epic_sol:'',
    //     tierra_epic:'',
    //     angulo_sev:'',
    // })

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3001/epic/${fecha}`);
    //             const { imagen, tierra_luna, tierra_sol, tierra_epic, epic_luna, epic_sol, angulo_sev } = response.data;
    //             setDatos({imagen, tierra_luna, tierra_sol, tierra_epic, epic_luna, epic_sol, angulo_sev})
    //         } catch (error:any) {
    //             console.error('Error al obtener datos:', error.message);
    //         }
    //     };

    //     fetchData();
    // }, []); 
    return(
        <section className="epic">
            <div className="epic__div__img">
                <img className="epic__img" src="/andromeda.jpg" alt="" />
            </div>
            <article className="epic__article">
            <input className="epic__date" type='date'/>
                <h2 className='epic__h2'>Datos de la imagen</h2>
                <h3 className='epic__h3'>Esta imagen fue tomada por la cámara EPIC de la NASA a bordo de la nave espacial NOAA DSCOVR.</h3>
                <div className="epic__div__info">
                    <div className='epic__info__groups'>
                    <h4 className="epic__h4">Tierra al Sol</h4>
                    <p className="epic__data__km">  km</p>
                    </div>
                    <div className='epic__info__groups'>
                    <h4 className="epic__h4">Tierra a Luna</h4>
                    <p className="epic__data__km">  km</p>
                    </div>
                    <div className='epic__info__groups'>
                    <h4 className="epic__h4">EPIC al Sol</h4>
                    <p className="epic__data__km">  km</p>
                    </div>
                    <div className='epic__info__groups'>
                    <h4 className="epic__h4">EPIC a Luna</h4>
                    <p className="epic__data__km">  km</p>
                    </div>
                    <div className='epic__info__groups'>
                    <h4 className="epic__h4">Tierra a EPIC</h4>
                    <p className="epic__data__km">  km</p>
                    </div>
                    <div className='epic__info__groups'>
                    <h4 className="epic__h4">Ángulo SEV</h4>
                    <p className="epic__data__km">  º</p>
                    </div>
                </div>
                <div className="epic__events">
                <h3>Eventos Notables</h3>
                <ol className="epic__ol">
                    <li className="epic__li"><a href="#" className="epic__li__a"></a></li>
                    <li className="epic__li"><a href="#" className="epic__li__a"></a></li>
                    <li className="epic__li"><a href="#" className="epic__li__a"></a></li>
                    <li className="epic__li"><a href="#" className="epic__li__a"></a></li>
                </ol>
                </div>
            </article>
        </section>
    )
}

export default Epic