import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new site img"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <img src={val} />);
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = [
  "https://www.computerhope.com/jargon/h/img.gif",
  "https://lh3.googleusercontent.com/proxy/I9OySsWoykGiPws4_zq5_bdGpNTO1Fy8E7tMv1y4JVr24SRQeiTqettn2x9ar8R_D0OO1KrerjiMT3g8XwUtGKvm1NMa45Psa6yMsU3hHILx",
  "https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk"
];

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById("root")
);
