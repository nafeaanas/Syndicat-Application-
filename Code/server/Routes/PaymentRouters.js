const express = require('express')
const router = express.Router()

const {CreatePaiment , DeletePaiment , GetAllPaiments, UpdatePaiment,GetSinglePayment} = require('../controllers/PaymentController')

router.post('/payment', CreatePaiment)
router.put('/payment/:id', UpdatePaiment)
router.delete('/payment/:id', DeletePaiment)
router.get('/payments', GetAllPaiments)
router.get('/payment/:id', GetSinglePayment)

module.exports = router