import './css/Libreria.css';
import Cards from './Cards.tsx';
import { useState } from 'react';

const Libreria = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('sun');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        setSearchValue(inputValue);
    };

    return (
        <div className='div__libreria'>
            <section className='libreria__inputs'>
                <input 
                    className="libreria__input__text" 
                    type="text" 
                    placeholder="Haz una búsqueda" 
                    value={inputValue} 
                    onChange={handleChange} 
                />
                <input 
                    className="libreria__input__button" 
                    type="button" 
                    value="Buscar"
                    onClick={handleClick} 
                />
            </section>
           
                <Cards value={searchValue} />
           
        </div>
    );
}

export default Libreria;
