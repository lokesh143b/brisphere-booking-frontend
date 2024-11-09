import React from "react";
import "./OrderComplete.css"; 
import { useFormContext } from "../../context/FormContext";
import okImage from "../../assets/ok.png";
 
const OrderComplete = () => {
  const { formData } = useFormContext();

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  console.log(formData);
 
  return (
    <div className="order-complete-container">
      {/* ------------order details card ------------ */}
      <div className="order-details-card">
        {/* ---------------order-details-left---------- */}
        <div className="order-details-left">
          <h1>{formData.name}</h1>
          <p>+91 - {formData.mobile}</p>
          <p>{formData.mail}</p>
          <p>
            {formData.adultCount === "" ? 0 : formData.adultCount} Adults and{" "}
            {formData.childernCount === "" ? 0 : formData.childernCount}{" "}
            Children
          </p>
        </div>
        <hr />
        {/* ---------------order-details-right--------- */}
        <div className="order-details-right">
          <img src={okImage} alt="" />
          <div>
            <h3>Order Complete</h3>
            <p>
              have questions? <br />
              <span>contact us</span>
            </p>
          </div>
        </div>
      </div>

      {/* ------------checkin and checkout card ------------- */}

      <div className="dates-card">
        <div>
          <h3>CHECK-IN</h3>
          <p>{formData.currentDate}</p>
        </div>
        <hr />
        <div>
          <h3>CHECK-OUT</h3>
          <p>{formData.checkOutDate}</p>
        </div>
        <hr />
        <div>
          <h3>ROOMS</h3>
          <p>{formData.roomCount}</p>
        </div>
        <button>₹ 12430</button>
      </div>
    </div>
  );
};

export default OrderComplete;
