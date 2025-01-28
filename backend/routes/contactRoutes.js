import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Add a new contact
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, category } = req.body;
    const newContact = new Contact({ name, phone, email, category });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search contacts by name or category
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const contacts = await Contact.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
