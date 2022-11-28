import React from "react";
import "./Store.css";
import { FiShoppingBag } from "react-icons/fi";

export default function Cart(props) {
  console.log(props.list.img);
  return (
    <>
      <div className="cart cart2">
        <div className="title">
          <div className="head lr td">CART</div>
          <div className="head lr td">
            <FiShoppingBag />
          </div>
        </div>

        <div className="subhead">
          <center>
            {props.list.length == 0 && "Whats stopping you, designer?"}
            <div>
              <div className="f-row">
                {props.list.length != 0 && <img className="product-small-image lr" src={props.list.img} />}

                <div className="details f-column">
                  <div className="subhead">{props.list.name}</div>
                  <div className="cart-subhead">{props.list.manufacturer}</div>
                  <br />
                  <div className="cart-subhead">{props.list.length != 0 &&"Rs"} {props.list.price}/-</div>
                </div>
              </div>
            </div>
          </center>
        </div>
        <center>
          <button className="filter td"> Apply</button>
        </center>
      </div>
    </>
  );
}
