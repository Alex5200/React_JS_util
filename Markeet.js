import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Item(props) {
  return (
    <div className="item">
      <b className="txt">Name:</b> {props.name} <br />
      <b className="txt">Price:</b> ${props.price}
    </div>
  );
}
function Navbar(props) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="default.asp">{props.p1}</a>
        </li>
        <li>
          <a href="news.asp">{props.p2}</a>
        </li>
        <li>
          <a href="contact.asp">{props.p3}</a>
        </li>
        <li>
          <a href="about.asp">{props.p4}</a>
        </li>
      </ul>
    </div>
  );
}
function Navs() {
  return (
    <div class="nv">
      <Navbar p1="About" />
      <Navbar p2="Contact" />
      <Navbar p3="About" />
      <Navbar p4="About" />
    </div>
  );
}
function App() {
  return (
    <div>
      <Item name="Cheese" price="4.99" />
      <Item name="Bread" price="1.5" />
      <Item name="Ice cream" price="24" />
      <Item name="Banana" price="33" />
    </div>
  );
}

const el = <App />;
const nv = <Navs />;
ReactDOM.render(el, document.getElementById("root"));
ReactDOM.render(nv, document.getElementById("navbars"));
