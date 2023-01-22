const mongoose = require("mongoose");
// const Appartemente = require('./AppartementModel')
// const Cliente = require('./ClientModel')

const paymentSchema = mongoose.Schema({
    cin: {
        type: String,
        require: [true, "SVP Entrer Votre CIN"],
        ref: "Client"
    },
    Number_Appartement: {
        type: String,
        require: [true, "SVP Entrer Votre Number de Appartement"],
        ref: "Appartement"
    },
    Date: {
        type: Date,
        required: [true, "Choisir la date de payment "]
    },
    Montant: {
        type: Number,
        required: [true, "SVP Enter a montant de Paiment"]
    },
    Statut_Payment: {
        type: String,
    }
})



module.exports = mongoose.model("Payment", paymentSchema);