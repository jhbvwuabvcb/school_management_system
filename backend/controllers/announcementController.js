import { Announcement } from "../models/announcementSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

// Create an Announcement
export const createAnnouncement = async (req, res, next) => {
  console.log(req.body);
  const { announcement } = req.body;

  try {
    if (!announcement) {
      return next(handleValidationError("Please fill out the form!", 400));
    }

    const newAnnouncement = await Announcement.create({ announcement });

    res.status(201).json({
      success: true,
      message: "Announcement Created Successfully!",
      announcement: newAnnouncement,
    });
  } catch (err) {
    next(err);
  }
};

// Get All Announcements
export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    
    res.status(200).json({
      success: true,
      announcements,
    });
  } catch (err) {
    next(err);
  }
};
