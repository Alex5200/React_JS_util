import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Counter extends React.Component {
  state = {
    counter: 0,
    counter2: 0
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter2: this.state.counter2 + 2 });
  };
  /*componentDidUpdate() { Alert нажатий на к
    alert("Number of clicks: " + this.state.counter);
  }*/
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <p>{this.state.counter2}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const el = <Counter />;
ReactDOM.render(el, document.getElementById("root"));
//////////Вторая реализация кнопки
/** 
function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const el = <Counter />;
ReactDOM.render(el, document.getElementById("root"));
*/
