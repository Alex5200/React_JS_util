import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  people = [
    {
      name: "Atmega3x",
      age: 49,
      tag: 1
    },
    {
      name: "Stm8",
      age: 34,
      tag: 2
    },
    {
      name: "Atmega328P",
      age: 49,
      tag: 1
    },
    {
      name: "Atmega328",
      age: 49,
      tag: 1
    },
    {
      name: "Stm32",
      age: 34,
      tag: 2
    }
  ];
  state = {
    all: 0,
    Stm: 0,
    Atmega: 0
  };
  i = 0;
  seeAll = () => {
    this.setState({ all: 3 });
  };
  seeTag1 = () => {
    this.setState({ all: 2 });
  };
  seeTag2 = () => {
    this.setState({ all: 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.seeAll}>ALL</button>
        <button onClick={this.seeTag1}>Stm</button>
        <button onClick={this.seeTag2}>Atmega</button>

        {this.people
          .filter(person => person.tag == this.state.all || this.state.all == 3)
          .map(filteredPerson => (
            <li>{filteredPerson.name}</li>
          ))}
      </div>
    );
  }
}
const el = <App />;
ReactDOM.render(el, document.getElementById("divs"));
