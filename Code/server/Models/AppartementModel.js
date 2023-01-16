const mongoose = require("mongoose");

const appartementSchema = mongoose.Schema({
    Name_Immeuble: {
        type: String,
        required: [true, "Entrer Votre Name de Immeuble"],
    },
    Number_Appartement: {
        type: Number,
        required: [true, "SVP Entrer Votre Number de Appartement"],
        unique: true
    },
    Status:{
        type: String,
        enum: ['libre', 'occupée'],
        default: 'libre',
    },
})

module.exports=mongoose.model("Appartement",appartementSchema);