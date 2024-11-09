import React, { useState, useEffect, useRef } from "react";
import "./BookOrder.css";
import { FiMinusCircle } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/formContext";

const BookOrder = () => {
  const [todayDate, setTodayDate] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [formattedCurrentDate, setFormattedCurrentDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [formattedCheckOutDate, setFormattedCheckOutDate] = useState("");
  const [roomCount, setRoomCount] = useState(0);

  // Form details state
  const [name, setname] = useState("");
  const [mail, setMail] = useState("");
  const [adultCount, setaAdultCount] = useState("");
  const [childernCount, setChildernCount] = useState("");
  const [mobile, setMobile] = useState(""); 

  // form data state 

  const navigate = useNavigate();
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  // context data 

  const {formData, setFormData} = useFormContext()

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
    setCheckOutDate(formattedDate);
    setTodayDate(formattedDate);
    setFormattedCurrentDate(formatDate(today));
    setFormattedCheckOutDate(formatDate(today));
  }, []);

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const handleDateChange = (setter, formatterSetter, dateValue) => {
    setter(dateValue);
    const date = new Date(dateValue);
    formatterSetter(formatDate(date));
  };

  const handleLabelClick = (ref) => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.focus();
        ref.current.showPicker?.();
      }, 0);
    }
  };

  // Function to handle form submission and make API call
  const clickOnSubimt = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      mail, 
      mobile,
      adultCount: adultCount,
      childernCount: childernCount,
      currentDate,
      checkOutDate,
      roomCount: roomCount,
    };
    setFormData(formData)
    setname("")
    setMail("")
    setMobile("")
    setaAdultCount("")
    setChildernCount("")
    navigate("/order-complete")
  };

  return (
    <div className="order-main-container">
      <form onSubmit={clickOnSubimt} className="order-container">
        <div className="order-input-top">
          <input
            onChange={(e) => setname(e.target.value)}
            className="top-input"
            placeholder="Enter your name"
            value={name}
            type="text"
            required
          />
          <input
            onChange={(e) => setMail(e.target.value)}
            className="top-input"
            placeholder="Enter your mail"
            value={mail}
            type="mail"
            required
          />
        </div>
        <div className="order-input-bottom">
          <input
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            type="text"
            placeholder="Mobile"
            required
          />
          <input
            onChange={(e) => setaAdultCount(e.target.value)}
            value ={adultCount}
            type="number"
            min="0"
            placeholder="Adult"
            required
          />
          <input
            onChange={(e) => setChildernCount(e.target.value)}
            value={childernCount}
            type="number"
            min="0"
            placeholder="Children"
          />

          {/* Check-in and Check-out card */}
          <div className="order-check-in-out-card">
            <div className="order-check-in-out">
              <label
                htmlFor="check-in"
                onClick={() => handleLabelClick(checkInRef)}
                style={{ cursor: "pointer" }}
              >
                CHECK-IN
              </label>
              <p>
                {formattedCurrentDate}
                <span>
                  <label
                    htmlFor="check-in"
                    onClick={() => handleLabelClick(checkInRef)}
                  >
                    <MdArrowDropDown style={{ cursor: "pointer" }} />
                  </label>
                </span>
              </p>
              <input
                type="date"
                id="check-in"
                min={todayDate}
                value={currentDate}
                onChange={(e) =>
                  handleDateChange(
                    setCurrentDate,
                    setFormattedCurrentDate,
                    e.target.value
                  )
                }
                required
                ref={checkInRef}
              />
            </div>
            <hr />
            <div className="order-check-in-out">
              <label
                htmlFor="check-out"
                onClick={() => handleLabelClick(checkOutRef)}
                style={{ cursor: "pointer" }}
              >
                CHECK-OUT
              </label>
              <p>
                {formattedCheckOutDate}
                <span>
                  <label
                    htmlFor="check-out"
                    onClick={() => handleLabelClick(checkOutRef)}
                  >
                    <MdArrowDropDown style={{ cursor: "pointer" }} />
                  </label>
                </span>
              </p>
              <input
                type="date"
                id="check-out"
                min={currentDate}
                value={checkOutDate}
                onChange={(e) =>
                  handleDateChange(
                    setCheckOutDate,
                    setFormattedCheckOutDate,
                    e.target.value
                  )
                }
                required
                ref={checkOutRef}
              />
            </div>
            <hr />
            <div className="order-check-in-out">
              <p>ROOMS</p>
              <div className="order-rooms-btn-container">
                <button
                  type="button"
                  onClick={() => {
                    if (roomCount > 0) setRoomCount((prev) => prev - 1);
                  }}
                >
                  <FiMinusCircle className="minus-icon" />
                </button>
                <p>{roomCount}</p>
                <button
                  type="button"
                  onClick={() => {
                    setRoomCount((prev) => prev + 1);
                  }}
                >
                  <FaPlusCircle className="plus-icon"  />
                </button>
              </div>
            </div>

            <div className="order-book-btn-container">
              <button type="submit" className="order-book-btn">
                ₹ 12430
              </button>
              <div className="arrow-icon">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookOrder;
