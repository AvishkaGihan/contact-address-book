const ContactList = ({ contacts }) => {
  return (
    <ul className="grid gap-4">
      {contacts.map((contact) => (
        <li
          key={contact._id}
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200"
        >
          <div className="flex justify-between items-start">
            <strong className="text-xl text-gray-800 font-semibold">
              {contact.name}
            </strong>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              {contact.category}
            </span>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-gray-600 flex items-center">
              <span className="mr-2">📞</span> {contact.phone}
            </p>
            <p className="text-gray-600 flex items-center">
              <span className="mr-2">📧</span> {contact.email}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
