import { Event } from '../models/eventsSchema.js';
import { handleValidationError} from "../middleware/errorHandler.js"

export const createEvent = async (req, res, next) => {
    console.log(req.body)
    const { event } = req.body;
    try {
        if (!event) {
            handleValidationError("please fill full form", 400)
        }
        await Event.create({ event });
        res.status(201).json({
            success: true,
            message: "Event created successfully"
        });
    } catch (err) {
        next(err);
    }
};

export const getAllEvents = async (req, res, next) =>{
    try {
        const events = await Event.find();
        res.status(201).json({
            success: true,
            events,
        })
    } catch (err) {
        next(err)
    }
}