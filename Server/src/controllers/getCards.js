const axios = require('axios');

const getCards = async (req, res) => {
    const value = req.params.value;

    try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${value}&media_type=image`);
        const data = response.data.collection.items;

        // Mapear los datos y las imágenes en una lista de promesas
        const listaPromesas = data.map(async (dato) => {
            const [info] = dato.data; // Desestructurar el único objeto dentro del arreglo
            const imagenResponse = await axios.get(dato.href);
            const imagenes = imagenResponse.data;

            // Filtrar la URL que termine en "thumb.jpg"
            const imagen = imagenes.find(url => url.endsWith("thumb.jpg"));

            // Crear un nuevo objeto con las propiedades requeridas de 'info'
            const infoReducida = {
                titulo: info.title,
                fecha: info.date_created.substring(0,10),
                descripcion: info.description_508,
                idNasa:info.nasa_id,
                imagen
            };

            // Retornar un objeto con la información reducida y la imagen filtrada
            return  infoReducida ;
        });

        // Esperar a que todas las promesas se completen
        const resultados = await Promise.all(listaPromesas);

        // Enviar la lista completa como respuesta
        return res.json(resultados);
    } catch (error) {
        console.error('Error al obtener la lista de Cards espaciales:', error.message);
        res.status(500).json({ error: 'Error al obtener la lista de Cards espaciales' });
    }
};

module.exports = getCards;
