import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map(val => <li>{val}</li>);
  return <ul>{listItems}</ul>;
}
function AddOnArray(arrs) {
  const arr = arrs.data;
  const newarr = arr.join();
  return <ul>{newarr}</ul>;
}
const arr = ["A", "B", "C", "D", "E"];
const btn = <AddOnArray data={arr} />;
const el = <MyList data={arr} />;

ReactDOM.render(el, document.getElementById("root"));
ReactDOM.render(btn, document.getElementById("Btn1"));
