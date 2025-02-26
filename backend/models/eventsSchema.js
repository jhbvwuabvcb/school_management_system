// models/eventsSchema.js
import mongoose from "mongoose";
import validator from "validator";

const eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }   
});

export const Event = mongoose.model('Event', eventsSchema);