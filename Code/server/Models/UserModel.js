const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    verified: {
                type: Boolean,
                default: false
            },
    token: {

        type: String,
        default: null
    },
    
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: true
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userShema);

