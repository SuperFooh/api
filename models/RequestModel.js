const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    id: Number,
    type: String,
    stage: String,
    status: String,
    from: String,
    subject: String,
    receiver: String,
    startDate: Date,
    hits: Number,
    scope: Date,
    groups: {
        date: String
    },
    workGroup: String,
})

module.exports = mongoose.model('Request', requestSchema)