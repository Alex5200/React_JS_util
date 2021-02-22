import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
/*
function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km / 1.609).toFixed(2);
  }

  return (
    <div>
      <input type="text" value={km} onChange={handleChange} />
      <p>
        {" "}
        {km} km is {convert(km)} miles{" "}
      </p>
    </div>
  );
}
*/
function Converter() {
  const [name, SetName] = useState("enter name");
  function handleChange(e) {
    SetName(e.target.value);
  }
  function canges(name) {
    return name;
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p> You name {canges(name)} </p>
    </div>
  );
}
const el = <Converter />;
ReactDOM.render(el, document.getElementById("root"));
