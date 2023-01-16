const express = require('express')
const router = express.Router()

const { CreateAppartement, DeleteAppartement, UpdateAppartement, GetAllAppartement, GetSingleAppartement } = require('../controllers/AppartementController')

router.post('/appartement', CreateAppartement)
router.delete('/appartement/:id', DeleteAppartement)
router.put('/appartement/:id', UpdateAppartement)
router.get('/appartements', GetAllAppartement)
router.get('/appartement/:id', GetSingleAppartement)

module.exports = router