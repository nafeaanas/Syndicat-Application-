const mongoose = require("mongoose");

const appartementSchema = mongoose.Schema({
    Name_Immeuble: {
        type: String,
        required: [true, "Entrer Votre Name de Immeuble"],
    },
    Number_Appartement: {
        type: String,
        required: [true, "SVP Entrer Votre Number de Appartement"],
        unique: true
    },
    Status:{
        type: String,
    },
    Numbre_Etage_Appartement:{
        type:String
    }
})

module.exports=mongoose.model("Appartement",appartementSchema);