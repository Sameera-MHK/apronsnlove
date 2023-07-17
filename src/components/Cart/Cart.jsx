import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 10,
      img: "https://images.pexels.com/photos/675955/pexels-photo-675955.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Chocolate Chips",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur iusto at, qui quae quidem recusandae numquam pariatur corrupti obcaecati.",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/114121/pexels-photo-114121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Nut",
      isNew: false,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur iusto at, qui quae quidem recusandae numquam pariatur corrupti obcaecati.",
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="cart">
      <h1 className="cart-head">Product in your cart</h1>

      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 50)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => console.log("delete")}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
