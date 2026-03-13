import express from "express";
import Scholarship from "../models/Scholarship.js";

const router = express.Router();
router.post("/", async (req, res) => {

  try {

    const scholarship = new Scholarship(req.body);

    await scholarship.save();

    res.json({
      message: "Scholarship added successfully",
    });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});
router.get("/", async (req, res) => {

  try {

    const scholarships = await Scholarship.find();

    res.json(scholarships);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});

export default router;