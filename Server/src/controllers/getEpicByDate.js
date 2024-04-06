const axios = require('axios');
require('dotenv').config();
const {
  api_key
} = process.env;
const getEpicByDate = async (req, res) => {
    const date = req.params.date;
    console.log("Date:",date)
    console.log(api_key)
    try {
        const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${api_key}`);
        const data = response.data; 
        console.log(data)
        
        return res.status(200).json(data); 
    } catch (error) {
        console.error('Error al obtener EPIC:', error.message);
        res.status(500).json({ error: 'Error al obtener EPIC' });
    }
};

module.exports = getEpicByDate;
