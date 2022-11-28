import { Link, useParams,  } from "react-router-dom";
import React,{useState} from "react";
import Cart from "../Cart";
import "./Product.css";
import { AiOutlineLeft } from "react-icons/ai";
import p1 from "../../../assets/assets/shoe.jpg";
import p2 from "../../../assets/assets/shoe2.png";
import p3 from "../../../assets/assets/air.webp";

export default function Product() {
  const products = [
    {
      id: 1,
      name: "KSL 01",
      price: 2000,
      img: p1,
      manufacturer: "From KICKSUP and kc",
    },
    {
      id: 2,
      name: "KSW 01",
      price: 2500,
      img: p2,
      manufacturer: "From KICKSUP and kc",
    },
    {
      id: 3,
      name: "Royal S 01",
      price: 6000,
      img: p3,
      manufacturer: "From KICKSUP and kc",
    },
    {
      id: 4,
      name: "KSL 01",
      price: 2000,
      img: p1,
      manufacturer: "From KICKSUP and kc",
    },
    {
      id: 5,
      name: "KSW 01",
      price: 2500,
      img: p2,
      manufacturer: "From KICKSUP and kc",
    },
    {
      id: 6,
      name: "Royal S 01",
      price: 6000,
      img: p3,
      manufacturer: "From KICKSUP and kc",
    },
  ];
  const params = useParams();
  const pid = params.pid;
  const item = products[pid - 1];

  const [list,setList] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault();
      setList(item);
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="store">
          <div className="product">
            <div className="head l">
              {" "}
              <Link to="/store">
                <AiOutlineLeft />{" "}
              </Link>
              Your Design Space
            </div>
            <div className="store">
              <div>
                <img className="product-image" src={item.img} />
              </div>
              <div className="f-column">
                <div>
                  <img className="product-small-image" src={item.img} />
                </div>
                <div>
                  <img className="product-small-image" src={item.img} />
                </div>
                <div>
                  <img className="product-small-image" src={item.img} />
                </div>
              </div>
              <div className="details f-column">
                <div className="head">{item.name}</div>
                <div className="subhead">{item.manufacturer}</div>
                <br />
                <div className="desc">Rs {item.price}/-</div>
              </div>
            </div>
            <div className="btn-width">
              <button className="product-btn light"> share design</button>
              <button className="product-btn dark"> add to cart</button>
            </div>
          </div>
          <Cart list = {list} />
        </div>
      </form>
    </>
  );
}
