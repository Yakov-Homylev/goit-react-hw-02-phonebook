import { nanoid } from "nanoid";
import { Component } from "react";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const id = nanoid();

    this.setState({ contacts: [...this.state.contacts, { name, id, number }] });
  };

  searchByName = (e) => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  filteringArray = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    const contactsArray = this.filteringArray();

    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contacts</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts by name</h3>
          <input type="text" onChange={this.searchByName} />
          <ul>
            {contactsArray.map((contact) => {
              return (
                <li key={contact.id}>
                  {contact.name + ":"} <span>{contact.number}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
