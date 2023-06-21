const ContactList = ({ listContacts, removeContact, filterContact }) => {
  const filterContactsList = listContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );
  return (
    <ol className="contact-list">
      {filterContactsList.map((contact) => (
        <li key={contact.id} className="contact-container">
          <span>{contact.name}:</span> <span>{contact.number}</span>
          <button
            type="button"
            id={contact.id}
            onClick={removeContact}
            className="delete-btn"
          >
            delete
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;
