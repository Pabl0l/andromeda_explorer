import './css/Aside.css'
import { Link } from 'react-router-dom';


const Aside = () =>{
    return(
        <aside className="aside">
            <h2 className="aside__h2">Andromeda Explorer</h2>
            <nav className='aside__nav'>
            <ol className="aside__ol">
                <li className="aside__ol__li"><Link className='aside__ol__a' to="/">Inicio</Link></li>
                <li className="aside__ol__li"><Link className='aside__ol__a' to="/libreria_de_imagenes">Librería</Link></li>
                <li className="aside__ol__li"><Link className='aside__ol__a' to="/apod">Fotografía Astronómica del Día</Link></li>
                <hr className='aside__hr'/>
                <li className="aside__ol__li"><a className='aside__ol__a' href="https://github.com/Pabl0l" target='_blank' rel='noopener'>GitHub</a></li>
                <li className="aside__ol__li"><a className='aside__ol__a' href="#" target='_blank' rel='noopener'>Autor</a></li>
            </ol>
            </nav>
        </aside>
    )
}
export default Aside