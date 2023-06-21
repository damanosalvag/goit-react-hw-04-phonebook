import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const storage = JSON.parse(localStorage.getItem("contacts"))
      ? JSON.parse(localStorage.getItem("contacts"))
      : [];
    return storage;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleRemoveContact = (e) => {
    const newContactsList = contacts.filter(
      (contact) => contact.id !== e.target.id
    );

    setContacts(newContactsList);
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} contactsList={contacts} />
      <h2 className="title">Contacts</h2>
      <Filter filterValue={filter} setFieldFilter={setFilter} />
      <ContactList
        listContacts={contacts}
        removeContact={handleRemoveContact}
        filterContact={filter}
      />
    </section>
  );
}

export default App;
