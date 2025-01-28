import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import Contact from "./models/Contact.js";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.log(err));

// Function to generate random contact data
const generateRandomContact = () => {
  return {
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    category: faker.helpers.arrayElement([
      "family",
      "friends",
      "work",
      "other",
    ]),
  };
};

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Contact.deleteMany({});
    console.log("Database cleared");

    // Generate and insert random contacts
    const contacts = Array.from({ length: 50 }, generateRandomContact); // Generate 50 random contacts
    await Contact.insertMany(contacts);
    console.log("Database seeded successfully");

    // Disconnect from MongoDB
    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.disconnect();
  }
};

// Run the seed function
seedDatabase();
