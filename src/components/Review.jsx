import React, { useState } from "react";
import Rater from "react-rater";

import "react-rater/lib/react-rater.css";
const Review = ({ reviews, setReviews }) => {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    inputName: "",
    inputEmail: "",
    inputTextarea: "",
  });

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.inputName ||
      !formData.inputEmail ||
      !formData.inputTextarea ||
      rating === 0
    ) {
      alert("Please fill all fields and select a rating.");
      return;
    }

    const newReview = {
      inputName: formData.inputName,
      inputEmail: formData.inputEmail,
      inputTextarea: formData.inputTextarea,
      rating,
      date: new Date().toLocaleDateString(),
    };

    setReviews((prev) => [newReview, ...prev]);

    setFormData({ inputName: "", inputEmail: "", inputTextarea: "" });
    setRating(0);
  };
  return (
    <>
      <Rater
        total={5}
        rating={4}
        onRate={({ rating }) => setRating(rating)}
        interactive={true}
      />
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md inputName1">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Type name..."
            className="form-control"
            id="inputName"
            value={formData.inputName}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-md inputEmail1">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Type email..."
            className="form-control"
            id="inputEmail"
            value={formData.inputEmail}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-md-12 inputTextArea mt-5">
          <label htmlFor="inputTextarea" className="form-label">
            Message
          </label>
          <textarea
            id="inputTextarea"
            placeholder="Type message..."
            className="form-control h-100"
            value={formData.inputTextarea}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <div className="col-12 d-flex submitReview justify-content-end">
          <button type="submit" className="btn  fs-5">
            Add Review
          </button>
        </div>
      </form>

      <div className="review-list mt-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="border p-3 rounded mb-3 shadow-sm bg-light"
            >
              <h5 className="mb-1">
                {review.inputName} &lt; {review.inputEmail} &gt;{" "}
              </h5>
              <p className="mb-0 text-muted">
                <small>{review.date}</small>
              </p>
              <Rater total={5} rating={review.rating} interactive={false} />
              <p className="mt-2">{review.inputTextarea}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to add one!</p>
        )}
      </div>
    </>
  );
};

export default Review;
