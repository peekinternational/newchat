const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
    "_id": {
        type: Number
    },
    "name": String,
    "description": {
        type: String,
    },
});

module.exports = mongoose.model('test', testSchema);

