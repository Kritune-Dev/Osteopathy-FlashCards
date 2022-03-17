import { model, Schema } from 'mongoose';

const thingSchema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    region: { type: String, required: true },
    subregion: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
});

module.exports = model('FlashCard', thingSchema);