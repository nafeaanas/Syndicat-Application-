const express = require('express')
const router = express.Router()

const { CreateAppartement, DeleteAppartement, UpdateAppartement, GetAllAppartement, GetSingleAppartement } = require('../Controllers/AppartementController')

router.post('/create', CreateAppartement)
router.delete('/delete/:id', DeleteAppartement)
router.put('/appartement/:id', UpdateAppartement)
router.get('/appartements', GetAllAppartement)
router.get('/appartement/:id', GetSingleAppartement)

module.exports = router