const mongoose = require("mongoose");
// const Appartemente = require('./AppartementModel')
// const Cliente = require('./ClientModel')

const paymentSchema = mongoose.Schema({
    cin: {
        type: String,
        require: [true, "SVP Entrer Votre CIN"],
        ref: "Client"
    },
    Name_Immeuble: {
        type: String,
        require: [true, "SVP Entrer Votre Name de immeuble"],
        ref: "Appartement"
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
        enum: ['No Payé', 'Payé'],
        default: 'No Payé',
    }
})

module.exports = mongoose.model("Payment", paymentSchema);