import { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [, setSearchQuery] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    try {
      const res = await axios.get(`/api/contacts/search?query=${query}`);
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Contact Address Book
        </h1>
        <ContactForm fetchContacts={fetchContacts} />
        <SearchBar handleSearch={handleSearch} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default App;
