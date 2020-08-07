const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fireSchema = new Schema ({
    category: {
        type: String,
        enum: ['size-up', 'building-types', 'veis', 'ventilation', 'co-levels'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    building: {
        type: String,
        enum: ['type-1', 'type-2', 'type-3', 'type-4', 'type-5'],
        required: true
    }
});

module.exports = mongoose.model('Fire', fireSchema);