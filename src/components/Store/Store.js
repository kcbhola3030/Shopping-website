import {Link} from 'react-router-dom'
import React from "react";
import "./Store.css";
import { FiFilter } from "react-icons/fi";
import Cart from "./Cart";
import { RiSearchLine } from "react-icons/ri";
import Product_card from "./product_card";
import p1 from "../../assets/assets/shoe.jpg";
import p2 from "../../assets/assets/shoe2.png"
import p3 from "../../assets/assets/air.webp"


export default function Store() {
  const products = [
    {
      
      id:1,
      name: "KSL 01",
      price: 2000,
      img: p1,
    },
    {
      id:2,
      name: "KSW 01",
      price: 2500,
      img: p2,
    },
    {
      id:3,
      name: "Royal S 01",
      price: 6000,
      img: p3,
    },
    {
      id:4,
      name: "KSL 01",
      price: 2000,
      img: p1,
    },
    {
      id:5,
      name: "KSW 01",
      price: 2500,
      img: p2,
    },
    {
      id:6,
      name: "Royal S 01",
      price: 6000,
      img: p3,
    },
  ];
  return (
    <>
      <div className="store">
        {/* <div className="cart"> */}
        <div className="cart">
          <div className="title">
            <div className="head lr">Filters</div>
            <div className="head lr">
              <FiFilter />
            </div>
          </div>
          <div>
            <div className="subhead lr">Cost</div>

            <ul className="subody lr">
              {" "}
              <input type="checkbox" multiple />
              Rs 1500-4000
            </ul>
            <ul className="subody lr">
              {" "}
              <input type="checkbox" multiple />
              Rs 4001-7000
            </ul>
            <ul className="lr subody">
              {" "}
              <input type="checkbox" multiple />
              Rs 7001+
            </ul>
          </div>
          <div>
            <div className="subhead  lr">Colour</div>
            <div className="store colours">
              <div style={{ backgroundColor: "red" }} className="colour ">
                {" "}
              </div>
              <div
                style={{ backgroundColor: "rgb(18, 151, 195)" }}
                className="colour "
              >
                {" "}
              </div>
              <div style={{ backgroundColor: "orange" }} className="colour ">
                {" "}
              </div>
              <div style={{ backgroundColor: "green" }} className="colour ">
                {" "}
              </div>
              <div style={{ backgroundColor: "pink" }} className="colour ">
                {" "}
              </div>
            </div>
          </div>
          <div>
            <div className="subhead lr">Design Template</div>
            <ul className="subody lr">
              {" "}
              <input type="checkbox" multiple />2
            </ul>
            <ul className="subody lr">
              {" "}
              <input type="checkbox" multiple />3
            </ul>
            <ul className="subody lr">
              {" "}
              <input type="checkbox" multiple />
              3+
            </ul>
          </div>
          <div>
            <div className="subhead lr">Type</div>
            <ul className="subody lr">
              {" "}
              <input type="checkbox" multiple />
              Loafers
            </ul>
            <ul className="subody lr">
              {" "}
              <input type="checkbox" multiple />
              Sneaker
            </ul>
          </div>
          <center>
            <button className="filter"> Apply</button>
          </center>
        </div>
        <div className="shoes">
          <div className="title">
            <div className="head shoe-title lrshoes">SHOES</div>
            <div className="lrshoes head" style={{ height: "30px" }}>
              {" "}
              <RiSearchLine />
            </div>
            <div className="lrshoes subhead sort">sort by</div>
          </div>
          <div className="list">
            {
              products.map((item)=>
              <>
              <Link to={'/product/'+item.id }>
              <Product_card products ={item} />
                </Link>
                {/* <Product_card products ={item} /> */}
                {/* <a href={'/product'+item.id }> <Product_card product ={products[item.id]}/></a> */}
              </>
              )
            }
          </div>
        </div>
        <Cart />
      </div>
    </>
  );
}
