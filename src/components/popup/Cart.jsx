import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Cart.css";
const Cart = ({ cartItems, setCartItems, setShowCart }) => {
  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="">
        <div className="cart-popup-container animate-popup">
          <section
            className=" container-xl shadow bg-white rounded-4 "
            style={{ maxWidth: "1200px" }}
          >
            <article className="row py-1 px-1 d-flex">
              {["Cart", "Checkout", "Shipping", "Done"].map((steps, index) => (
                <button
                  key={index}
                  className={`btn rounded-0 col ${
                    index === 0 ? "buttonActive" : "bg-white buttonUnactive"
                  }`}
                >
                  {steps}
                </button>
              ))}
            </article>

            {/* List with products */}
            <article
              className="row p-3 overflow-y-scroll"
              style={{ maxHeight: "430px" }}
            >
              {cartItems.map((item, index) => (
                <div
                  className="d-flex flex-wrap align-items-center justify-content-between gap-3 p-3 border border-bottom "
                  key={index}
                >
                  <div className="d-flex flex-column flex-md-row align-content-center align-items-center  gap-3 col-12 justify-content-md-center col-md-6">
                    <div className="img border border-2   rounded-2">
                      <img
                        src={item.images[0].original}
                        alt={item.title}
                        style={{ width: "112px", height: "112px" }}
                      />
                    </div>
                    <div className="product-info">
                      <h2 className="text-dark" style={{ fontWeight: "400" }}>
                        {item.title}
                      </h2>
                      <p>
                        Size:{" "}
                        <span style={{ color: "#8E8E93" }}>{item.size}</span>
                      </p>
                      <p>
                        Color:{" "}
                        <span style={{ color: item.color }}>{item.color}</span>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 col-12 col-md-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-minus" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </button>
                  </div>

                  <div className="text-center col-12 col-md-1">
                    <p className="fs-4 ">$ {item.price * item.quantity}</p>
                  </div>
                  <div
                    className="col-1 align-content-center mb-2"
                    onClick={() => handleRemoveItem(index)}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-x mb-5" />
                  </div>
                </div>
              ))}
            </article>
            <article
              className="row d-flex justify-content-end"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <div className="col text-end px-4">
                <p className="fs-5">
                  Total amount: $ <span className="fs-3">{totalAmount}</span>
                </p>
              </div>
            </article>
            <article className=" py-3 endButtons d-flex justify-content-between w-100">
              <div className=" submitReview">
                <button className="btn" onClick={() => setShowCart(false)}>
                  To shop
                </button>
              </div>
              <div className="">
                <button className="btn sizeColor text-white">Continue</button>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cart;
