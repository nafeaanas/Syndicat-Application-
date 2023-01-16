const Client = require('../Models/ClientModel')
const asyncHandler = require('express-async-handler')

// Create and Save a new Client
exports.create = asyncHandler(
    async (req, res) => {
        console.log(req.body)
        if (!req.body.email || !req.body.name || !req.body.cin || !req.body.phone) {
        res.status(400)
        throw new Error('content not be  empty')
        }
        
        const client = new Client({
            email: req.body.email,
            name: req.body.name,
            cin: req.body.cin,
            phone: req.body.phone
        });
        console.log('here is  hdhksdjf')
        await client.save().then(data => {
            res.status(200).send({
                message:"Client created successfully!!",
                client:data
            });
        }).catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating Client"
            });
        });
    })

// Retrieve all Clients from the database.
exports.findAll = async (req, res) => {
    try {
        const client = await Client.find();
        res.status(200).json(client);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single Client with an id
exports.findOne = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        res.status(200).json(client);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a Client by the id in the request
exports.update = async (req, res) => {
    if(!req.body.email || !req.body.name || !req.body.cin || !req.body.phone) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await Client.findByIdAndUpdate(id, req.body).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Client not found.`
            });
        }else{
            res.status(200).send({ message: "Client updated successfully." })
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a Client with the specified id in the request
exports.destroy = async (req, res) => {
    await Client.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
            message: `Client not found.`
            });
        } else {
            res.send({
            message: "Client deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};