const express = require('express')
const Client = require('../Controllers/ClientController')
const router = express.Router();

router.get('/clients', Client.findAll);
router.get('/client/:id', Client.findOne);
router.post('/create', Client.create);
router.put('/update/:id', Client.update);
router.delete('/delete/:id', Client.destroy);

module.exports = router