import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} contactsList={contacts} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} setFieldFilter={setFilter} />
      <ContactList listContacts={contacts} />
    </section>
  );
}

export default App;
