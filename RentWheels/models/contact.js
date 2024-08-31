const mongoose=require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type :mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact',contactSchema);