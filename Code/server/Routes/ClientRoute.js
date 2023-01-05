const express = require('express')
const Client = require('../Controllers/ClientController')
const router = express.Router();

router.get('/', Client.findAll);
router.get('/:id', Client.findOne);
router.post('/create', Client.create);
router.patch('/update/:id', Client.update);
router.delete('/delete/:id', Client.destroy);

module.exports = router