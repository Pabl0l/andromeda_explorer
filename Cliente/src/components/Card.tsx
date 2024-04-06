import './css/Card.css'
interface Props{
    imagen:string
    titulo:string
    idNasa:string
    fecha:string
}


const Card = ({imagen,titulo,idNasa,fecha}:Props) =>{
    return(
<section className="card" tabIndex={0} >
    <a className="card__a" href={`/detalles/${idNasa}`} rel="noopener">
        <img className="card__img"  src={imagen} alt="imagen de la card" tabIndex={-1} />
        <div className="card__overlay">
            <h2 className='card__h2' tabIndex={-1}>{titulo}</h2>
            <time className="card__date" tabIndex={-1}>{fecha}</time>
        </div>
    </a>
</section>


    
    )
}

export default Card