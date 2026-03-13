import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

router.post("/applications", async (req, res) => {
  try {

    const newApplication = new Application({
      userId: req.body.userId,
      scholarshipId: req.body.scholarshipId
    });

    await newApplication.save();

    res.json({
      message: "Application submitted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;