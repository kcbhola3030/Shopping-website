import React from "react";
import "./Product_card.css";

export default function Product_card(props) {
  return (
    <>
      <div className="card">
        <div>
          <img className="shoe-img" src={props.products.img} />
        </div>
        <div className="subhead lr">{props.products.name}</div>
        <div className="subhead lr"> Rs {props.products.price}/-</div>
      </div>
    </>
  );
}
