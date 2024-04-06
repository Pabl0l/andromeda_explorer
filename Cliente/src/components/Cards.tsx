import './css/Cards.css';
import Card from './Card.tsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
    value: string;
}

const Cards = ({ value }: Props) => {
    const [cards, setCards] = useState([{ imagen: '', titulo: '', idNasa: '',fecha:'' }]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/libreria/${value}`);
                setCards(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, [value]); 

    return (
        <section className="cards">
            {cards.length > 1 && cards.map((card, index) => (
                <Card 
                    key={index} 
                    imagen={card.imagen} 
                    titulo={card.titulo} 
                    idNasa={card.idNasa} 
                    fecha={card.fecha} 
                />
            ))}
        </section>
    );
}

export default Cards;
