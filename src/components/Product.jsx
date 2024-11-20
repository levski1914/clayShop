import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";

import "react-rater/lib/react-rater.css";

import "react-image-gallery/styles/css/image-gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Review from "./Review";
import Cart from "./popup/Cart";
const Product = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState("Info");

  const [reviews, setReviews] = useState(() => {
    const savedReview = localStorage.getItem("reviews");
    return savedReview ? JSON.parse(savedReview) : [];
  });

  const [showCart, setShowCart] = useState(false);

  const productDetailItem = {
    images: [
      {
        original: "../../public/dress1.jpg",
        thumbnail: "../../public/dress1.jpg",
      },
      {
        original: "../../public/dress2.jpg",
        thumbnail: "../../public/dress2.jpg",
      },
      {
        original: "../../public/dress3.jpg",
        thumbnail: "../../public/dress3.jpg",
      },
      {
        original: "../../public/dress4.jpg",
        thumbnail: "../../public/dress4.jpg",
      },
      {
        original: "../../public/dress1.jpg",
        thumbnail: "../../public/dress1.jpg",
      },
    ],
    title: "Black Valentino dress with tulle",
    reviews: 150,
    rating: 4.5,
    availability: true,
    brand: "Brand",
    price: 1315,
    desc: "Dress with tulle and collar Peter Pan from REDValentino (Red Valentino). Peter Pan collar, tulle panels, sleeveless model, concealed back zipper and pleated skirt. Black colour.",

    size: ["XS", "S", "M"],
    color: ["#1B2437", "#127681", "#32E0C4"],
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color before adding to cart");
      return;
    }

    const newItem = {
      ...productDetailItem,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };
    setCartItems((prevItem) => [...prevItem, newItem]);
    setShowCart(true);
  };

  return (
    <>
      <div className="container-xl mx-auto p-5">
        {/* Main Product Section */}
        <section
          className="row d-flex gap-3 border rounded-4 shadow-lg bg-white p-4 mb-5"
          style={{ height: "auto" }}
        >
          {/* Left: Image Gallery */}
          <div className="col h-100">
            <ReactImageGallery
              items={productDetailItem.images}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>

          {/* Right: Product Info */}
          <div className="col">
            <div className="col d-flex justify-content-between">
              <p
                className="badge px-3 py-2"
                style={{ backgroundColor: "#E5E5EA", color: "#1B2437" }}
              >
                {" "}
                Popular
              </p>
              <FontAwesomeIcon
                style={{ color: "EDA3B5" }}
                icon="fa-regular fa-heart"
              />
            </div>
            <h1 className="fs-2 fw-bold mb-3">{productDetailItem.title}</h1>
            <div className="d-flex align-items-center mb-3">
              <Rater
                total={5}
                rating={productDetailItem.rating}
                interactive={false}
              />
              <span className="ms-2 text-muted">
                ({productDetailItem.reviews} reviews)
              </span>
            </div>

            {/* Tabs: Info, Brand, Delivery */}
            <div className="mb-4 row">
              {["Info", "Brand", "Delivery"].map((tab) => (
                <button
                  key={tab}
                  className={`btn col   ${
                    activeTab === tab
                      ? " fw-bold buttonActive"
                      : " buttonUnactive text-muted"
                  } me-2`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "Info" && (
              <>
                <p className="mb-3 text-secondary">{productDetailItem.desc}</p>

                <div className="row mb-3 w-100 justify-content-between align-items-center">
                  <div className="col">
                    <h4 className="fw-semibold fs-5 text-dark">Size</h4>
                    <div className="d-flex gap-2 ">
                      {productDetailItem.size.map((size) => (
                        <button
                          key={size}
                          style={{ width: "70px", height: "44px" }}
                          className={`btn border rounded  ${
                            selectedSize === size
                              ? "sizeColor text-white"
                              : "bg-white text-dark border-secondary"
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col">
                    <h4 className="fw-semibold mb-2">Color</h4>
                    <div className="d-flex gap-2">
                      {productDetailItem.color.map((color) => (
                        <div
                          className={`  mx-2 rounded-2 d-grid justify-content-center align-items-center ${
                            selectedColor === color ? "border border-dark" : ""
                          }`}
                          style={{
                            width: "32px",
                            height: "32px",
                          }}
                        >
                          <div
                            className="border-0 rounded-1"
                            key={color}
                            style={{
                              width: "24px",
                              height: "24px",
                              backgroundColor: color,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedColor(color)}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Brand" && (
              <p className="text-secondary mb-3">
                Brand: {productDetailItem.brand}
              </p>
            )}
            {activeTab === "Delivery" && (
              <p className="text-secondary mb-3">
                Delivery info coming soon...
              </p>
            )}

            {/* Price and Actions */}
            <div className="d-flex justify-content-start gap-4 align-items-center">
              <h3 className="fs-3" style={{ letterSpacing: "2px" }}>
                ${productDetailItem.price}
              </h3>
              <div className="buyButtons  d-flex gap-3">
                <button
                  className="btn text-white shadow"
                  style={{ backgroundColor: "#EDA3B5", width: "" }}
                >
                  Shop Now
                </button>
                <button
                  className="btn addToCart shadow"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section
          className="row d-flex gap-3 border rounded-4 shadow-lg bg-white p-4 mb-5"
          style={{ height: "auto" }}
        >
          <h1 className="fs-2  mb-3">Reviews</h1>
          <Review reviews={reviews} setReviews={setReviews} />
        </section>
      </div>
      {showCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setShowCart={setShowCart}
        />
      )}
    </>
  );
};

export default Product;
