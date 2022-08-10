const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fireSchema = new Schema ({
    // Fire Categories
    category: {
        type: String,
        enum: ['size-up', 'building-types', 'veis', 'ventilation', 'co-levels'],
        required: true
    },
    // title of section: Fire?
    title: {
        type: String,
        required: true
    },
    building: {
        type: String,
        enum: ['type-1', 'type-2', 'type-3', 'type-4', 'type-5'],
        required: true
    },
    // subCategory: {
    //     type: String,
    //     required: true
    // },
    // subCategoryInfo: {
    //     type: String,
    //     required: true
    // }
    // subcategories
    // sizeUp: {
    //     type: String,
    //     enum: ['arrival-report', 'reminders', "command-priorities", "initial-attack-sequence", "benchmarks"],
    //     // required: true
    // },

});

module.exports = mongoose.model('Fire', fireSchema);