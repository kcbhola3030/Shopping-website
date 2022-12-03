import React from "react";
import "./Store.css";
import { FiShoppingBag } from "react-icons/fi";


const  Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

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
            
            {!cart && "Whats stopping you, designer?"}
            {
              cart?.map((item)=>
              <>
                  <div>
                    <div className="f-row">
                      {<img className="product-small-image lr" src={ item.img } alt="image" />}

                      <div className="details f-column">
                        <div className="subhead">{  item.name }</div>
                        <div className="cart-subhead">{  item.manufacturer }</div>
                        <br />
                        <div className="cart-subhead">{ "Rs"} {  item.price}/-</div>
                      </div>
                    </div>
                  </div>
              </>
              )
            }
          </center>
        </div>
        <center>
          <button className="filter td"> Apply</button>
        </center>
      </div>
    </>
  );
}

export default Cart;