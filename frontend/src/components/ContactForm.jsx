import { useState } from "react";
import axios from "axios";

const ContactForm = ({ fetchContacts }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "other",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contacts", formData);
      fetchContacts();
      setFormData({ name: "", phone: "", email: "", category: "other" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="block w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="block w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="block w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
        required
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white"
      >
        <option value="family">Family</option>
        <option value="friends">Friends</option>
        <option value="work">Work</option>
        <option value="other">Other</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200 font-semibold"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
