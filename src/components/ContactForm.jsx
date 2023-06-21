import { useState } from "react";
import { nanoid } from "nanoid";

const ContactForm = ({ setContacts, contactsList }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = [{ id: nanoid(5), name: name, number: number }];
        const newContacts = contactsList.concat(newContact);
      setContacts(newContacts);
  };

  return (
    <form onSubmit={handleSubmit}> 
      <label>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ]+[a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes and can start with +"
          pattern="^\+\d{1,4}[-\s]\d{3,12}$"
          value={number}
          onChange={(evt) => setNumber(evt.target.value)}
          required
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
