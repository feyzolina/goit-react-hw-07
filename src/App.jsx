import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="subtitle">Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
