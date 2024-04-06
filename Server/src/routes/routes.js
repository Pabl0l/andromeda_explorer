const { Router } = require('express');
const getCards = require('../controllers/getCards.js');
const getCardByID = require('../controllers/getCardByID.js');
const getApod = require('../controllers/getApod.js');
const getEpicByDate = require('../controllers/getEpicByDate.js');

const router = Router();

router.get('/libreria/:value', getCards); 

router.get('/detalles/:idNasa', getCardByID); 

router.get('/apod', getApod); 

router.get('/epic/:date', getEpicByDate); 

module.exports = router;
