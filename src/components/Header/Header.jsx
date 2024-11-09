import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { FaFacebook, FaPlusCircle } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FiMinusCircle } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import ladakh from "../../assets/ladakh.jpg";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [todayDate, setTodayDate] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [formattedCurrentDate, setFormattedCurrentDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [formattedCheckOutDate, setFormattedCheckOutDate] = useState("");
  const [roomCount, setRoomCount] = useState(0);

  const navigate = useNavigate()

  // References for the input elements
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  useEffect(() => {
    // Get the current date and format it as yyyy-mm-dd
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
    setCheckOutDate(formattedDate);
    setTodayDate(formattedDate);
    setFormattedCurrentDate(formatDate(today));
    setFormattedCheckOutDate(formatDate(today));
  }, []);

  // Function to format date as "01 Feb 2022"
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  // Handle input changes and update formatted date
  const handleDateChange = (setter, formatterSetter, dateValue) => {
    setter(dateValue);
    const date = new Date(dateValue);
    formatterSetter(formatDate(date));
  };

  // Helper function to focus on input with a small delay
  const handleLabelClick = (ref) => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.focus();
        ref.current.showPicker?.(); // Optional: `showPicker()` for browsers that support it
      }, 0);
    }
  };

  return (
    <div className="header-main-container">
      <div className="header-container">
        <div className="header-left-container">
          <h1>
            Work from <br />
            Ladakh
          </h1>
          <p>India’s first true digital tourism ecosystem</p>
          <div className="header-icons-container">
            <FaFacebook className="icon-1" />
            <AiFillInstagram className="icon-2" />
          </div>
        </div>
        <img src={ladakh} alt="" />
      </div>

      {/* ---------checkin and checkout card ---------- */}
      <div className="check-in-out-card">
        {/* ----------- Check-In Block ------------- */}
        <div className="check-in-out">
          <label
            htmlFor="check-in"
            onClick={() => handleLabelClick(checkInRef)}
            style={{ cursor: "pointer" }}
          >
            CHECK-IN
          </label>
          {/* Display the formatted check-in date */}
          <p>
            {formattedCurrentDate}{" "}
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
        {/* ------------- Check-Out Block ----------- */}
        <div className="check-in-out">
          <label
            htmlFor="check-out"
            onClick={() => handleLabelClick(checkOutRef)}
            style={{ cursor: "pointer" }}
          >
            CHECK-OUT
          </label>
          {/* Display the formatted check-out date */}
          <p>{formattedCheckOutDate}
          <span>
              <label
                htmlFor="check-in"
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
        {/* ---------- Rooms Block ------------ */}
        <div className="check-in-out">
          <p>ROOMS</p>
          <div className="rooms-btn-container">
            <button
              type="button"
              onClick={() => {
                if (roomCount > 0) setRoomCount((prev) => prev - 1);
              }}
            >
              <FiMinusCircle size={20} />
            </button>
            <p>{roomCount}</p>
            <button
              type="button"
              onClick={() => {
                setRoomCount((prev) => prev + 1);
              }}
            >
              <FaPlusCircle size={20} />
            </button>
          </div>
        </div>

        <button onClick={()=>navigate("/order")}  type="button" className="book-btn">BOOK</button>
      </div>
    </div>
  );
};

export default Header;
