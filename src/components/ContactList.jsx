const ContactList = ({ listContacts }) => {
  return (
    <ol className="contact-list">
      {listContacts.map((contact) => (
        <li key={contact.id} className="contact-container">
          <span>{contact.name}:</span> <span>{contact.number}</span>
          <button type="button" id={contact.id}>
            delete
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;
