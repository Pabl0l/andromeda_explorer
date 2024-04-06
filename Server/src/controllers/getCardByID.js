const axios = require('axios');

const getCardByID = async (req, res) => {
   const idNasa = req.params.idNasa;
   console.log(idNasa)
    try {

        const metadata = await axios.get(`https://images-assets.nasa.gov/image/${idNasa}/metadata.json`);
        const imagen = `https://images-assets.nasa.gov/image/${idNasa}/${idNasa}~orig.jpg`;
        const data = metadata.data;
      console.log("Imagen:",imagen, "Metadata:", data)
        const DetailData = {
            imagen,
            idNasa,
            fecha: data['EXIF:CreateDate'],
            titulo: data['AVAIL:Title'],
            autor: data['XMP:Credit'],
            descripcion: data['AVAIL:Description'],
        };

        return res.status(200).json(DetailData);
    } catch (error) {
        console.error('Error al obtener getCardByID:', error.message);
        res.status(500).json({ error: 'Error al obtener getCardByID' });
    }
};

module.exports = getCardByID;


