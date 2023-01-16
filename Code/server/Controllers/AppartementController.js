

const asyncHandler = require('express-async-handler');
const Appartement = require('../models/AppartementModel');



const CreateAppartement = asyncHandler(async (req, res) => {
    const { Name_Immeuble, Numbre_Etage_Appartement, Number_Appartement, Status } = req.body;
    if (!Name_Immeuble || !Numbre_Etage_Appartement || !Number_Appartement || !Status) {
        return res.status(400).json({ message: "Merci de compléter tous les champs !" })
    }

    const checkNumberAppartement = await Appartement.findOne({ Number_Appartement: req.body.Number_Appartement })
    if (checkNumberAppartement) {
        return res.status(200).json({ message: "Appartement déjà existant" })
    }
    // Create Appartement :
    const appartement = await Appartement.create({
        Name_Immeuble,
        Numbre_Etage_Appartement,
        Number_Appartement,
        Status
    })
    if (appartement) {
        return res.status(200).json({ message: "Appartement créé avec succès !" })
    }
})



const DeleteAppartement = asyncHandler(async (req, res) => {
    const appartement = await Appartement.findById(req.params.id)
    if (appartement) {
        await appartement.remove()
        return res.status(200).json({ message: 'Appartement supprimé' })
    } else {
        return res.status(404).json({ message: "Appartement introuvable" })
    }
})



const UpdateAppartement = asyncHandler(async (req, res) => {
    const { Name_Immeuble, Numbre_Etage_Appartement, Number_Appartement, Status } = req.body;
    const _id = req.params.id;

    if (!Name_Immeuble || !Numbre_Etage_Appartement || !Number_Appartement || !Status) {
        return res.status(400).json({ message: "please fill all fields !" })
    }

    const checkAppartementAndUpdate = await Appartement.findOneAndUpdate({ _id }, {
        Name_Immeuble,
        Numbre_Etage_Appartement,
        Number_Appartement,
        Status
    })

    if (checkAppartementAndUpdate) {
        return res.status(200).json({ message: "Appartement mis à jour avec succès !" })
    }
    else { return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" }) }
})



const GetAllAppartement = asyncHandler(async (req, res) => {
    const appartements = await Appartement.find({})
    if (appartements) {
        return res.status(200).json(appartements)
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" })
    }
})



const GetSingleAppartement = asyncHandler(async (req, res) => {
    const appartement = await Appartement.findById(req.params.id)
    if (appartement) {
        return res.status(200).json(appartement)
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" })
    }
})

module.exports = { CreateAppartement, DeleteAppartement, UpdateAppartement, GetAllAppartement, GetSingleAppartement };