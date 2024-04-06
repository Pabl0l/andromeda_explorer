import './App.css'
const App = () =>{
    return(
            <div className='div__over__main'>
        <main className="main">
            <div className="main__div">
            <h1>Andromeda Explorer</h1>
            <h3 className="main__h3">Imágenes y datos de la NASA</h3>
            <p className='main__p'>Un proyecto gratuito y de código abierto, impulsado con API REST de <a className='a__api' href="//api.nasa.gov" rel='noopener' target='_blank'><span className='a__color__white'>api</span >.<span className='a__color__blue'>nasa</span>.<span className='a__color__red'>gov</span></a>.</p>
            </div>
            <div className='main__div__img'> 
                <img className='main__img' src="/NASA_logo.png" alt="Logo de la NASA" />
            </div>
        </main>
        <section>
            <h2 className="inicio__section__h2">Sobre esta App</h2>
            <p className="main__p inicio__section_p">El objetivo principal de este sitio web es crear una aplicación <span className='span__subrayado'>Full Stack</span> con la API REST que nos brinda la <span className='span__subrayado'>NASA</span>. Estas API exponen una gran cantidad de imágenes e información, como datos sobre cometas, mediciones de Marte e imágenes de la Tierra en tiempo real.</p>
        </section>
        <section>
            <h2 className="inicio__section__h2">Detalles técnicos</h2>
            <p className="main__p inicio__section_p">Esta página web está escrita en <span className='span__subrayado'>TypeScript</span>, desarrollada utilizando <span className='span__subrayado'>React</span> como framework principal para el front-end, <span className='span__subrayado'>Node + Express</span> para motorizar el Back-end.</p>
        </section>
        </div>
    )
}
export default App