const asyncHandler = require('express-async-handler');
const Paiment = require('../models/PaymentModel');
const Client = require('../models/ClientModel');
const AppartementModel = require('../models/AppartementModel');



const CreatePaiment = asyncHandler(async (req, res) => {
    const { cin, Name_Immeuble, Number_Appartement, Date, Montant, Statut_Payment } = req.body;
    if (!cin || !Name_Immeuble || !Number_Appartement || !Date || !Montant || !Statut_Payment) {
        return res.status(400).json({ message: "Veuillez remplir tous les champs" })
    }
    // search for ID appartement TO send in req Add Paiment
    const SearchAppartement = await AppartementModel.findOne({ Number_Appartement: req.body.Number_Appartement });
    if (!SearchAppartement) {
        return res.status(400).json({ message: "Appartement introuvable" })
    }
    // search for ID Client TO send in req Add Paiment
    const SearchClient = await Client.findOne({ cin: cin })
    if (!SearchClient) {
        return res.status(400).json({ message: "Client introuvable" })
    }
    // get ID Client and Appartement to send it to table paiment 
    const idClient = SearchClient._id;
    const idAppartement = SearchAppartement._id;
    // send DATA to table Paiment:
    const paiment = await Paiment.create({
        cin: idClient,
        Name_Immeuble,
        Number_Appartement: idAppartement,
        Date,
        Montant,
        Statut_Payment
    });
    if (paiment) {
        return res.status(200).json({ message: "Paiement passé avec succès" });
    } else {
        return res.status(400).json({ message: "Données de paiement invalides" })
    }
})



const UpdatePaiment = asyncHandler(async (req, res) => {
    const { cin, Name_Immeuble, Number_Appartement, Date, Montant, Statut_Payment } = req.body;
    const _id = req.params.id;
    if (!cin || !Name_Immeuble || !Number_Appartement || !Date || !Montant || !Statut_Payment) {
        return res.status(400).json({ message: "Veuillez remplir tous les champs" })
    }
    // search for ID appartement TO send in req Add Paiment
    const SearchAppartement = await AppartementModel.findOne({ Number_Appartement: req.body.Number_Appartement });
    if (!SearchAppartement) {
        return res.status(400).json({ message: "Appartement introuvable" })
    }
    // search for ID Client TO send in req Add Paiment
    const SearchClient = await Client.findOne({ cin: cin })
    if (!SearchClient) {
        return res.status(400).json({ message: "Client introuvable" })
    }
    // get ID Client and Appartement to send it to table paiment 
    const idClient = SearchClient._id;
    const idAppartement = SearchAppartement._id;
    // send DATA to table Paiment:
    const checkPaimentAndUpdate = await Paiment.findOneAndUpdate({ _id }, {
        cin: idClient,
        Name_Immeuble,
        Number_Appartement: idAppartement,
        Date,
        Montant,
        Statut_Payment
    })
    if (checkPaimentAndUpdate) {
        return res.status(200).json({ message: "Client et modifier avec succès !" });
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" });
    }
})


const DeletePaiment = asyncHandler(async (req, res) => {
    const paiment = await Paiment.findById(req.params.id);
    if (paiment) {
        await paiment.remove();
        return res.status(200).json({ message: "Paiement supprimé" })
    } else {
        return res.status(404).json({ message: "Paiements introuvables" })
    }
})


const GetAllPaiments = asyncHandler(async (req, res) => {
    const paiments = await Paiment.find({}).populate("Number_Appartement").populate("cin");
    if (paiments) {
        return res.status(200).json(paiments)
    } else {
        return res.status(404).json({ message: "Paiements introuvables" })
    }
})



const GetSinglePayment = asyncHandler(async (req, res) => {
    const paiment = await Paiment.findById(req.params.id)
    if (paiment) {
        return res.status(200).json(paiment)
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" })
    }
})

module.exports = {CreatePaiment , DeletePaiment , GetAllPaiments, UpdatePaiment,GetSinglePayment};