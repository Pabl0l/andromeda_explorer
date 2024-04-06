const axios = require('axios');
require('dotenv').config();
const {
  api_key
} = process.env;
const getApod = async (req, res) => {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
                api_key
            }
        });
        const data = response.data;

        const apodData = {
            imagen: data.hdurl,
            fecha: data.date,
            titulo: data.title,
            autor: data.copyright,
            descripcion: data.explanation
        };

        return res.status(200).json(apodData);
    } catch (error) {
        console.error('Error al obtener APOD:', error.message);
        res.status(500).json({ error: 'Error al obtener APOD' });
    }
};

module.exports = getApod;

